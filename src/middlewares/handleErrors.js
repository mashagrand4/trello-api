export const handleErrors = logger => (error, req, res, next) => {
    logger.logError(error.message);

    if (error.name === "ServerError") {
        res.status(500);
    } else {
        res.status(400);
    }

    res.send(error.message)
};