const joi = require("joi");

const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(15);
const price = joi.number().min(2);


const CreateProducschema = joi.object({
    name: name.required(),
    price: price.required(),
})

const UpdateProducschema = joi.object({
    name: name,
    price: price,
})

const GetProducschema = joi.object({
    id: id.required()
})

module.exports = {CreateProducschema,UpdateProducschema,GetProducschema};