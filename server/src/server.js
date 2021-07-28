const PORT = process.env.PORT || 8080;

const express = require('express');
const app = express();



const knex = require('./db/connection');

// //Routes
const usersRoutes = require('./users/users.router');
// // const apiRoutes = require('');

const listener = () => {
  console.log(`Listening on Port ${PORT}`);
}


// // Knex database

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

// resource routes
app.use('/users', usersRoutes);
// app.use('/api', apiRoutes(knex));


app.listen(PORT, listener)