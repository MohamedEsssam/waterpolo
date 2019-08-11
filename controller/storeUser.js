const player = require('../database/models/player')

module.exports = (req, res)=>{
    player.countDocuments({username: req.body.username},(err, count)=>{
        if(count){
            console.log('username exist')
            res.redirect('/auth/register')
        }else{
            player.create(req.body, (err, user)=>{
                if(err){
                    console.log(err)
                    res.redirect('/auth/register')
                }
                res.redirect('/auth/login')
            })
        }
    })
}