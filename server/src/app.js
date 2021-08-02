const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const express = require('express');
const morgan = require('morgan');
const router = express.Router();

const cors = require('cors');

const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');

// api and user routers
// const rootRouter = require('./users/root.route');
const usersRouter = require('./users/users.router');
const apiRouter = require('./api/apiRouter');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//app.use(rootRouter);
const root = path.join(__dirname, '../../', 'client');
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});
app.use('/users', usersRouter);
app.use('/api', apiRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
