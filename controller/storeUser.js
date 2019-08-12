const player = require('../database/models/player')
const coach   = require('../database/models/coach')

module.exports = (req, res)=>{
    const typeSelect = req.body.selectedType;
    if(typeSelect =='player'){
    player.countDocuments({username: req.body.username},(err, count)=>{
        if(count){
            console.log('username exist')
            req.flash('userExist', `${req.body.username} is exist change username`)
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
    }else{
        coach.countDocuments({username: req.body.username},(err, count)=>{
            if(count){
                console.log('username exist')
                req.flash('userExist', `${req.body.username} is exist change username`)
                return res.redirect('/auth/register')
            }else{
                coach.create(req.body, (err, user)=>{
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
}