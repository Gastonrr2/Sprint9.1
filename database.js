const Knex = require('knex');

const knex = Knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '1999',
    database: 'Sprint9',
    port: 5432
  }
});

module.exports = knex;