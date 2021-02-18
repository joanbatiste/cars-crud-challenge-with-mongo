const router = require('express').Router();
const carRouter = require('./routers/carRouter');


router.use('/cars',carRouter);


module.exports = router;