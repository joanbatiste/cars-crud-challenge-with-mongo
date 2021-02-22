const Car = require('../models/car');

class CarController {

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


let carController = new CarController();
module.exports = carController;