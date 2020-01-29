import Joi from '@hapi/joi';

const CardSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    description: Joi.string()
        .alphanum()
        .min(3)
        .max(150)
        .required(),

    estimate: [
        Joi.string(),
        Joi.number()
    ],

    status: [
        Joi.string(),
        Joi.number()
    ],

    due_date: [
        Joi.string(),
        Joi.number()
    ],

    labels: [
        Joi.string(),
        Joi.number()
    ],
});

export default CardSchema;