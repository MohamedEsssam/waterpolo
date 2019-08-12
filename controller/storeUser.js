const player = require('../database/models/player')

module.exports = (req, res)=>{
    player.countDocuments({username: req.body.username},(err, count)=>{
        if(count){
            console.log('username exist')
            req.flash('userExist', `${req.body.username} is exist change user name`)
            return res.redirect('/auth/register')
        }else{
            player.create(req.body, (err, user)=>{
                if(err){
                    const registerationErr = Object.keys(err.errors).map(key => err.errors[key].message)
                    req.flash('registerationErr', registerationErr)
                    req.flash('data', req.body)
                    
                    //console.log(Object.keys(err.errors).map(key => err.errors[key].message))
                    return res.redirect('/auth/register') 
                }
                res.redirect('/auth/login')
            })
        }
    })
}