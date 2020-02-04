import winston from "winston";

export default class LoggerService {
    constructor() {
        const infoFile = new winston.transports.File({
            filename: './logs/info.log',
            format: winston.format.json(),
            level: 'info',
        });
        const errorFile = new winston.transports.File({
            filename: './logs/error.log',
            format: winston.format.json(),
            level: 'error',
        });
        const console = new winston.transports.Console({
            format: winston.format.simple(),
        });

        this.logger = winston.createLogger({
            transports: [
                infoFile,
                errorFile
            ],
        });

        if (process.env.NODE_ENV !== 'production') {
            this.logger.add(console);
        }
    }

    async logError(message) {
        this.logger.error(message);
    }

    async logInfo(message) {
        this.logger.info(message);
    }
}