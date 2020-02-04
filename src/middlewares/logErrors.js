import LoggerService from "../services/loggerService";

const logErrors = async (error, req, res, next) => {
    const logger = new LoggerService();
    await logger.logError(error.message);
    res.send(error.message);
};

export default logErrors;