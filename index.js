const express = require('express')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const players = require('./database/models/player')
const teams = require('./database/models/team')


const url = 'mongodb://localhost/waterpolo'


mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, (err, db)=>{
    if(err)throw err;
    console.log("DATABASE Created !")
});



var player = new players({
    username: "ahmed",
    password: "1234",
    fname : "Mohamed"
});
player.save();

var team = new teams({
    captinStartDate : "21/7/2019",
    teamName: "Ahly",
    captinId: player._id
});

team.save(function(error) {
    if (!error) {
        teams.find({}).populate('captinId')
            .exec(function(error, posts) {
                console.log(JSON.stringify(posts, null, "\t"))
            })
    }
});


const app = new express()

app.use(express.static('public'))

app.use(fileUpload())

app.use(expressEdge)

app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


app.listen(3000, ()=>{
    console.log('start server')
})