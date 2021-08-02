const app = require('./app');
const socket = require('socket.io');

const PORT = process.env.PORT || 8080;

const knex = require('./db/connection');

const server = app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
//Game
const Game = require('./game/game');
const { getCoins } = require('./game/game.controller');
const { updateCoin } = require('./game/game.service');
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

  socket.on('newGame', (data) => {
    console.log('New Game Created, room#: ', data.roomNum);
    const room = data.roomNum;
    const username = data.username;
    getCoins(username).then((result) => {
      const coin = result[0].coins;
      activeGames[room] = new Game(
        (id = room),
        (player1 = username),
        (player2 = 'computer'),
        (coinbalance = coin)
      );
      console.log(
        'activegames-player1 coin: ',
        activeGames[room].player1.coins
      );

      socket.emit('loadUserCoins', activeGames[room].player1.coins);
    });
  });
  socket.on('bet', (bet, room) => {
    const player1 = activeGames[room].player1;
    console.log('Bet Placed: ', bet);
    player1.bet(bet);
    console.log('player1.name: ', player1.name);
    console.log('player1 coin remain: ', player1.coins);
    updateCoin(player1.name, player1.coins).then((result) => {
      socket.emit('betPlaced');
      socket.emit('loadUserCoins', result);
    });
  });
  socket.on('deal', (room) => {
    activeGames[room].dealCards();
    console.log('state on deal is', activeGames[room].gamestate);
    socket.emit(
      'deal',
      activeGames[room].player1.hand,
      activeGames[room].player2.hand,
      activeGames[room].gamestate
    );
  });
  socket.on('hit', (room) => {
    console.log('Hit in room', room); //TODO add in check for player when multiplayer
    const handState = activeGames[room].player1.hit();
    console.log('HANDSTATE: ', handState);
    socket.emit('hit', activeGames[room].player1.hand, handState);
  });
  socket.on('stand', (room) => {
    gameState = activeGames[room].player1.stay();
    console.log('Stand Gamestate: ', gameState);
    while (gameState === 'COMPTURN') {
      console.log('gamestate of computurn', gameState);
      activeGames[room].player2.hit();
      socket.emit('dealerHit', activeGames[room].player2.hand);
      gameState = activeGames[room].player2.chooseMove();
    }
    socket.emit('stand', gameState);
  });
  socket.on('nextRound', (room) => {
    activeGames[room].nextRound();
  });

  socket.on('disconnect', (socket) => {
    console.log('socket disconnected');
    //redirectnot on game page
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
