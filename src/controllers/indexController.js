const res = require("express/lib/response");

const { validationResult } = require('express-validator');

const controller = {};

controller.index = (req, res) => {

   res.render('index');

};

//controller.registrar = (req, res) => {

  //  res.send('Hola');
 
 //};

 controller.registrar = (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        //res.status(400).json({errors: errors.array()});
        res.json(errors);
    }else{
       //Sin errores registramos la data.
       res.json('Sin Errores');
    }
 
 };

module.exports = controller;