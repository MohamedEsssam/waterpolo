const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const playerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    sex: {
        type: String,
    },
    status: {
        type: String,
    },
    image: {
        type: String,
    },
    teamName: [{
        playIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team'
        }
    }]
});
plugin(AutoIncrement, {id:'order_seq',inc_field: 'order'});
playerSchema.pre('save', function (next) {
    const user = this
 
    bcrypt.hash(user.password, 10, function (error, encrypted) {
        user.password = encrypted
        next()
    })
})
module.exports = mongoose.model('Player', playerSchema);