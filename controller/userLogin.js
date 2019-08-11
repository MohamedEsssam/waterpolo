const player = require('../database/models/player')
const bcrypt = require('bcryptjs')

module.exports = (req, res)=>{
    const {username, password} = req.body
    player.findOne({username},(err, user)=>{
        if(user){
            bcrypt.compare(password, user.password, (err, result)=>{
                if(result){
                    console.log('login')
                }else{
                    res.redirect('/auth/login')
                }
            })
        }else{
            console.log('canot login')
        }
    })
}