import schema from "./schemas";

const validateParams = async (req, res, next) => {
    const params = req.body;
    const types = Object.keys(schema);
    let paramsType;

    for(let key in params) {
        if (params.hasOwnProperty(key) && types.includes(key)) {
            paramsType = key;
        }
    }

    try {
        const result = await schema[paramsType].validateAsync(params[paramsType]);
        if (!result) {
            res.send(result);
        }
        next();
    } catch (error) {
        next(error);
    }
};

export default validateParams;