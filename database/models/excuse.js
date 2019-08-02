const mongoose = require('mongoose');

const excuseSchema = new mongoose.Schema({
    playerID: [{
        playerName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }
    }],
    description : {
        type : String
    },
    st_date : {
        type : String
    },
    end_date : {
        type : String
    }
})

module.exports = mongoose.model('excuse', excuseSchema);