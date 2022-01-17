import BoardSchema from "./schemas/BoardSchema";
import CardSchema from "./schemas/CardSchema";
import Joi from '@hapi/joi';

export default {
    validateBoardName: async (req, res, next) => {
        try {
            await Joi.string().min(3).required().validateAsync(req.body.boardName);
        } catch (err) {
            next(new Error('boardName is required!'));
        }
        next();
    },

    validateCardName: async (req, res, next) => {
        try {
            await Joi.string().min(3).required().validateAsync(req.body.cardName);
        } catch (err) {
            next(new Error('cardName is required!'));
        }
        next();
    },

    validateBoardFields: async (req, res, next) => {
        const params = req.body;
        try {
            await BoardSchema.validateAsync(params, {
                allowUnknown: true,
                abortEarly: false
            });
        } catch (err) {
            next();
        }
        next();
    },

    validateCardFields: async (req, res, next) => {
        const params = req.body;
        try {
            await CardSchema.validateAsync(params, {
                allowUnknown: true,
                abortEarly: false
            });
        } catch (err) {
            next(err);
        }
        next();
    },
};