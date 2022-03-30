import express = require( 'express');
import { Request, Response } from 'express';
import cors = require('cors');
import fileUpload = require('express-fileupload');
import login from './authentificator/login';
const app = express();
const port = process.env.PORT || 80; // default port to listen
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(fileUpload());
app.use('/login', login);
// define a route handler for the default home page
app.get( "/", ( _req : Request, res :Response) => {
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
