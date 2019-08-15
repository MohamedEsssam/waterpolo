const player = require('../database/models/player')
const coach = require('../database/models/coach')

module.exports = async(req, res)=>{
    console.log(req.session)
    const posts = await player.findById(req.session.userId)
    console.log(posts)
    res.render('Profile',{
        posts
    })
}