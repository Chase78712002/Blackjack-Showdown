class Game {
  constructor(id) {
    this.id = id;
  }

  //players
  //deck
  //turn
  //bet/pot
}

class Card {
  constructor(name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
  }

  get suit() {
    return this.suit;
  }

  get value() {
    return this.value;
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
    const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        let numVal = 0;
        let name = `${values[j]} of ${suits[i]}}`;

        if (values[j] == 'Ace') {
          numVal = 11;
        } else if (values[j].length > 3) {
          numVal = 10;
        } else {
          numVal = values[j];
        }

        this.cards.push(new Card(name, suits[i], numVal));
      }
    }
  }
}

class Player {
  constructor() {
    this.hand = [];
    this.handvalue = 0;
  }

  get hand() {
    return this.hand;
  }
  get handvalue() {
    let sum = 0;
    for (const card of this.hand) {
      sum += card.value;
    }
    return sum;
  }

  resetHand() {
    this.hand = [];
    this.handvalue = 0;
  }

  isBust() {
    if (this.handvalue > 21) {
      return true;
    }
  }
}
