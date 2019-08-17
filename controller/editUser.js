const player = require('../database/models/player')
const coach = require('../database/models/coach')

module.exports = (req, res)=>{
    if(req.body.username == ''){
        req.body.username = req.session.username
    }
    if(req.body.fname == '' || req.body.lname == ''){
        req.flash('emptyInfo', 'you must provide firstname and last name')
       return res.redirect('/auth/edit')
    }
    if(req.body.username == req.session.username){
        player.findByIdAndUpdate(req.session.userId, req.body, (err, user)=>{
        })
               return res.redirect('/auth/Profile')
    }
    player.findOne({username : req.body.username}, (err, user)=>{
        if(user){
            req.flash('userExist', `${req.body.username} is exist change username`)
            req.flash('data', req.body)
            return res.redirect('/auth/edit')
        }else{
            player.findByIdAndUpdate(req.session.userId, req.body, (err, user)=>{
                res.redirect('/auth/Profile')
            })
        }
    })
}