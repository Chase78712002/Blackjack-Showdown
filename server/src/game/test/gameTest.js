const Game = require("../game");

function newGame() {
    let game = new Game(1);
    game.player1.bet(10);
    console.log(`Player Hand: ${JSON.stringify(game.player1.hand)} Value: ${game.player1.handValue()[2]}`)
    while(game.player1.handValue()[2] < 17){
        game.hit(game.player1);
        console.log("Player Hand Value: ",game.player1.handValue()[2])
    }
    if(game.player1.handValue()[2] < 21)
        game.stay(game.player1);

    game.stay(game.player2);
}
//initial bet working
//both stay condition working

newGame();