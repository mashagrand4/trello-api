export const handleErrors = logger => (error, req, res, next) => {
    logger.logError(error.message);
    res.status(400).send(error.message)
};