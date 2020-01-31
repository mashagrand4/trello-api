import Joi from '@hapi/joi';
import STATUS from "../../constants/STATUS";

const CardSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    description: Joi.string()
        .min(3)
        .max(150)
        .required(),

    estimate: Joi.number()
        .required(),

    status: Joi.string()
        .valid(...STATUS)
        .required(),

    due_date: Joi.string()
        .required(),

    labels:
        Joi.string()
        .required(),
});

export default CardSchema;