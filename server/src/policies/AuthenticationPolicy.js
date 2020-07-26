const Joi = require('joi');

module.exports = {
    register (req, res, next){
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })

        // const { error, value } = Joi.validate(req.body, schema);
        const { error } = schema.validate(req.body);

        if(error){
            switch(error.details[0].context.key){
                case 'email':
                res.status(400).json({
                    error: 'Please provide a valid email address'
                })
                break;
                case 'password': 
                res.status(400).json({
                    error: `The password provided doesnt match the following rules
                    <br>
                    1. It must contain only the following characters: lowercase, uppercase and 0 - 9
                    <br>
                    2. It must be at least 8 characters long and not more than 32 char
                    `
                })
                break;
                default: 
                res.status(400).json({
                    error: "Invalid Credentials"
                })
            }
        }else{
        next();
        }
    }
}