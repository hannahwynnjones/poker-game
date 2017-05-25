console.log('JS loaded');

$(()=>{
  //looking at 2 player game with 5 cards first then will look at changing these varibles and shorten code using forEach loops
  var player1Deck = [];
  var player2Deck = [];
  let totalOneSpan = 0;
  let totalTwoSpan = 0;
  let totalOne = 0;
  let totalTwo = 0;
  //using points for now, will look at moving over to jack, ace, king and queen later - and add images
  const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  // const cardies = [{points: 1, name: 'Ace'}, {points: 2, name: 'Two'}, {points: 3, name: 'Three'}, {points: 4, name: 'Four'}, {points: 5, name: 'Five'}, {points: 6, name: 'Six'}, {points: 7, name: 'Seven'}, {points: 8, name: 'Eight'}, {points: 9, name: 'Nine'}, {points: 10, name: 'Ten'}, {points: 11, name: 'Jack'}, {points: 12, name: 'Queen'}, {points: 13, name: 'King'}];
  const suits = ['clubs','diamonds','spades','hearts'];
  let cards = [];
  let popped;

  const $shuffle = $('.shuffle');
  const $draw = $('.draw');
  const $card = $('.card');
  const $name = $('.name');
  const $suit = $('.suit');
  const $points =$('.points');
  const $totalOneSpan = $('.totalOneSpan');
  const $totalTwoSpan = $('.totalTwoSpan');
  const $winner = $('.winner');

//player 1 card details
  const $namep1c1 = $('.namep1c1');
  const $suitp1c1 = $('.suitp1c1');
  const $pointsp1c1 = $('.pointsp1c1');
  const $suitp1c2 = $('.suitp1c2');
  const $pointsp1c2 = $('.pointsp1c2');
  const $suitp1c3 = $('.suitp1c3');
  const $pointsp1c3 = $('.pointsp1c3');
  const $suitp1c4 = $('.suitp1c4');
  const $pointsp1c4 = $('.pointsp1c4');
  const $suitp1c5 = $('.suitp1c5');
  const $pointsp1c5 = $('.pointsp1c5');

//player 2 card details
  const $namep2c1 = $('.namep2c1');
  const $suitp2c1 = $('.suitp2c1');
  const $pointsp2c1 = $('.pointsp2c1');
  const $suitp2c2 = $('.suitp2c2');
  const $pointsp2c2 = $('.pointsp2c2');
  const $suitp2c3 = $('.suitp2c3');
  const $pointsp2c3 = $('.pointsp2c3');
  const $suitp2c4 = $('.suitp2c4');
  const $pointsp2c4 = $('.pointsp2c4');
  const $suitp2c5 = $('.suitp2c5');
  const $pointsp2c5 = $('.pointsp2c5');


  $draw.on('click', drawCards);

// shuffle all 52 cards
  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  function fillDeck() {
    suits.forEach((suit) => {
      names.forEach((name) => {
        cards.push({
          suit: suit,
          value: name
        });
      });
    });
    cards = shuffle(cards);
    console.log(cards);
  }

  fillDeck(); // Shuffle deck when page first loads

  function drawCards() {

    //slices top 5 off each deck
    player1Deck = cards.slice(0, 5);
    console.log(player1Deck, 'player1Deck');
    player2Deck = cards.slice(5, 10);
    console.log(player2Deck, 'player2Deck');

    console.log(player1Deck[0].suit, 'player1Deck[0]');

    //getting total points for player One
    totalOne = player1Deck.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    console.log(totalOne);

    //add information to player one's cards
    $totalOneSpan.text(totalOne);
    $pointsp1c1.text(player1Deck[0].value);
    $suitp1c1.text(player1Deck[0].suit);
    $pointsp1c2.text(player1Deck[1].value);
    $suitp1c2.text(player1Deck[1].suit);
    $pointsp1c3.text(player1Deck[2].value);
    $suitp1c3.text(player1Deck[2].suit);
    $pointsp1c4.text(player1Deck[3].value);
    $suitp1c4.text(player1Deck[3].suit);
    $pointsp1c5.text(player1Deck[4].value);
    $suitp1c5.text(player1Deck[4].suit);

    //get total points for player Two
    totalTwo = player2Deck.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    console.log(totalTwo);

    //add information to player two's cards
    $totalTwoSpan.text(totalTwo);
    $pointsp2c1.text(player2Deck[0].value);
    $suitp2c1.text(player2Deck[0].suit);
    $pointsp2c2.text(player2Deck[1].value);
    $suitp2c2.text(player2Deck[1].suit);
    $pointsp2c3.text(player2Deck[2].value);
    $suitp2c3.text(player2Deck[2].suit);
    $pointsp2c4.text(player2Deck[3].value);
    $suitp2c4.text(player2Deck[3].suit);
    $pointsp2c5.text(player2Deck[4].value);
    $suitp2c5.text(player2Deck[4].suit);

    whoWins();
  }

  // //if totalOne > totalTwo, then playerOne = winner, else if totalTwo > totalOne, then playerTwo = winner, else draw.
  function whoWins() {
    if (totalOne > totalTwo) {
      $winner.text('Player One wins');
    }
    else if (totalTwo > totalOne) {
      $winner.text('Player Two wins');
    }
    else {
      $winner.text('No winner, it\'s a draw');
    }
  }
});