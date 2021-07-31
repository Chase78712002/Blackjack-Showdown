const app = require('./app')
const socket = require('socket.io');

const PORT = process.env.PORT || 8080;

const knex = require('./db/connection');


const server = app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
}) 

// Socket setup
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  // const id = socket.handshake.query.id
  // socket.join(id)
  console.log('made socket connection! socket_id: ', socket.id)
})









// // knex database
knex.migrate
  .latest()
  .then((migrations) => {
    console.log('migrations', migrations);
    server
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });
