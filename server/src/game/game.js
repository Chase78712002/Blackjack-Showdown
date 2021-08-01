const { Deck } = require('./deck');
const Player = require('./player');
const AIPlayer = require('./aiplayer');
const Round = require('./round');

class Game {
  constructor(id, player1 = 'singleplayer', player2 = 'computer') {
    this.id = id;
    this.deck = new Deck();
    this.deck.shuffle();
    this.roundCount = 0;
    this.rounds = [new Round(this.roundCount)];
    this.useAI = false;
    this.turn = true;
    this.player1 = new Player(player1, this);
    if (player2 === 'computer') {
      this.useAI = true;
      this.player2 = new AIPlayer(player2, this);
    } else this.player2 = new Player(player2);
  }
  dealCards() {
    console.log('DEAL');
    this.hit(this.player1);
    this.hit(this.player1);
    this.hit(this.player2);
    this.hit(this.player2);
    console.log('===============');
  }
  hit(player) {
    console.log('HIT');
    player.addCard(this.deck.draw());
    return this.evaluateHand(player);
  }
  evaluateHand(player) {
    console.log('evaluateHand called');
    // if(player.handValue()[1] != player.handValue()[0]){
    if (player.handValue()[2] > 21) return this.bust(player);
    else if (player.handValue()[2] === 21) return this.win(player);
    else if (player.handValue()[2] === 21) return this.win(player);
    return 'INPLAY';
  }
  win(player) {
    console.log(`${player.name} wins!`);
    //this.nextRound();
    return 'WIN';
  }
  tie() {
    console.log(`Its a tie!`);
    //this.nextRound(true);
  }
  bust(player) {
    console.log('bust called');
    console.log('BUST!! Player:', player.name);
    // if(player.name == this.player1.name)
    //   this.win(this.player2);
    // else
    //   this.win(this.player1);
    return 'LOSE';
  }
  placeBet(player, amount) {
    // if(this.rounds[this.roundCount].betCount === 2){
    //   this.dealCards();
    // }
    // else {
    this.rounds[this.roundCount].pot += amount;
    this.rounds[this.roundCount].betCount++;
    if (this.useAI && this.rounds[this.roundCount].betCount % 2 == 1) {
      this.player2.bet(amount);
    }
    // }
  }
  stay() {
    console.log(
      `stay called player1 ${this.player1.canPlay} player2 ${this.player2.canPlay}`
    );
    if (!this.player1.canPlay && !this.player2.canPlay)
      return this.compareHands();
    else if (this.useAI) {
      return this.player2.chooseMove();
    }
  }
  compareHands() {
    console.log(
      `Player 1 hand:${this.player1.handValue()[2]} /// Player 2 hand:${
        this.player2.handValue()[2]
      }`
    );
    if (this.player1.handValue()[2] > this.player2.handValue()[2])
      return this.win(this.player1);
    else if (this.player1.handValue()[2] === this.player2.handValue()[2])
      return this.tie();
    else {
      return 'LOSE';
      //return this.win(this.player2);
    }
  }
  nextRound(tie = false) {
    this.player1.resetHand();
    this.player2.resetHand();
    if (tie) {
      let previousPot = this.rounds[this.roundCount].pot;
      this.roundCount++;
      this.rounds.push(new Round(this.roundCount), previousPot, 2);
      this.placeBet(this.player1, this.rounds[this.roundCount].pot);
    } else {
      this.roundCount++;
      this.rounds.push(new Round(this.roundCount));
    }
  }
}
module.exports = Game;
