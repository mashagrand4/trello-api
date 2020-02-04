import('module-alias/register');
import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes';
import logRequests from './src/middlewares/logRequests';
import logErrors from './src/middlewares/logErrors';

const port = process.env.PORT || 3000;
const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(logRequests);
app.use(router);
app.use(logErrors);

app.listen(port, function () {
    console.log('PORT: ', port);
});
