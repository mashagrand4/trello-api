import BoardSchema from "./schemas/BoardSchema";
import CardSchema from "./schemas/CardSchema";
import Joi from '@hapi/joi';

export default {
    validateBoardName: (req, res, next) => {
        Joi.string().min(3).validate(req.body.boardName);
        next();
    },

    validateCardName: (req, res, next) => {
        Joi.string().min(3).validate(req.body.cardName);
        next();
    },

    validateBoardFields: async (req, res, next) => {
        const params = req.body;

        try {
            await BoardSchema.validateAsync(params, {
                allowUnknown: true,
                abortEarly: false
            });
            next();
        } catch (err) {
            next(err)
        }
    },

    validateCardFields: async (req, res, next) => {
        const params = req.body;

        try {
            await CardSchema.validateAsync(params, {
                allowUnknown: true,
                abortEarly: false
            });
            next();
        } catch (err) {
            next(err)
        }
    },
};