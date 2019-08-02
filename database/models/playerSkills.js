const mongoose = require('mongoose');

const playerSkillsSchema = new mongoose.Schema({
    playerID: [{
        playerName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }
    }],
    skillName: [{
        ownSkills: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'skills'
        }
    }],
    grade : {
        type : String
    }
})

module.exports = mongoose.model('PlayerSkills', playerSkillsSchema);