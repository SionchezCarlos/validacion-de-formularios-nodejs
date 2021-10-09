const { body, validationResult } = require('express-validator');

const validator = {};

validator.registrar = [
    body('nameAndLastName', 'Ingrese un nombre y un apellido completo').exists().isLength({min:5}),
    body('age', 'Ingrese un valor numerico').exists().isNumeric(),
    body('emailAddress', 'Ingrese un E-mail válido').exists().isEmail(),
    body('phone').exists().isLength({min:9}),
];

module.exports = validator;