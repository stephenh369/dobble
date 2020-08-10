use dobble;

db.dropDatabase();

db.scores.insertOne({ name: "Helena", score: 0 });

db.cards.insertMany([
  {  // CARD 1
    symbols: [
      "apple",  // matches card 2
      "heart",  // matches card 3
      "cat",  // matches card 4
      "fire",  // matches card 5
      "cactus",  // matches card 6
      "key"  // matches card 7
    ]
  },
  {  // CARD 2
    symbols: [
      "apple",  // matches card 1
      "teardrop",  // matches card 3
      "anchor",  // matches card 4
      "eye",  // matches card 5
      "scissors",  // matches card 6
      "moon"  // matches card 7
    ]
  },
  {  // CARD 3
    symbols: [
      "heart",  // matches card 1
      "teardrop",  // matches card 2
      "sun",  // matches card 4
      "cheese",  // matches card 5
      "dolphin",  // matches card 6
      "clover"  // matches card 7
    ]
  },
  {  // CARD 4
    symbols: [
      "cat",  // matches card 1
      "anchor",  // matches card 2
      "sun",  // matches card 3
      "glasses",  // matches card 5
      "ice",  // matches card 6
      "bomb"  // matches card 7
    ]
  },
  {  // CARD 5
    symbols: [
      "fire",  // matches card 1
      "eye",  // matches card 2
      "cheese",  // matches card 3
      "glasses",  // matches card 4
      "car",  // matches card 6
      "leaf"  // matches card 7
    ]
  },
  {  // CARD 6
    symbols: [
      "cactus",  // matches card 1
      "scissors",  // matches card 2
      "dolphin",  // matches card 3
      "ice",  // matches card 4
      "car",  // matches card 5
      "dinosaur"  // matches card 7
    ]
  },
  { // CARD 7
    symbols: [
      "key",  // matches card 1
      "moon",  // matches card 2
      "clover",  // matches card 3
      "bomb",  // matches card 4
      "leaf",  // matches card 5
      "dinosaur",  // matches card 6
    ]
  },
]);
