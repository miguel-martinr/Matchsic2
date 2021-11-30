import express from 'express';


const app = express();

app.use(express.static('public'));


const port = process.env.PORT || 3000;

app.get('/greetings', (req, res) => {
  res.status(200).send({
    body: 'Hello from Matchsic!!',
  });
});


app.listen(port, () => {
  console.log(`Matchsic backend is listening on port ${port}`);
});
