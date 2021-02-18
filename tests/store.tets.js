const Storage = require('../storage.js');

// const debug = r => {console.log(r); return r;} 


(async() => {
    try {
        let storage = new Storage();
        await storage.set({name:'pepe',age:'22'});
        await storage.set({name:'pepe',age:'22'});
        await storage.set({name:'pepe',age:'22'});


        let resultado = await storage.deleteById(1);
        // console.log(resultado);
        // // COMPROBAR QUE SE HA BORRADO
         let r = await storage.get();
         console.log(r);

        // // PROBAR EL CASO DE ERROR
        //  await storage.deleteById(1);

    } catch (error) {
        console.log('manejo de la excepcion', error);
    }

})();



