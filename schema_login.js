'use strict'


const Joi = require('joi');

const schemaLoginSucesso = Joi.object({
    "cpf": Joi.string().required(),
    "nome": Joi.string().required(),
    "idade": Joi.number().integer().positive().required().options({
        convert: false
    }),
    "endereço": Joi.string().required().optional().allow('', null),
    "token": Joi.string().required()
}).required();


module.exports = {
    schemaLoginSucesso
}