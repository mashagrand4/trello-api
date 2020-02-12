import LoggerService from "../services/loggerService";

const logger = new LoggerService();

export const logRequest = (req, res, next) => {
    logger.logInfo(req.path);
    next();
};