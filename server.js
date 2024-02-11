const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Sprint9',
  password: '1999',
  port: 5432,
});


/*pool.query('SELECT NOW()', (err, res) => {
  if(err) {
    console.error('Error al conectar con la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos:', res.rows[0]);
  }
  pool.end();
});*/

module.exports = pool;