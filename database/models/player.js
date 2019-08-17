const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcryptjs')

const playerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'provide your username'],
        unique : true,
        primaryKey:true
    },
    password: {
        type: String,
        required: [true, 'provide your password']
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
    birthDate :{
        type: String
    },
    status: {
        type: String,
    },
    image: {
        type: String,
    },
    teamName: {
        type : mongoose.Schema.ObjectId, ref : 'Team'
    }
});
playerSchema.pre('save', function (next) {
    const user = this
 
    bcrypt.hash(user.password, 10, function (err, encrypted) {
        if(err) throw err;
        user.password = encrypted
        next()
    })
})
module.exports = mongoose.model('Player', playerSchema);