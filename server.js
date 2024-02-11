const { Pool } = require('pg');

const pool = new Pool({
  user: 'posgres',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: '1999',
  port: 5432,
});

module.exports = pool;