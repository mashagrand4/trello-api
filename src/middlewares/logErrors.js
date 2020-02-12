import LoggerService from "../services/loggerService";

const logger = new LoggerService();

export const logErrors = (error, req, res, next) => {
    logger.logError(error.message);
    res.send(error.message);
};