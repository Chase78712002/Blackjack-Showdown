const {Card, Deck} = require("./deck");
const { getCoin } = require("./game.service");

class Player {
    constructor(username, game, coinBalance) {
      this.name = username;
      this.hand = [];
      //this.handvalue = [];
      this.canPlay = true;
      this.coins = coinBalance;
      this.game = game;
    }
    
    handValue() {
      let sum = 0;
      let altSum = 0;
      for (const card of this.hand) {
        if(card.altValue !=0){
          sum += card.value;
          altSum += card.value
        }
        else {
          sum += card.value;
          altSum += card.value;
        }
      }
      let highest = sum;
      if(sum != altSum)
        highest = this.findHighestValidValue(sum, altSum);
      
      return [sum, altSum, highest];
    }
    findHighestValidValue(sum, altSum){
      console.log(`SUM: ${sum}  ALTSUM:${altSum} `);
      let tempSum = 0;
      if(sum === altSum)
        tempSum = sum;//return sum;
      if(sum > altSum && sum <= 21)
        tempSum = sum;//return sum;
      else
        tempSum = altSum;//return altSum;

      console.log(`highest valid sum: ${tempSum}`);
      return tempSum;
    }
    addCard(card){
      this.hand.push(card);
    }
    
    // countAce() {
    //   let count = 0;
    //   for (const card of this.hand) {
    //     if (card.name === 'Ace') {
    //       count += 1;
    //     }
    //   }
    //   return count;
    // }
  
    // adjustAceHandscore() {
    //   for (const ace in this.countAce) {
    //     if (this.handscore < 12) {
    //       self.handscore += 10;
    //     }
    //   }
    //   return this.handscore;
    // }
  
    resetHand() {
      this.hand = [];
      this.handvalue = [];
    }
    bet(amt) {
      if(amt <= this.coins)
      {
        this.coins = this.coins - amt;
        this.game.placeBet(this, amt);
      }
      else
        console.log("Cant Bet! You're Broke!");
    }
    hit(){
      return this.game.hit(this);
    }
    stay(){
      this.canPlay = false;
      return this.game.stay(this);
    }
  }

  module.exports = Player;