import('module-alias/register');
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import router from './src/routes';
import {logRequest as infoLogger} from './src/middlewares/logRequest';
import {logErrors as errorLogger} from './src/middlewares/logErrors';

const port = process.env.PORT || 3000;
const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(helmet());
app.use(infoLogger);
app.use(router);
app.use(errorLogger);

app.listen(port, () => {
    console.log('PORT: ', port);
});
