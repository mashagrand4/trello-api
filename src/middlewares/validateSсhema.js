import schema from "./schemas";

const validateSchema = async (req, res, next) => {
    console.log(req.baseUrl);
    console.log(schema[req.baseUrl]);
    try {
        const result = await schema[req.baseUrl].validateAsync(req.body);
        console.log(result);
        if (!result) {
            res.send(result);
        }
        next();
    } catch (error) {
        res.status(400).json(error);
    }
};

export default validateSchema;