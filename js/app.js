console.log('JS loaded');

$(()=>{
  //I first looked at 2 player game with 5 cards, then dynamically added cards and their classes depending on the input.  Then I had issues with the 'for' loops so decided to write out each function for all cases between 1-5 cards and 1-5 players so it's clear what the for loop is doing before I try implementing it.  I will come back to this and add the working loops as this feels likes a horrible work around at the moment.

  //There are currentl 2 bugs.  The first is that I've used 11, 12 and 13 instead of jack, queen and king.  The other is that 5 decks of cards are sliced of the deck each time, so in the case of a 2 player game - player 3, 4 or 5 can be declared the winner.  I originally had a loop going for this but it was pushing out the same data for all decks.

  //I'd also like to go through the code to stop remove any player 0s and replace with player 1s

  var playerDeck0 = [];
  var playerDeck1 = [];
  var playerDeck2 = [];
  var playerDeck3 = [];
  var playerDeck4 = [];
  var playerDeck5 = [];

  let totalSpan0 = 0;
  let totalSpan1 = 0;
  let totalSpan2 = 0;
  let totalSpan3 = 0;
  let totalSpan4 = 0;
  let totalSpan5 = 0;
  let total0 = 0;
  let total1 = 0;
  let total2 = 0;
  let total3 = 0;
  let total4 = 0;
  let total5 = 0;

  let i = 0;
  let j = 0;
  var p = $('#noOfPlayers').val();
  var c = $('#noOfCards').val();

  //using points for now, will look at moving over to jack, ace, king and queen later - and add images
  const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  // const cardies = [{points: 1, name: 'Ace'}, {points: 2, name: 'Two'}, {points: 3, name: 'Three'}, {points: 4, name: 'Four'}, {points: 5, name: 'Five'}, {points: 6, name: 'Six'}, {points: 7, name: 'Seven'}, {points: 8, name: 'Eight'}, {points: 9, name: 'Nine'}, {points: 10, name: 'Ten'}, {points: 11, name: 'Jack'}, {points: 12, name: 'Queen'}, {points: 13, name: 'King'}];
  const suits = ['clubs','diamonds','spades','hearts'];
  let cards = [];

  const $submit = $('.submit');
  const $pop = $('.pop');
  const $winner = $('.winner');

  $submit.on('click', drawBoard);
  $pop.on('click', createDivVariables);

  function drawBoard(e) {
    e.preventDefault();
    // clear the board
    $('.board').html('');

    var p = $('#noOfPlayers').val();
    var c = $('#noOfCards').val();
    createDeck();
    addTotal();

    //===========  create 'deck' for number of players depending on choice of c and p  =======
    function createDeck() {
      console.log('firing createDeck');
      for(i = 0; i < p; i++) {
        $('.board').append('<div class="playerCards player'+i+'Cards"><h2>This is player '+(i+1)+'\'s board</h2></div>');
      //then create cards for each deck - This would work better as a loop, but i couldn't get the loops I tried to give me different classes er board.
        if (i===0) {
          for(j = 0; j < c; j++) {
            $('.player0Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: <span></span></div><br><div class="pointsp'+i+'c'+j+'">points: <span></span></div></div>');
          }
        }
        else if (i===1) {
          for(j = 0; j < c; j++) {
            $('.player1Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: <span></span></div><br><div class="pointsp'+i+'c'+j+'">points: <span></span></div></div>');
          }
        }
        else if (i===2) {
          for(j = 0; j < c; j++) {
            $('.player2Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: <span></span></div><br><div class="pointsp'+i+'c'+j+'">points: <span></span></div></div>');
          }
        }
        else if (i===3) {
          for(j = 0; j < c; j++) {
            $('.player3Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: <span></span></div><br><div class="pointsp'+i+'c'+j+'">points: <span></span></div></div>');
          }
        }
        else if (i===4) {
          for(j = 0; j < c; j++) {
            $('.player4Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: <span></span></div><br><div class="pointsp'+i+'c'+j+'">points: <span></span></div></div>');
          }
        }
        else if (i===5) {
          for(j = 0; j < c; j++) {
            $('.player5Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: <span></span></div><br><div class="pointsp'+i+'c'+j+'">points: <span></span></div></div>');
          }
        }
        else if (i===6) {
          for(j = 0; j < c; j++) {
            $('.player6Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: <span></span></div><br><div class="pointsp'+i+'c'+j+'">points: <span></span></div></div>');
          }
        }
      }
    }

    function addTotal() {
      console.log('firing addTotal');
      for(i = 0; i < p; i++) {
        $('.totalBoard').append('<div class="totalPlayer'+i+'"><h1>Player '+(i+1)+' cards: <span class ="total'+i+'Span">0</span></h1></div>');
      }
    }
    shuffleCards();
    placeCards();
  }

  /////  ========== shuffle all 52 cards  ============

//  shuffle cards
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
//assign suit and value to each card
  function shuffleCards() {
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

////////============   PLACE CARDS   ====================

// first slice off 'c' cards for 'p' players.  Currently fixed at 5 decks, this should a be a for loop depending on number of players playing.
  function placeCards() {
    console.log( 'placeCards firing');

    var c = $('#noOfCards').val();
    playerDeck0 = cards.slice(0, c);
    console.log(playerDeck0, 'playerDeck0');
    playerDeck1 = cards.slice(c, 2*c);
    console.log(playerDeck1, 'playerDeck1');
    playerDeck2 = cards.slice(2*c, 3*c);
    console.log(playerDeck2, 'playerDeck2');
    playerDeck3 = cards.slice(3*c, 4*c);
    console.log(playerDeck3, 'playerDeck3');
    playerDeck4 = cards.slice(4*c, 5*c);
    console.log(playerDeck4, 'playerDeck4');
    playerDeck5 = cards.slice(5*c, 6*c);
    console.log(playerDeck5, 'playerDeck5');
  }

  function totals() {
    // for(i = 0; i < p; i++) {
    //   var total = 0;
    //   var playerDeck = 0;
    //   console.log(i);
    //   total[i] = playerDeck[i].reduce(function(a,b) {
    //     return a +b.value;
    //   }, 0);
    // }
    total0 = playerDeck0.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    total1 = playerDeck1.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    total2 = playerDeck2.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    total3 = playerDeck3.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    total4 = playerDeck4.reduce(function(a,b) {
      return a +b.value;
    }, 0);
    total5 = playerDeck5.reduce(function(a,b) {
      return a +b.value;
    }, 0);
  }

  function whoWins() {

    totals();
    console.log(total0, 'tot0');
    console.log(total1, 'tot1');
    console.log(total2, 'tot2');
    console.log(total3, 'tot3');
    console.log(total4, 'tot4');

    var winner = Math.max(total0, total1, total2, total3, total4);

    if (winner===total0) {
      $winner.text('Player One wins');
    }
    else if (winner===total1) {
      $winner.text('Player Two wins');
    }
    else if (winner===total2) {
      $winner.text('Player Three wins');
    }
    else if (winner===total3) {
      $winner.text('Player Four wins');
    }
    else if (winner===total4) {
      $winner.text('Player Five wins');
    }
    else {
      $winner.text('No winner, it\'s a draw');
    }
    $('.totalPlayer0 span').text(total0);
    $('.totalPlayer1 span').text(total1);
    $('.totalPlayer2 span').text(total2);
    $('.totalPlayer3 span').text(total3);
    $('.totalPlayer4 span').text(total4);
    $('.totalPlayer5 span').text(total5);
  }

//LOOKS HORRIBLE - need loops instead of typing out all posibilities for up to 5 players and 5 cards.  Won't work if p===6.
  function createDivVariables() {
    var p = $('#noOfPlayers').val();
    var c = $('#noOfCards').val();

    if (c==='1' && p==='2') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);

      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);

    }

    if (c==='2' && p==='2') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
    }

    if (c==='3' && p==='2') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
    }

    if (c==='4' && p==='2') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      $('.suitp0c3 span').text(playerDeck1[3].suit);
      $('.pointsp0c3 span').text(playerDeck1[3].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      $('.suitp1c3 span').text(playerDeck2[3].suit);
      $('.pointsp1c3 span').text(playerDeck2[3].value);
    }

    if (c==='5' && p==='2') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      $('.suitp0c3 span').text(playerDeck1[3].suit);
      $('.pointsp0c3 span').text(playerDeck1[3].value);
      $('.suitp0c4 span').text(playerDeck1[4].suit);
      $('.pointsp0c4 span').text(playerDeck1[4].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      $('.suitp1c3 span').text(playerDeck2[3].suit);
      $('.pointsp1c3 span').text(playerDeck2[3].value);
      $('.suitp1c4 span').text(playerDeck2[4].suit);
      $('.pointsp1c4 span').text(playerDeck2[4].value);
    }
    if (c==='1' && p==='3') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);

      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
    }

    if (c==='2' && p==='3') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
    }

    if (c==='3' && p==='3') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
    }

    if (c==='4' && p==='3') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      $('.suitp0c3 span').text(playerDeck1[3].suit);
      $('.pointsp0c3 span').text(playerDeck1[3].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      $('.suitp1c3 span').text(playerDeck2[3].suit);
      $('.pointsp1c3 span').text(playerDeck2[3].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
      $('.suitp2c3 span').text(playerDeck3[3].suit);
      $('.pointsp2c3 span').text(playerDeck3[3].value);
    }

    if (c==='5' && p==='3') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      $('.suitp0c3 span').text(playerDeck1[3].suit);
      $('.pointsp0c3 span').text(playerDeck1[3].value);
      $('.suitp0c4 span').text(playerDeck1[4].suit);
      $('.pointsp0c4 span').text(playerDeck1[4].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      $('.suitp1c3 span').text(playerDeck2[3].suit);
      $('.pointsp1c3 span').text(playerDeck2[3].value);
      $('.suitp1c4 span').text(playerDeck2[4].suit);
      $('.pointsp1c4 span').text(playerDeck2[4].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
      $('.suitp2c3 span').text(playerDeck3[3].suit);
      $('.pointsp2c3 span').text(playerDeck3[3].value);
      $('.suitp2c4 span').text(playerDeck3[4].suit);
      $('.pointsp2c4 span').text(playerDeck3[4].value);
    }
    if (c==='1' && p==='4') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      //player 4
      $('.suitp3c0 span').text(playerDeck4[0].suit);
      $('.pointsp3c0 span').text(playerDeck4[0].value);
    }

    if (c==='2' && p==='4') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      //player 4
      $('.suitp3c0 span').text(playerDeck4[0].suit);
      $('.pointsp3c0 span').text(playerDeck4[0].value);
      $('.suitp3c1 span').text(playerDeck4[1].suit);
      $('.pointsp3c1 span').text(playerDeck4[1].value);
    }

    if (c==='3' && p==='4') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
      //player 4
      $('.suitp3c0 span').text(playerDeck4[0].suit);
      $('.pointsp3c0 span').text(playerDeck4[0].value);
      $('.suitp3c1 span').text(playerDeck4[1].suit);
      $('.pointsp3c1 span').text(playerDeck4[1].value);
      $('.suitp3c2 span').text(playerDeck4[2].suit);
      $('.pointsp3c2 span').text(playerDeck4[2].value);
    }

    if (c==='4' && p==='4') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      $('.suitp0c3 span').text(playerDeck1[3].suit);
      $('.pointsp0c3 span').text(playerDeck1[3].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      $('.suitp1c3 span').text(playerDeck2[3].suit);
      $('.pointsp1c3 span').text(playerDeck2[3].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
      $('.suitp2c3 span').text(playerDeck3[3].suit);
      $('.pointsp2c3 span').text(playerDeck3[3].value);
      //player 4
      $('.suitp4c0 span').text(playerDeck4[0].suit);
      $('.pointsp4c0 span').text(playerDeck4[0].value);
      $('.suitp4c1 span').text(playerDeck4[1].suit);
      $('.pointsp4c1 span').text(playerDeck4[1].value);
      $('.suitp4c2 span').text(playerDeck4[2].suit);
      $('.pointsp4c2 span').text(playerDeck4[2].value);
      $('.suitp4c3 span').text(playerDeck4[4].suit);
      $('.pointsp4c3 span').text(playerDeck4[3].value);
    }

    if (c==='5' && p==='4') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      $('.suitp0c3 span').text(playerDeck1[3].suit);
      $('.pointsp0c3 span').text(playerDeck1[3].value);
      $('.suitp0c4 span').text(playerDeck1[4].suit);
      $('.pointsp0c4 span').text(playerDeck1[4].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      $('.suitp1c3 span').text(playerDeck2[3].suit);
      $('.pointsp1c3 span').text(playerDeck2[3].value);
      $('.suitp1c4 span').text(playerDeck2[4].suit);
      $('.pointsp1c4 span').text(playerDeck2[4].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
      $('.suitp2c3 span').text(playerDeck3[3].suit);
      $('.pointsp2c3 span').text(playerDeck3[3].value);
      $('.suitp2c4 span').text(playerDeck3[4].suit);
      $('.pointsp2c4 span').text(playerDeck3[4].value);
      //player 4
      $('.suitp3c0 span').text(playerDeck4[0].suit);
      $('.pointsp3c0 span').text(playerDeck4[0].value);
      $('.suitp3c1 span').text(playerDeck4[1].suit);
      $('.pointsp3c1 span').text(playerDeck4[1].value);
      $('.suitp3c2 span').text(playerDeck4[2].suit);
      $('.pointsp3c2 span').text(playerDeck4[2].value);
      $('.suitp3c3 span').text(playerDeck4[3].suit);
      $('.pointsp3c3 span').text(playerDeck4[3].value);
      $('.suitp3c4 span').text(playerDeck4[4].suit);
      $('.pointsp3c4 span').text(playerDeck4[4].value);
    }
    if (c==='1' && p==='5') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      //player 4
      $('.suitp3c0 span').text(playerDeck4[0].suit);
      $('.pointsp3c0 span').text(playerDeck4[0].value);
      //player 5
      $('.suitp4c0 span').text(playerDeck5[0].suit);
      $('.pointsp4c0 span').text(playerDeck5[0].value);
    }

    if (c==='2' && p==='5') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      //player 4
      $('.suitp3c0 span').text(playerDeck4[0].suit);
      $('.pointsp3c0 span').text(playerDeck4[0].value);
      $('.suitp3c1 span').text(playerDeck4[1].suit);
      $('.pointsp3c1 span').text(playerDeck4[1].value);
      //player 5
      $('.suitp4c0 span').text(playerDeck5[0].suit);
      $('.pointsp4c0 span').text(playerDeck5[0].value);
      $('.suitp4c1 span').text(playerDeck5[1].suit);
      $('.pointsp4c1 span').text(playerDeck5[1].value);
    }

    if (c==='3' && p==='5') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
      //player 4
      $('.suitp3c0 span').text(playerDeck4[0].suit);
      $('.pointsp3c0 span').text(playerDeck4[0].value);
      $('.suitp3c1 span').text(playerDeck4[1].suit);
      $('.pointsp3c1 span').text(playerDeck4[1].value);
      $('.suitp3c2 span').text(playerDeck4[2].suit);
      $('.pointsp3c2 span').text(playerDeck4[2].value);
      //player 5
      $('.suitp4c0 span').text(playerDeck5[0].suit);
      $('.pointsp4c0 span').text(playerDeck5[0].value);
      $('.suitp4c1 span').text(playerDeck5[1].suit);
      $('.pointsp4c1 span').text(playerDeck5[1].value);
      $('.suitp4c2 span').text(playerDeck5[2].suit);
      $('.pointsp4c2 span').text(playerDeck5[2].value);
    }

    if (c==='4' && p==='5') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      $('.suitp0c3 span').text(playerDeck1[3].suit);
      $('.pointsp0c3 span').text(playerDeck1[3].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      $('.suitp1c3 span').text(playerDeck2[3].suit);
      $('.pointsp1c3 span').text(playerDeck2[3].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
      $('.suitp2c3 span').text(playerDeck3[3].suit);
      $('.pointsp2c3 span').text(playerDeck3[3].value);
      //player 4
      $('.suitp4c0 span').text(playerDeck4[0].suit);
      $('.pointsp4c0 span').text(playerDeck4[0].value);
      $('.suitp4c1 span').text(playerDeck4[1].suit);
      $('.pointsp4c1 span').text(playerDeck4[1].value);
      $('.suitp4c2 span').text(playerDeck4[2].suit);
      $('.pointsp4c2 span').text(playerDeck4[2].value);
      $('.suitp4c3 span').text(playerDeck4[4].suit);
      $('.pointsp4c3 span').text(playerDeck4[3].value);
      //player 5
      $('.suitp5c0 span').text(playerDeck5[0].suit);
      $('.pointsp5c0 span').text(playerDeck5[0].value);
      $('.suitp5c1 span').text(playerDeck5[1].suit);
      $('.pointsp5c1 span').text(playerDeck5[1].value);
      $('.suitp5c2 span').text(playerDeck5[2].suit);
      $('.pointsp5c2 span').text(playerDeck5[2].value);
      $('.suitp5c3 span').text(playerDeck5[4].suit);
      $('.pointsp5c3 span').text(playerDeck5[3].value);
    }

    if (c==='5' && p==='5') {
      //player 1
      $('.suitp0c0 span').text(playerDeck1[0].suit);
      $('.pointsp0c0 span').text(playerDeck1[0].value);
      $('.suitp0c1 span').text(playerDeck1[1].suit);
      $('.pointsp0c1 span').text(playerDeck1[1].value);
      $('.suitp0c2 span').text(playerDeck1[2].suit);
      $('.pointsp0c2 span').text(playerDeck1[2].value);
      $('.suitp0c3 span').text(playerDeck1[3].suit);
      $('.pointsp0c3 span').text(playerDeck1[3].value);
      $('.suitp0c4 span').text(playerDeck1[4].suit);
      $('.pointsp0c4 span').text(playerDeck1[4].value);
      //player 2
      $('.suitp1c0 span').text(playerDeck2[0].suit);
      $('.pointsp1c0 span').text(playerDeck2[0].value);
      $('.suitp1c1 span').text(playerDeck2[1].suit);
      $('.pointsp1c1 span').text(playerDeck2[1].value);
      $('.suitp1c2 span').text(playerDeck2[2].suit);
      $('.pointsp1c2 span').text(playerDeck2[2].value);
      $('.suitp1c3 span').text(playerDeck2[3].suit);
      $('.pointsp1c3 span').text(playerDeck2[3].value);
      $('.suitp1c4 span').text(playerDeck2[4].suit);
      $('.pointsp1c4 span').text(playerDeck2[4].value);
      //player 3
      $('.suitp2c0 span').text(playerDeck3[0].suit);
      $('.pointsp2c0 span').text(playerDeck3[0].value);
      $('.suitp2c1 span').text(playerDeck3[1].suit);
      $('.pointsp2c1 span').text(playerDeck3[1].value);
      $('.suitp2c2 span').text(playerDeck3[2].suit);
      $('.pointsp2c2 span').text(playerDeck3[2].value);
      $('.suitp2c3 span').text(playerDeck3[3].suit);
      $('.pointsp2c3 span').text(playerDeck3[3].value);
      $('.suitp2c4 span').text(playerDeck3[4].suit);
      $('.pointsp2c4 span').text(playerDeck3[4].value);
      //player 4
      $('.suitp3c0 span').text(playerDeck4[0].suit);
      $('.pointsp3c0 span').text(playerDeck4[0].value);
      $('.suitp3c1 span').text(playerDeck4[1].suit);
      $('.pointsp3c1 span').text(playerDeck4[1].value);
      $('.suitp3c2 span').text(playerDeck4[2].suit);
      $('.pointsp3c2 span').text(playerDeck4[2].value);
      $('.suitp3c3 span').text(playerDeck4[3].suit);
      $('.pointsp3c3 span').text(playerDeck4[3].value);
      $('.suitp3c4 span').text(playerDeck4[4].suit);
      $('.pointsp3c4 span').text(playerDeck4[4].value);
      //player 5
      $('.suitp4c0 span').text(playerDeck5[0].suit);
      $('.pointsp4c0 span').text(playerDeck5[0].value);
      $('.suitp4c1 span').text(playerDeck5[1].suit);
      $('.pointsp4c1 span').text(playerDeck5[1].value);
      $('.suitp4c2 span').text(playerDeck5[2].suit);
      $('.pointsp4c2 span').text(playerDeck5[2].value);
      $('.suitp4c3 span').text(playerDeck5[3].suit);
      $('.pointsp4c3 span').text(playerDeck5[3].value);
      $('.suitp4c4 span').text(playerDeck5[4].suit);
      $('.pointsp4c4 span').text(playerDeck5[4].value);
    }
    else {
      $winner.text('please choose players and cards between 1-5');
    }
    whoWins();

  }



});
