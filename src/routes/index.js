const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

const validator = require('../validators/indexValidator');

//router.get('/', (req, res) =>{
// res.send('Hello World');
//});

router.get('/', indexController.index);

//router.post('/registrar', validator.registrar, indexController.registrar);

router.route('/registrar').post(validator.registrar, indexController.registrar);

module.exports = router;