import express from 'express';
import {connectDB} from './Data/DB/connect.db';
import {router} from './Routers';
import cookieParser from 'cookie-parser';
import path from 'path';
import { config } from './config';

import cors from 'cors';


const app = express();
app.use(express.json());

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3001',
  'http://192.168.1.140:3002'
];


app.use(cors({credentials: true, origin: allowedOrigins}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(path.join(config.dirname, '../public')));

app.use(router);

// Default
// app.all('*', (req, res) => {
//   return res.redirect('/');
// });


const port = config.env.PORT || 3000;

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
