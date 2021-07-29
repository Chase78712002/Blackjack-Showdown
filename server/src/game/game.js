class Game {
  constructor(id) {
    this.id = id;
  }
}

class Card {
  constructor(name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
    this.deckBuilder();
  }

  get remaining() {
    return this.deck.length;
  }

  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }

  deckBuilder() {
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        let numVal = 0;
        let name = `${values[j]} of ${suits[i]}}`;

        if (values[j] == 'Ace') {
          numVal = 11;
        } else if (values[j].length > 3) {
          numVal = 11;
        } else {
          numVal = values[j];
        }

        this.deck.push(new Card(name, suits[i], numVal));
      }
    }
  }
}