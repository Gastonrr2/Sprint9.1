const express = require('express');
const testsRoutes = require('./tests');

const app = express();

app.use('/tests', testsRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});