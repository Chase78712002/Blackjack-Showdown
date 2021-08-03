class Player {
  constructor(username, game, coinBalance) {
    this.name = username;
    this.hand = [];
    this.canPlay = true;
    this.coins = coinBalance;
    this.game = game;
    this.handscore;
  }

  handValue() {
    let sum = 0;
    let altSum = 0;
    for (const card of this.hand) {
      sum += card.value;
      altSum += card.altValue;
    }
    let highest = sum;

    if (this.countAce() > 0) {
      highest = this.adjustAceHandscore(sum);
    }
    return [sum, altSum, highest];
  }

  addCard(card) {
    this.hand.push(card);
  }

  countAce() {
    let count = 0;
    for (const card of this.hand) {
      if (card.name === 'Ace') {
        count += 1;
      }
    }
    return count;
  }

  adjustAceHandscore(sum) {
    for (let i = 0; i < this.countAce(); i++) {
      if (sum < 12) {
        sum += 10;
      }
    }
    return sum;
  }

  resetHand() {
    this.hand = [];
    this.handvalue = [];
  }
  bet(amt) {
    if (amt <= this.coins) {
      this.coins = this.coins - amt;
      this.game.placeBet(this, amt);
    } else console.log("Cant Bet! You're Broke!");
  }
  hit() {
    return this.game.hit(this);
  }
  stay() {
    this.canPlay = false;
    return this.game.stay(this);
  }
}

module.exports = Player;
