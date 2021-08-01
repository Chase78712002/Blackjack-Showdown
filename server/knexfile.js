// Update with your config settings.
require('dotenv').config();
const path = require('path');

const {
  DATABASE_URL = 'postgresql://postgres@localhost/postgres',
  DATABASE_URL_DEVELOPMENT = 'postgresql://postgres@localhost/postgres',
  DATABASE_URL_TEST = 'postgresql://postgres@localhost/postgres',
  DEBUG
} = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: DATABASE_URL_DEVELOPMENT,
    pool: { min: 0, max: 7 },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    },
    debug: !!DEBUG
  },
  test: {
    client: 'postgresql',
    connection: DATABASE_URL_TEST,
    pool: { min: 0, max: 7 },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    },
    debug: !!DEBUG
  },
  production: {
    client: 'postgresql',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    },
    debug: !!DEBUG
  }
};
