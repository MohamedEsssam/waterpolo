const mongoose = require('mongoose');

const playerSkillsSchema = new mongoose.Schema({
    playerID: {
            type: mongoose.Schema.ObjectId, ref: 'Player'
    },
    skillName: {
            type: mongoose.Schema.ObjectId, ref: 'skills'
    },
    grade : {
        type : String
    }
})

module.exports = mongoose.model('PlayerSkills', playerSkillsSchema);