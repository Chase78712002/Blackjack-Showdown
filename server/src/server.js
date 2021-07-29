const PORT = process.env.PORT || 8080;

const app = require('./app')
const knex = require('./db/connection');

// // knex database

knex.migrate
  .latest()
  .then((migrations) => {
    console.log('migrations', migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });


const listener = () => {
  console.log(`Listening on Port ${PORT}`);
}

