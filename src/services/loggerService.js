import winston from "winston";

export default class LoggerService {
    constructor() {
        const consoles = new winston.transports.Console({
            format: winston.format.simple(),
        });

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
            this.logger.add(consoles);
        }
    }

    async logError(message) {
        this.logger.error(message);
    }

    async logInfo(message) {
        this.logger.info(message);
    }
}