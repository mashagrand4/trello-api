import winston from "winston";

export default class LoggerService {
    constructor() {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.File({
                    filename: './logs/info.log',
                    format: winston.format.json(),
                    level: 'info',
                }),
                new winston.transports.File({
                    filename: './logs/error.log',
                    format: winston.format.json(),
                    level: 'error',
                })
            ],
        });

        if (process.env.NODE_ENV !== 'production') {
            this.logger.clear().add(new winston.transports.Console({
                format: winston.format.simple(),
            }));
        }
    }

    logError(message) {
        this.logger.error(message);
    }

    logInfo(message) {
        this.logger.info(message);
    }
}