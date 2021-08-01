const app = require('./app');
const socket = require('socket.io');

const PORT = process.env.PORT || 8080;

const knex = require('./db/connection');

const server = app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
//Game
const Game = require("./game/game");
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
  const activeGames = [];
  socket.on('newGame', (room) => {
    console.log("New Game Created");
    activeGames[room] = new Game(room);
  })
  socket.on('bet', (bet, room) =>{
    console.log("Bet Placed");
    activeGames[room].player1.bet(bet);
    socket.emit('betPlaced');
  })
  socket.on('deal', (room) => {
    activeGames[room].dealCards();
    socket.emit('deal', activeGames[room].player1.hand, activeGames[room].player2.hand);
  })
  socket.on('hit', (room) => { 
    console.log("Hit in room", room);//TODO add in check for player when multiplayer
    const handState = activeGames[room].player1.hit()
    console.log("HANDSTATE: ", handState)
    socket.emit('hit', activeGames[room].player1.hand, handState);
  });
  socket.on('stand', (room) => {
    const gameState = activeGames[room].player1.stay();
    console.log("Stand Gamestate: ", gameState);
    while(gameState === "COMPTURN"){
      activeGames[room].player2.hit();
      socket.emit('dealerHit', activeGames[room].player2.hand);
      gameState= activeGames[room].player2.chooseMove();
    }
    socket.emit('stand', gameState);
  })
  socket.on('nextRound', (room) => {
    activeGames[room].nextRound();
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
