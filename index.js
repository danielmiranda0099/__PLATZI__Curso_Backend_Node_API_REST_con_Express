const express = require('express');

const PORT = 3000;

const app = express();


app.get('/', (req, res) => {
  res.send('hello desde el server');
});

app.listen(PORT, () => {
  console.log('server ----> [OK]')
});
