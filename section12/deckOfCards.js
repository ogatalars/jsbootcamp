// function makeDeck() {
//   const deck = [];
//   const suits = ["hearts", "spades", "clubs", "diamonds"];
//   const values = [
//     "ace",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "jack",
//     "queen",
//     "king",
//   ];
//   for (let value of values.split(".")) {
//     for (let suit of suits) {
//       deck.push({
//         value,
//         suit,
//       });
//     }
//   }
//   return deck;
// }

// function drawcard(deck) {
//   return deck.pop();
// }

// const myDeck = makeDeck();
// const card1 = drawcard(myDeck);

const myDeck = {
  deck: [],
  suits: ["hearts", "spades", "clubs", "diamonds"],
  values: "2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace",
  deck: [],
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({
          value,
          suit,
        });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
  },
};

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(arr);
  }
}
