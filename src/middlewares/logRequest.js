export const logRequest = logger => (req, res, next) => {
    logger.logInfo(req.path);
    next();
};