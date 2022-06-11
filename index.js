const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handle');

const PORT = 3000;

const app = express();

app.use(express.json());

//rutes setup
routerApi(app);

//Middlewire
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('server ----> [OK]')
});
