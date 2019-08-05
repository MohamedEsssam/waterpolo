const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    captinStartDate : String,
    teamName : String,
    captinId :{
            type: mongoose.Schema.ObjectId, ref: 'Player'
        }
})
module.exports = mongoose.model('Team', teamSchema);