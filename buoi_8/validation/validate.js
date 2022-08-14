const joi = require('joi')

//validate when register

function validateRegister(data){
    const schema = joi.object({
        name : joi.string().min(5).required(),
        email : joi.string().email().required(),
        password : joi.string().min(6).required(),
        admin : joi.boolean().required()
    })
    return schema.validate(data)
}

function validateLogin(data){
    const schema = joi.object({
        email : joi.string().email().required(),
        password : joi.string().min(6).required()
    })
    return schema.validate(data)
}

module.exports.validateRegister = validateRegister
module.exports.validateLogin = validateLogin