export const handleErrors = logger => (error, req, res) => {
    logger.logError(error.message);

    console.log('erferf');
    console.log(error);

    res.status(400).send(error.message)
};