const player = require('../database/models/player')

module.exports = (req, res)=>{
    player.create(req.body, (err, user)=>{
        if(err){
            console.log(err)
            res.redirect('/auth/register')
        }
        res.redirect('/auth/login')
    })
}