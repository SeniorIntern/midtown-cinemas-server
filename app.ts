import express from 'express';
import routes from './startup/routes';
import db from './startup/db';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
routes(app);
db();

const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port: ${port}...`));
