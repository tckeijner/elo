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

export default config;