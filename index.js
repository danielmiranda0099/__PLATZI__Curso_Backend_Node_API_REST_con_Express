const express = require('express');
const routerApi = require('./routes');

const PORT = 3000;

const app = express();

app.use(express.json());

//rutes setup
routerApi(app);

app.listen(PORT, () => {
  console.log('server ----> [OK]')
});
