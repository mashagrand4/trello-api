import CardSchema from "./schemas/CardSchema";

export default {
    validateBoardName: (req, res, next) => {
        const params = req.body;

        if (!params || !params.boardName || typeof params.boardName !== "string") {
            next(new Error('Invalid params'));
        }
        next();
    },

    validateCardName: (req, res, next) => {
        const params = req.body;

        if (!params || !params.cardName || typeof params.cardName !== "string") {
            next(new Error('Invalid params'));
        }
        next();
    },

    validateBoardFields: async (req, res, next) => {
        const {name, description, color} = req.body;
        const params = {name, description, color};

        try {
            await BoardSchema.validateAsync(params);
            req.body = params;
            next();
        } catch (err) {
            next(new Error('Invalid params'))
        }
    },

    validateCardFields: async (req, res, next) => {
        const {name, description, estimate, status, due_date, labels, boardName} = req.body;
        const params = {name, description, estimate, status, due_date, labels, boardName};

        try {
            await CardSchema.validateAsync(params);
            req.body = params;
            next();
        } catch (err) {
            next(new Error('Invalid params'))
        }
    },
};