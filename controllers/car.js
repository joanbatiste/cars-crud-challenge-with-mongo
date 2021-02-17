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

    async update() {
        return;
    }

    async destroy() {
        return;
    }



}


let carController = new Car();
module.exports = carController;