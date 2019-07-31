const express = require('express')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')




const url = 'mongodb://localhost/waterpolo'


mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, (err, db)=>{
    if(err)throw err;
    console.log("DATABASE Created !")
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