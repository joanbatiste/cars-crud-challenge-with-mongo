const User = require('../models/user');

class UserController {

    constructor() {
    }

    async indexAll() {
        return Car.find().limit(10);
    }

    async store(car) {
        return Car.create(car);
    }

    async update(id, car) {    
        return Car.findByIdAndUpdate(id,car);
    }

    async destroy(id) {
        return Car.findByIdAndRemove(id);
    }

}

let userController = new UserController();
module.exports = userController;