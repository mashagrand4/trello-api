import winston from "winston";

export default class Logger {
    constructor() {
        console.log(process.env.NODE_ENV);
        if(process.env.NODE_ENV === 'production') {
            this.logger = winston.createLogger({
                level: 'info',
                format: winston.format.json(),
                transports: [
                    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
                    new winston.transports.File({ filename: './logs/combined.log' })
                ],
            });
        } else {
            this.logger = winston.createLogger({
                level: 'info',
                format: winston.format.simple(),
                transports: [
                    new winston.transports.Console(),
                    new winston.transports.Console()
                ],
            });
        }
    }

    async info(message) {
        this.logger.log('info', message);
    }

    async error(message) {
        this.logger.log('error', message);
    }
}