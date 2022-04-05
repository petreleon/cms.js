import express = require( 'express');
import { Request, Response } from 'express';
import cors = require('cors');
import fileUpload = require('express-fileupload');
import login from './authentificator/login';
import register from './authentificator/register';
import mongoose from 'mongoose';
import config from './config/config';
import verify from './authentificator/verifier';

import { ConnectOptions } from 'mongoose';
mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    } as ConnectOptions, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to mongoDB');
        }
});


const app = express();
const port = process.env.PORT || 80; // default port to listen
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(fileUpload());
app.use('/login', login);
app.use('/register', register);
// define a route handler for the default home page
app.get( "/", [verify], ( _req : Request, res :Response) => {
    res.json( 
        {
            message: "Hello World!"
        }
    );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
