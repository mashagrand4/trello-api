import schema from "./schemas";

const validateSchema = async (req, res, next) => {
    try {
        await schema[req.path].validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).json(error);
    }
};

export default validateSchema;