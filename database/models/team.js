const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    captinStartDate : String,
    teamName : String,
    captinID: [{
        playIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }
    }]
})
module.exports = mongoose.model('Team', teamSchema);