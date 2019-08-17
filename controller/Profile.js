const player = require('../database/models/player')
const coach = require('../database/models/coach')

module.exports = async(req, res)=>{
    const posts = await player.findById(req.session.userId)
    res.render('Profile',{
        posts
    })
}