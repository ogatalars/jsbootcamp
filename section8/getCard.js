// write a getCard function that returns a random playing card object from a deck of cards.

function getCard() {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const idx = Math.floor(Math.random() * values.length);
  const value = values[idx];
  const suits = ["clubs", "diamonds", "hearts", "spades"];
  const suitIdx = Math.floor(Math.random() * suits.length);
  const suit = suits[suitIdx];
  return { value: value, suit: suit };
}
console.log(getCard());
// function getCard() {
//   let cards = {
//     A: "Ace",
//     2: "Two",
//     3: "Three",
//     4: "Four",
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//     9: "Nine",
//     10: "Ten",
//     J: "Jack",
//     Q: "Queen",
//     K: "King",
//   };
//   let random = Math.round(Math.random() * 13);
//   let card = cards[random];
//   if (card == 11) {
//     card = "Jack";
//   } else if (card == 12) {
//     card = "Queen";
//   } else if (card == 13) {
//     card = "King";
//   }
//   return card;
// }
// console.log(getCard());

// function pick(arr) {
//   const idx2 = Math.floor(Math.random() * arr.length);
//   return arr(idx2);
// }

//another way

function dealCards() {
  // return an array of 52 cards
  let cards = [];
  for (let i = 0; i < 52; i++) {
    cards.push(getCard());
  }
  return cards;
}
