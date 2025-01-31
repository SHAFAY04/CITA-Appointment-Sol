export {};
import { Request,Response } from 'express';
    import * as path from 'path';
import * as express from 'express';
import { logger } from './middleware/logEvents';
import errorHandler from './middleware/errorHandler';
import * as cors from 'cors';
import corsOptions from './config/corsOptions';
import jobsRoute from './routes/jobsRoute';
import registerRouter from './routes/register';
import authRoute from './routes/auth';
import verifyJwt from './middleware/verifyJWT';
import * as cookieParser from 'cookie-parser';
import refreshRoute from './routes/refresh';
import logoutRouter from './routes/logout';
import credentials from './middleware/credentials';
import * as dotenv from 'dotenv';
import browseRoute from './routes/browseRoute';


dotenv.config();

const PORT = process.env.PORT || 3500;

const app = express();

//this middleware checks if the request origin is allowed and sets the Allow credentials to true so cookies can be fetched in the frontend
app.use(credentials);

// Cross-Origin Resource Sharing
//if the origin is allowed, the backend includes the CORS header Access-Control-Allow-Origin in its response.
app.use(cors(corsOptions));

//this gives you access to req.body and we can get json data
app.use(express.json());

// Middleware for parsing cookies into javascript objects to access like req.cookies
app.use(cookieParser());

app.use('/register', registerRouter);

app.use('/auth', authRoute);

app.use('/refresh', refreshRoute);

app.use('/logout', logoutRouter);

// Authentication middleware for routes after this point
app.use(verifyJwt);
app.use('/browse',browseRoute)

app.get('^/*', (req:Request, res:Response) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Handle CORS errors with the error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`SERVER IS UP AT ${PORT}!`);
});
