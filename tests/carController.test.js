const carController = require('../controllers/car');

(async() => {
    try {
        await carController.store({name:'prueba', year: 2011});
        await carController.store({name:'prueba', year: 2011});


        let resultado1 = await carController.destroy(1);
        let resultado2 = await carController.indexAll();

        // PROBANDO EL CASO DE ERROR
        console.log(resultado1, resultado2);

        await carController.update(1,{name:"hola"});

    } catch (error) {
        console.log('ERROR MANEJADO', error.message);
    }
})();