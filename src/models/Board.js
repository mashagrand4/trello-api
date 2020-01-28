import Joi from '@hapi/joi';

const BoardSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    color: Joi.string()
        .alphanum()
        .min(6)
        .max(30)
        .required(),

    description: Joi.string()
        .alphanum()
        .min(3)
        .max(150)
        .required(),

    create_at: [
        Joi.string(),
        Joi.number()
    ],
});

export default BoardSchema;