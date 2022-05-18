import { Knex } from 'knex';
import credentials from './mysql-credentials.json';

const config: Knex.Config = {
  client: 'mysql',
  connection: {
    user: credentials.user,
    password: credentials.password,
    database: 'elo',
  },
  migrations: {
    directory: './migrations',
  }
};

/* knex needs to be called with the config file as an argument */
module.exports = require('knex')(config);