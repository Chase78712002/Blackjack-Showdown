const  Player  = require("./player");
const Game = require("./game");

class AIPlayer extends Player{
    constructor(name, game) {
        super(name, game);
    }
    chooseMove() {
        if(this.handValue()[2] >= 17){
            return this.game.stay(this)
        }
        else{
            return "COMPTURN"
        }
    }
}

module.exports = AIPlayer;