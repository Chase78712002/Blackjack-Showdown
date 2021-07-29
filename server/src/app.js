const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const morgan = require('morgan')

const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// api and user routers
const usersRouter = require("./users/users.router");
const apiRouter = require("./users/users.router");


const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// //Routes
const usersRoutes = require('./users/users.router');
const apiRoutes = require('./api/apiRoutes');

app.use("/users", usersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;