const User = require('../models/user');
const bcrypt = require("bcryptjs");

class UserController {

    constructor() {
    }

    async indexAll() {
        return User.find().limit(10);
    }

    async store(user) {
        user.password = await bcrypt.hash(user.password, 5);
        return User.create(user);
    }

    async update(id, user) {    
        return User.findByIdAndUpdate(id,user);
    }

    async destroy(id) {
        return User.findByIdAndRemove(id);
    }

};

let userController = new UserController();
module.exports = userController;