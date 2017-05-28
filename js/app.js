console.log('JS loaded');

$(()=>{
  //looking at 2 player game with 5 cards first then will look at changing these varibles and shorten code using forEach loops
  //
  // var playerDeck0 = [];
  // var playerDeck1 = [];
  // var playerDeck2 = [];
  // var playerDeck3 = [];
  // var playerDeck4 = [];
  //
  // let totalSpan0 = 0;
  // let totalSpan1 = 0;
  // let totalSpan2 = 0;
  // let totalSpan3 = 0;
  // let totalSpan4 = 0;
  // let total0 = 0;
  // let total1 = 0;
  // let total2 = 0;
  // let total3 = 0;
  // let total4 = 0;

  // function createVariables(){
  //   var p = $('#noOfPlayers').val();
  //   var playerDeck = [];
  //   let totalSpan = 0;
  //   let total = 0;
  //
  //   for (var i = 0; i < p; ++i) {
  //     playerDeck[i] = [];
  //     totalSpan[i] = 0;
  //     total[i] = 0;
  //   }
  //   return playerDeck;
  // }

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
  const $pop = $('.pop');
  const $card = $('.card');
  const $name = $('.name');
  const $suit = $('.suit');
  const $points =$('.points');
  // const $totalSpan0 = $('.totalSpan0');
  // const $totalSpan1 = $('.totalSpan1');
  // const $totalSpan2 = $('.totalSpan2');
  // const $totalSpan3 = $('.totalSpan3');
  // const $totalSpan4 = $('.totalSpan4');
  // const $totalSpan5 = $('.totalSpan5');
  const $winner = $('.winner');
  const $start = $('.start');

//player 1 card details
  // const $namep1c1 = $('.namep1c1');
//   const $suitp0c0 = $('.suitp0c0');
//   const $pointsp0c0 = $('.pointsp0c0');
//   const $suitp0c1 = $('.suitp0c1');
//   const $pointsp0c1 = $('.pointsp0c1');
//   const $suitp0c2 = $('.suitp0c2');
//   const $pointsp0c2 = $('.pointsp0c2');
//   const $suitp0c3 = $('.suitp0c3');
//   const $pointsp0c3 = $('.pointsp0c3');
//   const $suitp0c4 = $('.suitp0c4');
//   const $pointsp0c4 = $('.pointsp0c4');
//   const $suitp0c5 = $('.suitp0c5');
//   const $pointsp0c5 = $('.pointsp0c5');
//
// //player 2 card details
//   // const $namep1c1 = $('.namep1c1');
//   const $suitp1c0 = $('.suitp1c0');
//   const $pointsp1c0 = $('.pointsp1c0');
//   const $suitp1c1 = $('.suitp1c1');
//   const $pointsp1c1 = $('.pointsp1c1');
//   const $suitp1c2 = $('.suitp1c2');
//   const $pointsp1c2 = $('.pointsp1c2');
//   const $suitp1c3 = $('.suitp1c3');
//   const $pointsp1c3 = $('.pointsp1c3');
//   const $suitp1c4 = $('.suitp1c4');
//   const $pointsp1c4 = $('.pointsp1c4');
//   const $suitp1c5 = $('.suitp1c5');
//   const $pointsp1c5 = $('.pointsp1c5');
//
// //player 3 card details
//   // const $namep2c1 = $('.namep2c1');
//   const $suitp2c0 = $('.suitp2c0');
//   const $pointsp2c0 = $('.pointsp2c0');
//   const $suitp2c1 = $('.suitp2c1');
//   const $pointsp2c1 = $('.pointsp2c1');
//   const $suitp2c2 = $('.suitp2c2');
//   const $pointsp2c2 = $('.pointsp2c2');
//   const $suitp2c3 = $('.suitp2c3');
//   const $pointsp2c3 = $('.pointsp2c3');
//   const $suitp2c4 = $('.suitp2c4');
//   const $pointsp2c4 = $('.pointsp2c4');
//   const $suitp2c5 = $('.suitp2c5');
//   const $pointsp2c5 = $('.pointsp2c5');
//
//   //player 4 card details
//     const $namep3c1 = $('.namep3c1');
//     const $suitp3c0 = $('.suitp3c0');
//     const $pointsp3c0 = $('.pointsp3c0');
//     const $suitp3c1 = $('.suitp3c1');
//     const $pointsp3c1 = $('.pointsp3c1');
//     const $suitp3c2 = $('.suitp3c2');
//     const $pointsp3c2 = $('.pointsp3c2');
//     const $suitp3c3 = $('.suitp3c3');
//     const $pointsp3c3 = $('.pointsp3c3');
//     const $suitp3c4 = $('.suitp3c4');
//     const $pointsp3c4 = $('.pointsp3c4');
//     const $suitp3c5 = $('.suitp3c5');
//     const $pointsp3c5 = $('.pointsp3c5');

  $submit.on('click', drawBoard);
  $start.on('click', dealCards);
  $pop.on('click', createDivVariables);

  function drawBoard(e) {
    e.preventDefault();
    // clear the board
    $('.board').html('');

    var p = $('#noOfPlayers').val();
    var c = $('#noOfCards').val();
    //slices top 5 off each deck
    createVariables();
    createDeck();
    addTotal();

    //===========create 'deck' for number of players=======
    function createDeck() {
      console.log('firing createDeck');
      for(i = 0; i < p; i++) {
        $('.board').append('<div class="playerCards player'+i+'Cards"><h2>This is player '+i+'\'s board</h2></div>');
      //then create cards for each deck - This would work better as a loop, but i couldn't get the loops I tried to give me different classes er board.
        if (i===0) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player0Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: class="suitp'+i+'c'+j+'"<span></span></div><div class="pointsp'+i+'c'+j+'">points: class="pointsp'+i+'c'+j+'" <span></span></div></div>');
          }
        }
        else if (i===1) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player1Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: class="suitp'+i+'c'+j+'"<span></span></div><div class="pointsp'+i+'c'+j+'">points: class="pointsp'+i+'c'+j+'" <span></span></div></div>');
          }
        }
        else if (i===2) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player2Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: class="suitp'+i+'c'+j+'"<span></span></div><div class="pointsp'+i+'c'+j+'">points: class="pointsp'+i+'c'+j+'" <span></span></div></div>');
          }
        }
        else if (i===3) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player3Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: class="suitp'+i+'c'+j+'"<span></span></div><div class="pointsp'+i+'c'+j+'">points: class="pointsp'+i+'c'+j+'" <span></span></div></div>');
          }
        }
        else if (i===4) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player4Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: class="suitp'+i+'c'+j+'"<span></span></div><div class="pointsp'+i+'c'+j+'">points: class="pointsp'+i+'c'+j+'" <span></span></div></div>');
          }
        }
        else if (i===5) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player5Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: class="suitp'+i+'c'+j+'"<span></span></div><div class="pointsp'+i+'c'+j+'">points: class="pointsp'+i+'c'+j+'" <span></span></div></div>');
          }
        }
        else if (i===6) {
          for(j = 0; j < c; j++) {
            console.log('firing createDeckpart 2');
            $('.player6Cards').append('<div class="card card'+j+'"><div class="suitp'+i+'c'+j+'">suit: class="suitp'+i+'c'+j+'"<span></span></div><div class="pointsp'+i+'c'+j+'">points: class="pointsp'+i+'c'+j+'" <span></span></div></div>');
          }
        }
      }
    }

    function addTotal() {
      console.log('firing addTotal');
      for(i = 0; i < p; i++) {
        $('.totalBoard').append('<div class="totalPlayer'+i+'"><h1>Player '+i+' cards: <span class ="total'+i+'Span">0</span></h1></div>');
      }
    }
    shuffleCards();// Shuffle deck
    placeCards();

  }

  /////  ========== shuffle all 52 cards  ============
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

// first slice off 'c' cards for 'p' players.
// then call a function to apply all the div classes the nominal value of the cards.
  function placeCards() {
    console.log( 'placeCards firing')
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

  // function createDivVariables(){
  //   var p = $('#noOfPlayers').val();
  //   var playerDeck = [];
  //   let totalSpan = 0;
  //   let total = 0;
  //   for (var i = 0; i < p; ++i) {
  //     playerDeck[i] = [];
  //     totalSpan[i] = 0;
  //     total[i] = 0;
  //   }
  //   return playerDeck;
  // }

////////======   CREATE DIV VARIBLES  ===========////////

  function createVariables(){
    console.log( 'createVariables firing')

    var p = $('#noOfPlayers').val();
    var c = $('#noOfCards').val();
    var playerDeck = [];
    let totalSpan = 0;
    let total = 0;

    for (var i = 0; i < p; ++i) {
      playerDeck[i] = [];
      totalSpan[i] = 0;
      total[i] = 0;
    }
    return playerDeck;
    // console.log($('.totalPlayer'+i+' span').text(total[i]));
  }

  function createDivVariables() {
    var p = $('#noOfPlayers').val();
    var c = $('#noOfCards').val();

    console.log( 'createDivVariables firing', c)

    let playerDeck = [];
    let totalSpan = 0;
    let total = 0;
    for (var i = 0; i < p; ++i) {
      playerDeck[i] = [];
      totalSpan[i] = 0;
      total[i] = 0;
      console.log('createDivVariables firing zzzz', 'c =', c,'i=',  i)
      if (c === 0) {
        $('.suitp'+i+'c0 span').text(playerDeck[i][0].suit);
        $('.pointsp'+i+'c0 span').text(playerDeck[i][0].value);
      }
      else if (c === '1') {
        $('.suitp'+i+'c1 span').text(playerDeck[i][1].suit);
        $('.pointsp'+i+'c1 span').text(playerDeck[i][1].value);
      }
      else if (c === '2') {
        $winner.text('winnning c=2');

        $('.suitp'+i+'c2 span').text(playerDeck[i][2].suit);
        $('.pointsp'+i+'c2 span').text(playerDeck[i][2].value);
      }
      else if (c === '3') {
        $winner.text('winnning c=3');
        //player 1
        $('.suitp'+i+'c0 span').text(playerDeck2[2].suit);
        $('.pointsp'+i+'c0 span').text(playerDeck2[2].value);
        $('.suitp'+i+'c1 span').text(playerDeck2[2].suit);
        $('.pointsp'+i+'c1 span').text(playerDeck2[2].value);
        $('.suitp'+i+'c2 span').text(playerDeck2[2].suit);
        $('.pointsp'+i+'c2 span').text(playerDeck2[2].value);
      }
      else if (c==='4') {
        $winner.text('winnning c=4');
        //console.log('pleasse', .suitp'+i+'c4 span);

        $('.suitp'+i+'c4 span').text('hellooooo');
        $('.suitp0c4 span').text('hellooooo222');
        $('.suitp'+i+'c4 span').text(`playerDeck${i}[4].suit`);
        $('.pointsp'+i+'c4 span').text(`playerDeck${i}[4].value`);
      }
      else if (c==='5') {
        console.log('firrring for c=5');
        console.log(playerDeck[i][5]);
        $('.suitp'+i+'c5 span').text(playerDeck[i][5].suit);
        $('.pointsp'+i+'c5 span').text(playerDeck[i][5].value);
      }
      else {
        console.log(c);
        $winner.text('why dont you work!!!');
      }

    }
  }


  // function createTotalVariables() {
  //   console.log('createTotalVariables firig');
  //
  //   for (var i = 0; i < p; ++i) {
  //     let total = 0;
  //     total[i] = playerDeck[i].reduce(function(a,b) {
  //       return a +b.value;
  //     }, 0);
  //     $('.totalPlayer'+i+' span').text(total[i]);
  //   }
  // }

  function dealCards() {
    createVariables();

    //getting total points for player One
    // total0 = playerDeck0.reduce(function(a,b) {
    //   return a +b.value;
    // }, 0);
    // console.log(total0, 'total0');

    //add information to player one's cards
    // $('.totalPlayer0 span').text(total0);
    // $('.suitp0c0 span').text(playerDeck0[0].suit);
    // $('.pointsp0c0 span').text(playerDeck0[0].value);
    // $('.suitp0c1 span').text(playerDeck0[1].suit);
    // $('.pointsp0c1 span').text(playerDeck0[1].value);
    // $('.suitp0c2 span').text(playerDeck0[2].suit);
    // $('.pointsp0c2 span').text(playerDeck0[2].value);
    // $('.suitp0c3 span').text(playerDeck0[3].suit);
    // $('.pointsp0c3 span').text(playerDeck0[3].value);
    // $('.suitp0c4 span').text(playerDeck0[4].suit);
    // $('.pointsp0c4 span').text(playerDeck0[4].value);

    //getting total points for player One
    // total1 = playerDeck1.reduce(function(a,b) {
    //   return a +b.value;
    // }, 0);
    // console.log(total1, 'total1');

    //add information to player one's cards
    // $('.totalPlayer1 span').text(total1);
    // $('.suitp1c0 span').text(playerDeck1[0].suit);
    // $('.pointsp1c0 span').text(playerDeck1[0].value);
    // $('.suitp1c1 span').text(playerDeck1[1].suit);
    // $('.pointsp1c1 span').text(playerDeck1[1].value);
    // $('.suitp1c2 span').text(playerDeck1[2].suit);
    // $('.pointsp1c2 span').text(playerDeck1[2].value);
    // $('.suitp1c3 span').text(playerDeck1[3].suit);
    // $('.pointsp1c3 span').text(playerDeck1[3].value);
    // $('.suitp1c4 span').text(playerDeck1[4].suit);
    // $('.pointsp1c4 span').text(playerDeck1[4].value);

    //getting total points for player One
    // total2 = playerDeck2.reduce(function(a,b) {
    //   return a +b.value;
    // }, 0);
    // console.log(total2, 'total2');

    //add information to player one's cards
    // $('.totalPlayer2 span').text(total2);
    // $('.suitp2c0 span').text(playerDeck2[0].suit);
    // $('.pointsp2c0 span').text(playerDeck2[0].value);
    // $('.suitp2c1 span').text(playerDeck2[1].suit);
    // $('.pointsp2c1 span').text(playerDeck2[1].value);
    // $('.suitp2c2 span').text(playerDeck2[2].suit);
    // $('.pointsp2c2 span').text(playerDeck2[2].value);
    // $('.suitp2c3 span').text(playerDeck2[3].suit);
    // $('.pointsp2c3 span').text(playerDeck2[3].value);
    // $('.suitp2c4 span').text(playerDeck2[4].suit);
    // $('.pointsp2c4 span').text(playerDeck2[4].value);

    //getting total points for player One
    // total3 = playerDeck3.reduce(function(a,b) {
    //   return a +b.value;
    // }, 0);
    // console.log(total3, 'total3');

    //add information to player three's cards
    // $('.totalPlayer3 span').text(total3);
    // $('.suitp3c0 span').text(playerDeck3[0].suit);
    // $('.pointsp3c0 span').text(playerDeck3[0].value);
    // $('.suitp3c1 span').text(playerDeck3[1].suit);
    // $('.pointsp3c1 span').text(playerDeck3[1].value);
    // $('.suitp3c2 span').text(playerDeck3[2].suit);
    // $('.pointsp3c2 span').text(playerDeck3[2].value);
    // $('.suitp3c3 span').text(playerDeck3[3].suit);
    // $('.pointsp3c3 span').text(playerDeck3[3].value);
    // $('.suitp3c4 span').text(playerDeck3[4].suit);
    // $('.pointsp3c4 span').text(playerDeck3[4].value);

    //getting total points for player One
    // total4 = playerDeck4.reduce(function(a,b) {
    //   return a +b.value;
    // }, 0);
    // console.log(total4, 'total4');

    //add information to player four's cards
    // $('.totalPlayer4 span').text(total4);
    // $('.suitp4c0 span').text(playerDeck4[0].suit);
    // $('.pointsp4c0 span').text(playerDeck4[0].value);
    // $('.suitp4c1 span').text(playerDeck4[1].suit);
    // $('.pointsp4c1 span').text(playerDeck4[1].value);
    // $('.suitp4c2 span').text(playerDeck4[2].suit);
    // $('.pointsp4c2 span').text(playerDeck4[2].value);
    // $('.suitp4c3 span').text(playerDeck4[3].suit);
    // $('.pointsp4c3 span').text(playerDeck4[3].value);
    // $('.suitp4c4 span').text(playerDeck4[4].suit);
    // $('.pointsp4c4 span').text(playerDeck4[4].value);
  }



    // //getting total points for player One
    // total1 = playerDeck1.reduce(function(a,b) {
    //   return a +b.value;
    // }, 0);
    // console.log(total1, 'total1');
    //
    // //add information to player two's cards
    // $totalSpan1.text(total1);
    // $pointsp1c0.text(playerDeck1[0].value);
    // $suitp1c0.text(playerDeck1[0].suit);
    // $pointsp1c1.text(playerDeck1[0].value);
    // $suitp1c1.text(playerDeck1[0].suit);
    // $pointsp1c2.text(playerDeck1[1].value);
    // $suitp1c2.text(playerDeck1[1].suit);
    // $pointsp1c3.text(playerDeck1[2].value);
    // $suitp1c3.text(playerDeck1[2].suit);
    // // $pointsp1c4.text(playerDeck1[3].value);
    // // $suitp1c4.text(playerDeck1[3].suit);
    // // $pointsp1c5.text(playerDeck1[4].value);
    // // $suitp1c5.text(playerDeck1[4].suit);

    // //get total points for player Two
    // total2 = playerDeck2.reduce(function(a,b) {
    //   return a +b.value;
    // }, 0);
    // console.log(total2, 'total2');
    //
    // //add information to player two's cards
    // $totalSpan2.text(total2);
    // $pointsp2c0.text(playerDeck2[0].value);
    // $suitp2c0.text(playerDeck2[0].suit);
    // $pointsp2c1.text(playerDeck2[0].value);
    // $suitp2c1.text(playerDeck2[0].suit);
    // $pointsp2c2.text(playerDeck2[1].value);
    // $suitp2c2.text(playerDeck2[1].suit);
    // $pointsp2c3.text(playerDeck2[2].value);
    // $suitp2c3.text(playerDeck2[2].suit);
    // // $pointsp2c4.text(playerDeck2[3].value);
    // // $suitp2c4.text(playerDeck2[3].suit);
    // // $pointsp2c5.text(playerDeck2[4].value);
    // // $suitp2c5.text(playerDeck2[4].suit);

    // whoWins();


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
