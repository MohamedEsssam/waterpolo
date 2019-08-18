const player = require('../database/models/player')
const coach = require('../database/models/coach')
const path = require('path')


module.exports = (req, res)=>{
    const {image} = req.files
    if(req.body.username == ''){
        req.body.username = req.session.username
    }
    if(req.body.fname == '' || req.body.lname == ''){
        req.flash('emptyInfo', 'you must provide firstname and last name')
       return res.redirect('/auth/edit')
    }
    if(req.body.username == req.session.username){
        image.mv(path.resolve(__dirname,'..', 'public/profilePicture', image.name), (error) => {
            player.findByIdAndUpdate(req.session.userId, {...req.body, image: `/profilePicture/${image.name}`},(err, user)=>{
            })
        })
               return res.redirect('/auth/Profile')
    }
    player.findOne({username : req.body.username}, (err, user)=>{
        if(user){
            req.flash('userExist', `${req.body.username} is exist change username`)
            req.flash('data', req.body)
            return res.redirect('/auth/edit')
        }else{
            image.mv(path.resolve(__dirname,'..', 'public/profilePicture', image.name), (error) => {
                player.findByIdAndUpdate(req.session.userId, {...req.body, image: `/profilePicture/${image.name}`},(err, user)=>{
                    res.redirect('/auth/Profile')
                })
            })
        }
    })
}