console.log('JS loaded');

$(()=>{
  //looking at 2 player game with 5 cards first then will look at changing these varibles and shorten code using forEach loops

  var player0Deck = [];
  var player1Deck = [];
  var player2Deck = [];
  var player3Deck = [];
  let total0Span = 0;
  let total1Span = 0;
  let total2Span = 0;
  let total3Span = 0;
  let total0 = 0;
  let total1 = 0;
  let total2 = 0;
  let total3 = 0;

  let i = 0;
  let j = 0;
  var p = $('#noOfPlayers').val();
  var c = $('#noOfCards').val();

  //using points for now, will look at moving over to jack, ace, king and queen later - and add images
  const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  // const cardies = [{points: 1, name: 'Ace'}, {points: 2, name: 'Two'}, {points: 3, name: 'Three'}, {points: 4, name: 'Four'}, {points: 5, name: 'Five'}, {points: 6, name: 'Six'}, {points: 7, name: 'Seven'}, {points: 8, name: 'Eight'}, {points: 9, name: 'Nine'}, {points: 10, name: 'Ten'}, {points: 11, name: 'Jack'}, {points: 12, name: 'Queen'}, {points: 13, name: 'King'}];
  const suits = ['clubs','diamonds','spades','hearts'];
  let cards = [];
  let popped;

  const $submit = $('.submit');

  const $shuffle = $('.shuffle');
  const $draw = $('.draw');
  const $card = $('.card');
  const $name = $('.name');
  const $suit = $('.suit');
  const $points =$('.points');
  const $total0Span = $('.total0Span');
  const $total1Span = $('.total1Span');
  const $total2Span = $('.total2Span');
  const $total3Span = $('.total3Span');
  const $total4Span = $('.total4Span');
  const $total5Span = $('.total5Span');
  const $winner = $('.winner');
  const $start = $('.start');

//player 1 card details
  // const $namep1c1 = $('.namep1c1');
  const $suitp0c0 = $('.suitp0c0');
  const $pointsp0c0 = $('.pointsp0c0');
  const $suitp0c1 = $('.suitp0c1');
  const $pointsp0c1 = $('.pointsp0c1');
  const $suitp0c2 = $('.suitp0c2');
  const $pointsp0c2 = $('.pointsp0c2');
  const $suitp0c3 = $('.suitp0c3');
  const $pointsp0c3 = $('.pointsp0c3');
  const $suitp0c4 = $('.suitp0c4');
  const $pointsp0c4 = $('.pointsp0c4');
  const $suitp0c5 = $('.suitp0c5');
  const $pointsp0c5 = $('.pointsp0c5');

//player 2 card details
  // const $namep1c1 = $('.namep1c1');
  const $suitp1c0 = $('.suitp1c0');
  const $pointsp1c0 = $('.pointsp1c0');
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

//player 3 card details
  // const $namep2c1 = $('.namep2c1');
  const $suitp2c0 = $('.suitp2c0');
  const $pointsp2c0 = $('.pointsp2c0');
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

  //player 4 card details
    const $namep3c1 = $('.namep3c1');
    const $suitp3c0 = $('.suitp3c0');
    const $pointsp3c0 = $('.pointsp3c0');
    const $suitp3c1 = $('.suitp3c1');
    const $pointsp3c1 = $('.pointsp3c1');
    const $suitp3c2 = $('.suitp3c2');
    const $pointsp3c2 = $('.pointsp3c2');
    const $suitp3c3 = $('.suitp3c3');
    const $pointsp3c3 = $('.pointsp3c3');
    const $suitp3c4 = $('.suitp3c4');
    const $pointsp3c4 = $('.pointsp3c4');
    const $suitp3c5 = $('.suitp3c5');
    const $pointsp3c5 = $('.pointsp3c5');

  $submit.on('click', drawCards);
  $start.on('click', placeCards);

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

  function drawCards(e) {
    e.preventDefault();
    // clear the board
    $('.board').html('');

    var p = $('#noOfPlayers').val();
    var c = $('#noOfCards').val();
    //slices top 5 off each deck
    createDeck();
    addTotal();
  //  placeCards();

    // create 'deck' for number of players
    function createDeck() {
      console.log('firing createDeck');
      for(i = 0; i < p; i++) {
        $('.board').append('<div class="playerCards player'+i+'Cards"><h2>This is player '+i+'\'s board</h2></div>');
      //then create cards for each deck - This would work better as a loop, but i couldn't get the loops I tried to give me different classes er board.
        if (i===0) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player0Cards').append('<div class="card card'+j+'"><p>suit: class="suitp'+i+'c'+j+'"<span class="suitp'+i+'c'+j+'"></span></p><p>points: class="pointsp'+i+'c'+j+'" <span class="pointsp'+i+'c'+j+'"></span></p></div>');
          }
        }
        else if (i===1) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player1Cards').append('<div class="card card'+j+'"><p>suit: class="suitp'+i+'c'+j+'"<span class="suitp'+i+'c'+j+'"></span></p><p>points: class="pointsp'+i+'c'+j+'" <span class="pointsp'+i+'c'+j+'"></span></p></div>');
          }
        }
        else if (i===2) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player2Cards').append('<div class="card card'+j+'"><p>suit: class="suitp'+i+'c'+j+'"<span class="suitp'+i+'c'+j+'"></span></p><p>points: class="pointsp'+i+'c'+j+'" <span class="pointsp'+i+'c'+j+'"></span></p></div>');
          }
        }
        else if (i===3) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player3Cards').append('<div class="card card'+j+'"><p>suit: class="suitp'+i+'c'+j+'"<span class="suitp'+i+'c'+j+'"></span></p><p>points: class="pointsp'+i+'c'+j+'" <span class="pointsp'+i+'c'+j+'"></span></p></div>');
          }
        }
        else if (i===4) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player4Cards').append('<div class="card card'+j+'"><p>suit: class="suitp'+i+'c'+j+'"<span class="suitp'+i+'c'+j+'"></span></p><p>points: class="pointsp'+i+'c'+j+'" <span class="pointsp'+i+'c'+j+'"></span></p></div>');
          }
        }
      }
    }


    function addTotal() {
      console.log('firing addTotal');
      for(i = 0; i < p; i++) {
        $('.totalBoard').append('<div class=""><h1>Player '+i+' cards: <span class ="total'+i+'Span">0</span></h1></div>');
      }
    }

    //deal cards
    // function dealCards() {
    //   for(i = 0; i < c; i++) {
    //     deck = cards.slice(0, c);
    //
    //   }
    // }


  }

  function placeCards() {
    fillDeck();// Shuffle deck
    player0Deck = cards.slice(0, c);
    console.log(player0Deck, 'player0Deck');
    player1Deck = cards.slice(c, 2*c);
    console.log(player1Deck, 'player1Deck');
    player2Deck = cards.slice(2*c, 3*c);
    console.log(player2Deck, 'player2Deck');

    //getting total points for player One
    total0 = player0Deck.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    console.log(total0, 'total0');

    //add information to player one's cards
    $total0Span.text(total0);
    // $pointsp0c0.text(player0Deck[0].value);
    $suitp0c0.text(player0Deck[0].suit);
    $pointsp0c1.text(player0Deck[0].value);
    $suitp0c1.text(player0Deck[0].suit);
    $pointsp0c2.text(player0Deck[1].value);
    $suitp0c2.text(player0Deck[1].suit);
    $pointsp0c3.text(player0Deck[2].value);
    $suitp0c3.text(player0Deck[2].suit);
    // $pointsp0c4.text(player0Deck[3].value);
    // $suitp0c4.text(player0Deck[3].suit);
    // $pointsp0c5.text(player0Deck[4].value);
    // $suitp0c5.text(player0Deck[4].suit);

    //getting total points for player One
    total1 = player1Deck.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    console.log(total1, 'total1');

    //add information to player two's cards
    $total1Span.text(total1);
    $pointsp1c0.text(player1Deck[0].value);
    $suitp1c0.text(player1Deck[0].suit);
    $pointsp1c1.text(player1Deck[0].value);
    $suitp1c1.text(player1Deck[0].suit);
    $pointsp1c2.text(player1Deck[1].value);
    $suitp1c2.text(player1Deck[1].suit);
    $pointsp1c3.text(player1Deck[2].value);
    $suitp1c3.text(player1Deck[2].suit);
    // $pointsp1c4.text(player1Deck[3].value);
    // $suitp1c4.text(player1Deck[3].suit);
    // $pointsp1c5.text(player1Deck[4].value);
    // $suitp1c5.text(player1Deck[4].suit);

    //get total points for player Two
    total2 = player2Deck.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    console.log(total2, 'total2');

    //add information to player two's cards
    $total2Span.text(total2);
    $pointsp2c0.text(player2Deck[0].value);
    $suitp2c0.text(player2Deck[0].suit);
    $pointsp2c1.text(player2Deck[0].value);
    $suitp2c1.text(player2Deck[0].suit);
    $pointsp2c2.text(player2Deck[1].value);
    $suitp2c2.text(player2Deck[1].suit);
    $pointsp2c3.text(player2Deck[2].value);
    $suitp2c3.text(player2Deck[2].suit);
    // $pointsp2c4.text(player2Deck[3].value);
    // $suitp2c4.text(player2Deck[3].suit);
    // $pointsp2c5.text(player2Deck[4].value);
    // $suitp2c5.text(player2Deck[4].suit);

    whoWins();
  }

  // //if totalOne > totalTwo, then playerOne = winner, else if totalTwo > totalOne, then playerTwo = winner, else draw.
  function whoWins() {
    if (total0 > total1) {
      $winner.text('Player One wins');
    }
    else if (total1 > total0) {
      $winner.text('Player Two wins');
    }
    else {
      $winner.text('No winner, it\'s a draw');
    }
  }


});
