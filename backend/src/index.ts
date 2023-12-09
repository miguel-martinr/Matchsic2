import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));
const ENV_FILE_PATH = path.join(__dirname, '../.env');

dotenv.config({path: ENV_FILE_PATH});


import express from 'express';
import {connectDB} from './Data/DB/connect.db';
import {router} from './Routers';
import cookieParser from 'cookie-parser';


import cors from 'cors';


const app = express();
app.use(express.json());

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
];


app.use(cors({credentials: true, origin: allowedOrigins}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.use(router);

// Default
app.all('*', (req, res) => {
  return res.redirect('/');
});


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
