const mongoose = require('mongoose');

const carSchema = {
    brand: "String",
    model: "String",
    year: "Number"
}

const Car = mongoose.model('Car', carSchema);

module.exports = Car;