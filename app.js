import('module-alias/register');
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import router from './src/routes';
import {logRequest as infoLogger} from './src/middlewares/logRequest';
import {handleErrors as errorHandler} from './src/middlewares/handleErrors';
import LoggerService from "./src/services/loggerService";

const port = process.env.PORT || 3000;
const app = express();
const logger = new LoggerService();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(helmet());
app.use(infoLogger(logger));
app.use(router);
app.use(errorHandler(logger));

app.listen(port, () => {
    console.log('PORT: ', port);
});
