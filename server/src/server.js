const app = require('./app');
const socket = require('socket.io');

const PORT = process.env.PORT || 8080;

const knex = require('./db/connection');

const server = app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

// Socket setup
const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});

io.on('connection', (socket) => {
  // const id = socket.handshake.query.id
  // socket.join(id)
  console.log('made socket connection! socket_id: ', socket.id);

  socket.on('hit', (data) => {
    console.log('this is the hit data from browser', data);
    const cardA = {
      suit: 'Spade',
      value: 'Ace'
    };

    io.sockets.emit('hit', cardA);
  });

  socket.on('stand', () => {
    console.log('this is the stand');
    const cardB = {
      suit: 'Clubs',
      value: 'King'
    };

    io.sockets.emit('stand', cardB);
  });

  socket.on('disconnect', (socket) => {
    console.log('socket disconnected', socket.id);
  });
});

// // knex database
knex.migrate
  .latest()
  .then((migrations) => {
    console.log('migrations', migrations);
    server;
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });
