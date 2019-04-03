console.log("hi");



const connect4 = {
//              |--> connect4.row7[0].pos
//              |      |--> connect4.row7[0].piece
  row7: [{pos:'7a', piece: null}, {pos:'7b', piece: null}, {pos:'7c', piece: null}, {pos:'7d', piece: null}, {pos:'7e', piece: null}, {pos:'7f', piece: null}],
  row6: [{pos:'6a', piece: null}, {pos:'6b', piece: null}, {pos:'6c', piece: null}, {pos:'6d', piece: null}, {pos:'6e', piece: null}, {pos:'6f', piece: null}],
  row5: [{pos:'5a', piece: null}, {pos:'5b', piece: null}, {pos:'5c', piece: null}, {pos:'5d', piece: null}, {pos:'5e', piece: null}, {pos:'5f', piece: null}],
  row4: [{pos:'4a', piece: null}, {pos:'4b', piece: null}, {pos:'4c', piece: null}, {pos:'4d', piece: null}, {pos:'4e', piece: null}, {pos:'4f', piece: null}],
  row3: [{pos:'3a', piece: null}, {pos:'3b', piece: null}, {pos:'3c', piece: null}, {pos:'3d', piece: null}, {pos:'3e', piece: null}, {pos:'3f', piece: null}],
  row2: [{pos:'2a', piece: null}, {pos:'2b', piece: null}, {pos:'2c', piece: null}, {pos:'2d', piece: null}, {pos:'2e', piece: null}, {pos:'2f', piece: null}],
  row1: [{pos:'1a', piece: null}, {pos:'1b', piece: null}, {pos:'1c', piece: null}, {pos:'1d', piece: null}, {pos:'1e', piece: null}, {pos:'1f', piece: null}],
}

// red = +1
// blue = -1
//null = empty space

playerBlue = true; // red goes first easy to change this with a button that changes this to false.
//token is "dropped" into array row,
// could use the return function here to feed info into the win checker


const row1Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row1[i].piece === null && playerBlue === true) {
      connect4.row1[i].piece = 1
      playerBlue=false
      return connect4.row1[i].pos
    }
    if (connect4.row1[i].piece === null && playerBlue === false) {
      connect4.row1[i].piece = -1
      playerBlue = true;
      return connect4.row1[i].pos
    }
  }
}
const row2Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row2[i].piece === null && playerBlue === true) {
      connect4.row2[i].piece = 1
      playerBlue = false;
      return connect4.row2[i].pos
    }
    if (connect4.row2[i].piece === null && playerBlue === false) {
      connect4.row2[i].piece = -1
      playerBlue = true;
      return connect4.row2[i].pos
    }
  }
}
const row3Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row3[i].piece === null && playerBlue === true) {
      connect4.row3[i].piece = 1
      playerBlue = false;
      return connect4.row3[i].pos
    }
    if (connect4.row3[i].piece === null && playerBlue === false) {
      connect4.row3[i].piece = -1
      playerBlue = true;
      return connect4.row3[i].pos
    }
  }
}
const row4Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row4[i].piece === null && playerBlue === true) {
      connect4.row4[i].piece = 1
      playerBlue = false;
      return connect4.row4[i].pos
    }
    if (connect4.row4[i].piece === null && playerBlue === false) {
      connect4.row4[i].piece = -1
      playerBlue = true;
      return connect4.row4[i].pos
    }
  }
}
const row5Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row5[i].piece === null && playerBlue === true) {
      connect4.row5[i].piece = 1
      playerBlue = false;
      return connect4.row5[i].pos
    }
    if (connect4.row5[i].piece === null && playerBlue === false) {
      connect4.row5[i].piece = -1
      playerBlue = true;
      return connect4.row5[i].pos
    }
  }
}
const row6Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row6[i].piece === null && playerBlue === true) {
      connect4.row6[i].piece = 1
      playerBlue = false;
      return connect4.row6[i].pos
    }
    if (connect4.row6[i].piece === null && playerBlue === false) {
      connect4.row6[i].piece = -1
      playerBlue = true;
      return connect4.row6[i].pos
    }
  }
}
const row7Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row7[i].piece === null && playerBlue === true) {
      connect4.row7[i].piece = 1
      playerBlue = false;
      return connect4.row7[i].pos
    }
    if (connect4.row7[i].piece === null && playerBlue === false) {
      connect4.row7[i].piece = -1
      playerBlue = true;
      return connect4.row7[i].pos
    }
  }
}

const iterate = function() {
  for (var key in connect4) { //this loops through the rows (connect4)
    console.log(key, connect4[key]);
    for (let i = 0; i < connect4[key].length; i++) { // this loops through each row
      // if (i) { // the i represents one of these: {pos:'7a', piece: 1}
        console.log(connect4[key][i].pos) // to get pos or piece you simple write .pos or .piece

      }
      // console.log(connect4[key][0].pos)
    // }
  }
}

const resetGame = function() {
  for (var key in connect4) { //this loops through the rows (connect4)
    console.log(key, connect4[key]);
    for (let i = 0; i < connect4[key].length; i++) { // this loops through each row
    connect4[key][i].piece = null;
    }
  }
}

//
// //stuck on this, the score is updating appropriately now but i can get the jloop going through the rows, ie row 1-7
// //win contions
// //row 1 - 7, abcd, bcde, cdef
const winTest = function() {
  for (var key in connect4) { //connect4 rows
    for (let i = 0; i < connect4[key].length; i++) { //connect4.row
      score = 0;
      for (let j = 0; j < 4 ; j++) {
          score += connect4[key][j].piece;
        if (score === 4){
          return console.log(`Red win at ${connect4[key][j].pos}`);
        } if (score === -4){
          return console.log(`Blue win at ${connect4[key][j].pos}`)
        }
      }
      //score reset here
      score = 0;
      for (let j = 1; j < 5 ; j++) {
          score += connect4[key][j].piece;
        if (score === 4){
          return console.log(`Red win at ${connect4[key][j].pos}`);
        } if (score === -4){
          return console.log(`Blue win at ${connect4[key][j].pos}`)
        }
      }
      //score reset
      score = 0;
      for (let j = 2; j < 6 ; j++) {
          score += connect4[key][j].piece;
        if (score === 4){
          return console.log(`Red win at ${connect4[key][j].pos}`);
        } if (score === -4){
          return console.log(`Blue win at ${connect4[key][j].pos}`)
        }
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][0].piece;
      if (score === 4){
        return console.log(`Red win at ${connect4[key][0].pos}`);
      } if (score === -4){
        return console.log(`Blue win at ${connect4[key][0].pos}`)
      }
    }
    score = 0
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][1].piece;
      if (score === 4){
        return console.log(`Red win at ${connect4[key][1].pos}`);
      } if (score === -4){
        return console.log(`Blue win at ${connect4[key][1].pos}`)
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][2].piece;
      if (score === 4){
        return console.log(`Red win at ${connect4[key][2].pos}`);
      } if (score === -4){
        return console.log(`Blue win at ${connect4[key][2].pos}`)
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][3].piece;
      if (score === 4){
        return console.log(`Red win at ${connect4[key][3].pos}`);
      } if (score === -4){
        return console.log(`Blue win at ${connect4[key][3].pos}`)
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][4].piece;
      if (score === 4){
        return console.log(`Red win at ${connect4[key][4].pos}`);
      } if (score === -4){
        return console.log(`Blue win at ${connect4[key][4].pos}`)
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][5].piece;
      if (score === 4){
        return console.log(`Red win at ${connect4[key][5].pos}`);
      } if (score === -4){
        return console.log(`Blue win at ${connect4[key][5].pos}`)
      }
    }
  }
}

//     console.log(`j loop ${[j]}`);
//     for (let i = 0; i < 4 ; i++) {
//       score += connect4.row6[i].piece; // i need J variable working here instead of 6, to check the whole board
//     if (score === 4){
//       return console.log('Red win');
//     } if (score === -4){
//       return console.log('Blue win')
//       }
//     }
//
//     for (let i = 1; i < 5 ; i++) {
//
//       console.log('1-5');
//     }
//
//     for (let i = 2; i < 6 ; i++) {
//       // console.log(connect4.row7[i].pos);
//       // console.log(connect4.row7[i].piece);
//       console.log('2-6');
//     }
//
//     for (let i = 3; i < 7 ; i++) {
//       // console.log(connect4.row7[i].pos);
//       // console.log(connect4.row7[i].piece);
//       console.log('3-7');
//     }
//   }
// }
// const winTest = function() {
//   for (let j = 1; j < 7; j++) {
//     console.log(`j loop ${[j]}`);
//     for (let i = 0; i < 4 ; i++) {
//       score += connect4.row6[i].piece; // i need J variable working here instead of 6, to check the whole board
//     if (score === 4){
//       return console.log('Red win');
//     } if (score === -4){
//       return console.log('Blue win')
//       }
//     }
//
//     for (let i = 1; i < 5 ; i++) {
//
//       console.log('1-5');
//     }
//
//     for (let i = 2; i < 6 ; i++) {
//       // console.log(connect4.row7[i].pos);
//       // console.log(connect4.row7[i].piece);
//       console.log('2-6');
//     }
//
//     for (let i = 3; i < 7 ; i++) {
//       // console.log(connect4.row7[i].pos);
//       // console.log(connect4.row7[i].piece);
//       console.log('3-7');
//     }
//   }
// }

//index 0 - 6 of arrays - 1234, 2345, 3456, 4567 -- only 4 posibilities per row
//            |---> this 1 needs to be the variable,
//              |--> index location,
//connect4.row1[0].piece


//diaganal wins both values accending
// 1a, 2b, 3c, 4d
//max height is c -> f
