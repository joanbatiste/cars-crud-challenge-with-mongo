const mongoose = require('mongoose');

const carSchema = {
    name: "String",
    email: "String",
    password: "String"
}

const User = mongoose.model('User', carSchema);

module.exports = User;