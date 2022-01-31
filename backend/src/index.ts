import express from 'express';
import {connectDB} from './Data/DB/connect.db';
import {router} from './Routers';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const cors = require('cors');
dotenv.config({path: '../.env'});


const app = express();
app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static('public'));

app.use(router);

const port = process.env.PORT || 3000;

app.get('/greetings', (req, res) => {
  res.status(200).send({
    body: 'Hello from Matchsic!!',
  });
});

connectDB().then(() => {
  console.log(`Database connected`);
  app.listen(port, () => {
    console.log(`Matchsic backend is listening on port ${port}`);
  });
}).catch((error: any) => {
  const errorMessage = error.message || 'unknown';
  console.log(`Error while running App: ${errorMessage}`);
});
