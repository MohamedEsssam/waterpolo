const express = require('express')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session');
const connectMongo = require('connect-mongo')
const connectFlash = require('connect-flash')

const players = require('./database/models/player')
const teams = require('./database/models/team')

const Profile = require('./controller/Profile')
const loginPage = require('./controller/login')
const userLogin = require('./controller/userLogin')
const registerPage = require('./controller/register')
const storeUser = require('./controller/storeUser')
const homePage = require('./controller/homePage')
const logout = require('./controller/logout')
const editPage = require('./controller/editPage')
const editUser = require('./controller/editUser')


const url = 'mongodb://localhost/waterpolo';
const mongoStore = connectMongo(expressSession)


mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, (err, db)=>{
    if(err)throw err;
    console.log("DATABASE Created !")
});



// var player = new players({
//     fname: "ahmed",
//     lname:"saeed",
//     sex : "male",
//     username: "ahmed",
//     password: "111"
// });
// player.save();

// var team = new teams({
//     captinStartDate : "21/7/2019",
//     teamName: "smoha",
//     captinId: player._id
// });

// team.save(function(error) {
//     if (!error) {
//         teams.find({}).populate('captinId').where('teamName').equals('smoha')
//             .exec(function(error, posts) {
//                 console.log(JSON.stringify(posts, null, "\t"))
//             })
//     }
// });


const app = new express()
app.use(expressSession({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store : new mongoStore({
        mongooseConnection : mongoose.connection
    })
}));


app.use(express.static('public'))

app.use(fileUpload())

app.use(expressEdge)

app.use(connectFlash());

app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/auth/Profile',Profile)
app.get('/auth/homePage',homePage)
app.get('/auth/login',loginPage)
app.get('/auth/register', registerPage)
app.get('/auth/logout',logout)
app.get('/auth/edit', editPage)


app.post('/user/login',userLogin)
app.post('/user/register', storeUser)
app.post('/user/edit', editUser)



app.listen(3000, ()=>{
    console.log('start server')
})