const Player = require('./player');
const Game = require('./game');

class AIPlayer extends Player {
  constructor(name, game) {
    super(name, game);
  }
  chooseMove() {
    console.log('chooseMove called handvalue:', this.handValue[2]);
    if (this.handValue()[2] >= 17) {
      this.canPlay = false;
      return this.stay(this);
    } else {
      return 'COMPTURN';
    }
  }
}

module.exports = AIPlayer;
