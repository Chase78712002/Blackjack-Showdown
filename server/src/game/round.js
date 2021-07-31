class Round {
    constructor(roundCount, pot = 0, betCount = 0){
      this.roundCount = roundCount;
      this.pot = pot;
      this.betCount = betCount;
      this.initialDeal = false;
      this.winner =""
    }
    // get pot() {
    //   return this.pot;
    // }
    // get betCount(){
    //   return this.betCount;
    // }
    // get initialDeal(){
    //   return this.initialDeal
    // }
    // get winner(){
    //   return this.winner
    // }
    // set pot(newPot) {
    //     this.roundPot = newPot;
    // }
    // set betCount(betCount){
    //     this.roundBetCount = betCount
    // }
    // set initialDeal(initialDeal){
    //  this.roundInitialDeal = initialDeal
    // }
    // set winner(winner){
    //     this.winner = winner;
    // }
  }

module.exports = Round;