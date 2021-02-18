const router = require('express').Router();
const carsController = require('../controllers/car');
const Car = require('../models/car');

router.get('/',async (req, res) => {   
    try{
        res.json(await carsController.indexAll())
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.post('/',async (req, res) => {
    try{
        const id = await carsController.store(new Car(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
})

router.put('/:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await carsController.update(id,new Car(req.body)));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/:id',async (req, res) => {
   try{
        const id = req.params.id;
        const status = 'deleted'
        await carsController.destroy(id);
        res.json({status,id});
   } catch( error ) {
    return res.sendStatus(500).json({
        message: 'Server Error'
    });   
   }

});



module.exports = router;