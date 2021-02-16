const Store = require('../store');

class Car {

    store;

    constructor() {
        this.store = new Store();
    }

}


let carController = new Car();
module.exports = carController;