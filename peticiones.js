const knex = require('./database');

knex('taeas').select('*')
  .then(rows => console.log(rows))
  .catch(err => console.error(err));