import express from 'express';


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send({
    body: 'Hello from Matchsic!',
  });
});


app.listen(port, () => {
  console.log(`Matchsic backend is listening on port ${port}`);
});
