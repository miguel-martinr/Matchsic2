import express from 'express';
import {connectDB} from './Data/DB/connect.db';
import {router} from './Routers';


const app = express();

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
