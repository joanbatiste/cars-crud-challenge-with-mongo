const Store = require('../store');

class Car {

    storage;

    constructor() {
        this.storage = new Store();
    }

}


let carController = new Car();
module.exports = carController;