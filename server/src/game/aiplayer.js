const  Player  = require("./player");
const Game = require("./game");

class AIPlayer extends Player{
    constructor(name, game) {
        super(name, game);
    }
    chooseMove() {
        if(this.canPlay){
                if(this.handValue()[2] >= 17)
                    this.game.stay(this)
                else{
                        this.game.hit(this);
                        this.chooseMove();
                }
        }
    }
}

module.exports = AIPlayer;