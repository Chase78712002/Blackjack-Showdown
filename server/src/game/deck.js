class Card {
  constructor(name, suit, value, altValue = 0) {
    this.name = name;
    this.suit = suit;
    this.value = value;
    this.altValue = altValue;
  }
}
class Deck {
  constructor() {
    this.cards = [];
    this.cardsBuilder();
  }
  get remaining() {
    return this.cards.length;
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  cardsBuilder() {
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    const suits = ['diamonds', 'clubs', 'hearts', 'spades'];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        let numVal = 0;
        let name = `${values[j]} of ${suits[i]}`;
        let imgURL = `./img/PlayingCards/card-${suits[i]}-${values[j]}.png`;

        if (values[j] == 'Ace') {
          numVal = 11;
          this.cards.push(new Card(name, suits[i], numVal, 1));
        } else if (values[j].length > 3) {
          numVal = 10;
          this.cards.push(new Card(name, suits[i], numVal));
        } else {
          numVal = values[j];
          this.cards.push(new Card(name, suits[i], numVal));
        }
      }
    }
  }
  draw() {
    let drawnCard = this.cards.shift();
    return drawnCard;
  }
}

module.exports = {
  Card,
  Deck
};
