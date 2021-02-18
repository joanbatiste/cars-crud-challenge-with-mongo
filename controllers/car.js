const Storage = require('../storage');

class Car {

    storage;

    constructor() {
        this.storage = new Storage();
    }

    async indexAll() {
        return this.storage.get();
    }

    async store(car) {
        return this.storage.set(car);
    }

    async update(id, car) {    
        return this.storage.updateById(id,car);
    }

    async destroy(id) {
        return this.storage.deleteById(id);
    }



}


let carController = new Car();
module.exports = carController;