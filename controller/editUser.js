const player = require('../database/models/player')
const coach = require('../database/models/coach')

module.exports = (req, res)=>{
    if(req.body.username == ''){
        req.body.username = req.session.username
    }
    if(req.body.fname == '' || req.body.lname == ''){
       return res.redirect('/auth/edit')
    }
    player.findByIdAndUpdate(req.session.userId, req.body, (err, user)=>{
        res.redirect('/auth/Profile')
    })
}