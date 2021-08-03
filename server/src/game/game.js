const { Deck } = require('./deck');
const Player = require('./player');
const AIPlayer = require('./aiplayer');
const Round = require('./round');

class Game {
  constructor(id, player1 = 'singleplayer', player2 = 'computer', coinbalance) {
    this.id = id;
    this.deck = new Deck();
    this.deck.shuffle();
    this.roundCount = 0;
    this.rounds = [new Round(this.roundCount)];
    this.pot = 0;
    this.useAI = false;
    this.turn = true;
    this.gamestate = '';
    this.player1 = new Player(player1, this, coinbalance);
    if (player2 === 'computer') {
      this.useAI = true;
      this.player2 = new AIPlayer(player2, this);
    } else this.player2 = new Player(player2);
  }
  dealCards() {
    console.log('DEAL');
    this.hit(this.player1);
    this.hit(this.player1);
    if (this.gamestate !== 'WIN') {
      this.hit(this.player2);
      this.hit(this.player2);
    }
    console.log('===============');
  }
  hit(player) {
    console.log('HIT');
    player.addCard(this.deck.draw());
    return this.evaluateHand(player);
  }
  evaluateHand(player) {
    console.log('evaluateHand called', player.name);
    console.log(player.handValue()[2]);
    if (player.handValue()[2] > 21) return this.bust(player);
    else if (player.handValue()[2] === 21) return this.win(player);
    else if (player.handValue()[2] === 21) return this.win(player);
    this.gamestate = 'INPLAY';
    return 'INPLAY';
  }

  win(player) {
    console.log('win called');
    console.log(`${player.name} wins!`);
    console.log('pot amount won: ', this.rounds[this.roundCount].pot);
    if (player.name === 'computer') {
      console.log('computer won');
      this.gamestate = `LOSE`;
      return 'LOSE';
    }
    player.coins += this.rounds[this.roundCount].pot;
    this.gamestate = `WIN`;
    return 'WIN';
  }

  tie() {
    console.log(`Its a tie!`);
    this.gamestate = 'TIE';
    return 'TIE';
  }
  bust(player) {
    console.log('bust called');
    console.log('BUST!! Player:', player.name);

    if (player.name === 'computer') {
      this.gamestate = 'WIN';
      return 'WIN';
    }
    this.gamestate = 'LOSE';
    return 'LOSE';
  }
  placeBet(player, amount) {
    this.pot +=amount*2;
    this.rounds[this.roundCount].pot += amount *2;
    this.rounds[this.roundCount].betCount++;
    if (this.useAI && this.rounds[this.roundCount].betCount % 2 == 1) {
      //this.player2.bet(amount);
    }
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
    if (this.player1.handValue()[2] > this.player2.handValue()[2] || this.player2.handValue()[2] > 21 )
      return this.win(this.player1);
    else if (this.player1.handValue()[2] === this.player2.handValue()[2])
      return this.tie();
    else {
      this.gamestate = 'LOSE';
      return 'LOSE';
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
