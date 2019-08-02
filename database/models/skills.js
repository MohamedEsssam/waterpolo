const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    skillName : {
        type : String,
        unique : true,
        primaryKey:true
    },
    category : {
        type : String
    },
    Rating : {
        type : String
    },
    video : {
        type : String
    }

})

module.exports = mongoose.model('skills', skillsSchema);