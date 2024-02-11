const express = require('express');
const Knex = require('knex');

// Conexion
const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: './data.db'
  },
  useNullAsDefault: true
});

const app = express();
