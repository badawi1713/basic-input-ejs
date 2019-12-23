const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
fullname: {
    type: String
},
gender: {
    type: String
},
institution: {
    type: String
},
address: {
    type: String
}
});

module.exports = mongoose.model('User', userSchema);
