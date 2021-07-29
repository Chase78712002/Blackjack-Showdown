const PORT = process.env.PORT || 8080;

const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'));

const knex = require('./db/connection');

// //Routes
const usersRoutes = require('./users/users.router');
const apiRoutes = require('./api/apiRoutes');

const listener = () => {
  console.log(`Listening on Port ${PORT}`);
}


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

// resource routes
app.use("/users", usersRoutes);
// app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send('Root')
});

app.listen(PORT, listener)