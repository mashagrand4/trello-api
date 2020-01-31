import Joi from '@hapi/joi';

const BoardSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    color: Joi.string()
        .max(30)
        .required(),

    description: Joi.string()
        .min(3)
        .max(150)
        .required(),
});

export default BoardSchema;