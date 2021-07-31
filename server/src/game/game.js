const {Card, Deck} = require("./deck");
const  Player  = require("./player");
const AIPlayer = require("./aiplayer")
const Round = require("./round");


class Game {
  constructor(id, player1 = "singleplayer", player2 = "computer") {
    this.id = id;
    this.deck = new Deck();
    this.deck.shuffle();
    this.roundCount = 0;
    this.rounds = [new Round(this.roundCount)];
    this.useAI = false;
    this.turn = true;
    this.player1 = new Player(player1, this);
    if (player2 === "computer"){
      this.useAI = true;
      this.player2 = new AIPlayer(player2, this);
    }else
      this.player2 = new Player(player2);
  }
  dealCards() {
    console.log("DEAL");
    this.hit(this.player1);
    this.hit(this.player1);
    this.hit(this.player2);
    this.hit(this.player2);
    console.log("===============");
  }
  hit(player) {
    console.log("HIT")
      player.addCard(this.deck.draw());
      this.evaluateHand(player);
    
  }
  evaluateHand(player) {
   // if(player.handValue()[1] != player.handValue()[0]){
      if(player.handValue()[2] > 21)
        this.bust(player);
      else if(player.handValue()[2] === 21)
        this.win(player); 
      else if(player.handValue()[2] === 21)
        this.win(player);
    //}
    // else {
    //   if(player.handValue()[0] > 21)
    //     this.bust(player);
    //   else if(player.handValue()[0] === 21)
    //     this.win(player);
    // }
  }
  win(player) {
    console.log(`${player.name} wins!`);
    this.nextRound();
  }
  tie() {
    console.log(`Its a tie!`);
    this.nextRound(true);
  }
  bust(player) {
    console.log("BUST!! Player:", player.name);
    if(player.name == this.player1.name)
      this.win(this.player2);
    else
      this.win(this.player1);
  }
  placeBet(player, amount) {
    if(this.rounds[this.roundCount].betCount === 2){
      this.dealCards();
    }
    else {
      this.rounds[this.roundCount].pot += amount;
      this.rounds[this.roundCount].betCount++;
      if(this.useAI){
        this.placeBet(this.player2, amount);
      }
    }
  }
  stay(player){
    player.canPlay = false;
    if(!this.player1.canPlay && !this.player2.canPlay)
      this.compareHands();
    else if(this.useAI){
      this.player2.chooseMove();
    }
  }
  compareHands(){
    console.log(`Player 1 hand:${this.player1.handValue()[2]} /// Player 2 hand:${this.player2.handValue()[2]}`)
    if(this.player1.handValue()[2] > this.player2.handValue()[2])
      this.win(this.player1);
    else if(this.player1.handValue()[2] === this.player2.handValue()[2])
      this.tie()
    else
      this.win(this.player2);
  }
  nextRound(tie = false){
    this.roundCount++;
    this.player1.resetHand(); this.player2.resetHand();
    if(tie){
      let previousPot = this.rounds[this.roundCount].pot;
      this.rounds.push(new Round(this.roundCount), previousPot, 2);
      this.placeBet(this.player1, this.rounds[this.roundCount].pot);
    }
    else{
      this.rounds.push(new Round(this.roundCount));
    }
  }
}
module.exports = Game;