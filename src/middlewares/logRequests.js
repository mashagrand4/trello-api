import LoggerService from "../services/loggerService";

const logRequests = async (req, res, next) => {
    const logger = new LoggerService();
    await logger.logInfo(req.path);
    next();
};

export default logRequests;