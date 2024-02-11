const express = require('express');
const router = express.Router();
const pool = require('../database/connection');

router.get('/', async (req, res) => {
  const client = await pool.connect();
  const result = await client.query('SELECT * FROM tests');
  const results = { 'results': (result) ? result.rows : null};
  res.send(JSON.stringify(results));
  client.release();
});

router.post('/', async (req, res) => {
  const client = await pool.connect();
  // Aquí debes insertar los datos en la base de datos
  // const result = await client.query('INSERT INTO tests VALUES ...');
  client.release();
});

module.exports = router;