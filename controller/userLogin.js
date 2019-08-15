const player = require('../database/models/player')
const coach = require('../database/models/coach')
const bcrypt = require('bcryptjs')

module.exports = (req, res)=>{
    const typeSelect = req.body.selectedType;
    const {username, password} = req.body
    if(typeSelect =='player'){
    player.findOne({username},(err, user)=>{
        if(user){
            bcrypt.compare(password, user.password, (err, result)=>{
                if(result){
                    console.log('login')
                    req.session.userId = user._id
                    console.log(req.session.userId)
                    res.redirect('/auth/homePage')
                }else{
                    console.log('canot login')
                    res.redirect('/auth/login')
                }
            })
        }else{
            console.log('canot login')
            res.redirect('/auth/login')
        }
    })
    }else{
        coach.findOne({username},(err, user)=>{
            if(user){
                bcrypt.compare(password, user.password, (err, result)=>{
                    if(result){ 
                        console.log('coach login')
                        req.session.userId = coach._id
                        res.redirect('/auth/homePage')
                    }else{
                        console.log('coach canot login')
                        res.redirect('/auth/login')
                    }
                })
            }else{
                console.log('coach canot login')
                res.redirect('/auth/login')
            }
        })
    }
}