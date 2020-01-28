import('module-alias/register');
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import expressWs from 'express-ws';
import indexRouter from './src/routes';
import router from './src/routes/boards';

const port = process.env.PORT || 3000;
const app = express();
expressWs(app);

app.use(cookieParser());

app.use(session({
    key: 'authInfo',
    secret: 'liveAgent',
    saveUninitialized: false,
    resave: false,
    store: new session.MemoryStore(),
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use(router);

app.listen(port, function () {
    console.log('NODE_ENV: ', port);
});
