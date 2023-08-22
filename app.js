import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { ErrorHandler, NotFoundHandler } from './Middleware/index.js';
import routes from './Router/routes.js'; //Routen

dotenv.config();

const dirname = path.resolve();
const app = express();

const PORT = process.env.PORT || 2410;

//TODO DAS IMMER AUSKOMMENTIEREN WENN LOCALHOST
app.use(morgan('dev'));
// app.use(helmet()); //Brauchen wir nicht, da sonst die Mapbox nicht mehr geht
app.use(cors());
app.use(express.static(path.join(dirname, '/public')));
app.use(express.json());

app.use('/', routes); //Routen
app.use(ErrorHandler); //ErrorHandler
app.use(NotFoundHandler); //NotFoundHandler

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
