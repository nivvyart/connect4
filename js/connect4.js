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

let playerBlue = false;
let playerRed= true;
let currentPlayer = playerBlue ? 'playerBlue' : 'playerRed';


 // red goes first easy to change this with a button that changes this to false.
//token is "dropped" into array row,
// could use the return function here to feed info into the win checker

const switchPlayer = function() {
  if (!playerBlue) {
    playerBlue = true;
    playerRed = false;
  } else {
    playerBlue = false;
    playerRed = true;
  }
}


const row1Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row1[i].piece === null && playerRed === true) {
      connect4.row1[i].piece = 1
      // winTest();
      switchPlayer();
      return connect4.row1[i].pos
    }
    if (connect4.row1[i].piece === null && playerBlue === true) {
      connect4.row1[i].piece = -1
      // winTest();
      switchPlayer();
      return connect4.row1[i].pos
    }
  }
}

const row2Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row2[i].piece === null && playerRed === true) {
      connect4.row2[i].piece = 1
      // winTest();
      switchPlayer();
      return connect4.row2[i].pos
    }
    if (connect4.row2[i].piece === null && playerBlue === true) {
      connect4.row2[i].piece = -1
      // winTest();
      switchPlayer();
      return connect4.row2[i].pos
    }
  }
}

const row3Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row3[i].piece === null && playerRed === true) {
      connect4.row3[i].piece = 1
      // winTest();
      switchPlayer();
      return connect4.row3[i].pos
    }
    if (connect4.row3[i].piece === null && playerBlue === true) {
      connect4.row3[i].piece = -1
      // winTest();
      switchPlayer();
      return connect4.row3[i].pos
    }
  }
}
const row4Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row4[i].piece === null && playerRed === true) {
      connect4.row4[i].piece = 1
      // winTest();
      switchPlayer();
      return connect4.row4[i].pos
    }
    if (connect4.row4[i].piece === null && playerBlue === true) {
      connect4.row4[i].piece = -1
      // winTest();
      switchPlayer();
      return connect4.row4[i].pos
    }
  }
}
const row5Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row5[i].piece === null && playerRed === true) {
      connect4.row5[i].piece = 1
      // winTest();
      switchPlayer();
      return connect4.row5[i].pos
    }
    if (connect4.row5[i].piece === null && playerBlue === true) {
      connect4.row5[i].piece = -1
      // winTest();
      switchPlayer();
      return connect4.row5[i].pos
    }
  }
}
const row6Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row6[i].piece === null && playerRed === true) {
      connect4.row6[i].piece = 1
      // winTest();
      switchPlayer();
      return connect4.row6[i].pos
    }
    if (connect4.row6[i].piece === null && playerBlue === true) {
      connect4.row6[i].piece = -1
      // winTest();
      switchPlayer();
      return connect4.row6[i].pos
    }
  }
}
const row7Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row7[i].piece === null && playerRed === true) {
      connect4.row7[i].piece = 1
      // winTest();
      switchPlayer();
      return connect4.row7[i].pos
    }
    if (connect4.row7[i].piece === null && playerBlue === true) {
      connect4.row7[i].piece = -1
      // winTest();
      switchPlayer();
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
    console.log(key);
    for (let i = 0; i < connect4[key].length; i++) { //connect4.row
      score = 0;
      for (let j = 0; j < 4 ; j++) {
        console.log(score);
        score += connect4[key][i].piece;
        if (score === 4){
          console.log(`Red win at ${connect4[key][j].pos}`);
        } if (score === -4){
          console.log(`Blue win at ${connect4[key][j].pos}`)
        }
      }
      //score reset here
      score = 0;
      for (let j = 1; j < 5 ; j++) {
          score += connect4[key][j].piece;
        if (score === 4){
          console.log(`Red win at ${connect4[key][j].pos}`);
        } if (score === -4){
          console.log(`Blue win at ${connect4[key][j].pos}`)
        }
      }
      //score reset
      score = 0;
      for (let j = 2; j < 6 ; j++) {
          score += connect4[key][j].piece;
        if (score === 4){
          console.log(`Red win at ${connect4[key][j].pos}`);
        } if (score === -4){
          console.log(`Blue win at ${connect4[key][j].pos}`)
        }
      }
      //score reset
    score = 0;

    //vertical check starts here

    for (let j = 0; j < 7; j++) {
      //score += connect4[key][0].piece;
      console.log(connect4[key][0].piece);
      if (score === 4){
        console.log(`Red win at ${connect4[key][0].pos}`);
      } if (score === -4){
        console.log(`Blue win ${connect4[key][0].pos}`)
      }
    }
    score = 0
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][1].piece;
      if (score === 4){
        console.log(`Red win at ${connect4[key][1].pos}`);
      } if (score === -4){
        console.log(`Blue win at ${connect4[key][1].pos}`)
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][2].piece;
      if (score === 4){
        console.log(`Red win at ${connect4[key][2].pos}`);
      } if (score === -4){
        console.log(`Blue win at ${connect4[key][2].pos}`)
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][3].piece;
      if (score === 4){
        console.log(`Red win at ${connect4[key][3].pos}`);
      } if (score === -4){
        console.log(`Blue win at ${connect4[key][3].pos}`)
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][4].piece;
      if (score === 4){
        console.log(`Red win at ${connect4[key][4].pos}`);
      } if (score === -4){
        console.log(`Blue win at ${connect4[key][4].pos}`)
      }
    }
    score = 0;
    for (let j = 0; j < 7; j++) { //vertical check starts here
      score += connect4[key][5].piece;
      if (score === 4){
        console.log(`Red win at ${connect4[key][5].pos}`);
      } if (score === -4){
        console.log(`Blue win at ${connect4[key][5].pos}`)
      }
    }
    }
  }
  // left to right diaganal//

  //1c , 2d, 3e, 4f,
  let oneC = 0
  oneC += connect4.row1[2].piece
  oneC += connect4.row2[3].piece
  oneC += connect4.row3[4].piece
  oneC += connect4.row4[5].piece
  if (oneC === 4){
    return console.log(`Red win`);
  } if (oneC === -4){
    return console.log(`Blue win`)
  }

  //1b, 2c, 3d, 4e, 5f
  let oneB = 0
  oneB += connect4.row1[1].piece
  oneB += connect4.row2[2].piece
  oneB += connect4.row3[3].piece
  oneB += connect4.row4[4].piece
  oneB += connect4.row5[5].piece
  if (oneB === 4){
    return console.log(`Red win`);
  } if (oneB === -4){
    return console.log(`Blue win`)
  }

  //1a 2b, 3c, 4d, 5e, 6f
  let oneA = 0
  oneA += connect4.row1[0].piece
  oneA += connect4.row2[1].piece
  oneA += connect4.row3[2].piece
  oneA += connect4.row4[3].piece
  oneA += connect4.row5[4].piece
  oneA += connect4.row6[5].piece
  if (oneA === 4){
    return console.log(`Red win`);
  } if (oneA === -4){
    return console.log(`Blue win`)
  }

  //2a, 3b, 4c, 5d, 6e, 7f
  let twoA = 0
  twoA += connect4.row2[0].piece
  twoA += connect4.row3[1].piece
  twoA += connect4.row4[2].piece
  twoA += connect4.row5[3].piece
  twoA += connect4.row6[4].piece
  twoA += connect4.row7[5].piece
  if (twoA === 4){
    return console.log(`Red win`);
  } if (twoA === -4){
    return console.log(`Blue win`)
  }

  //3a, 4b, 5c, 6d, 7f
  let threeA = 0
  threeA += connect4.row3[0].piece
  threeA += connect4.row4[1].piece
  threeA += connect4.row5[2].piece
  threeA += connect4.row6[3].piece
  threeA += connect4.row7[4].piece
  if (threeA === 4){
    return console.log(`Red win`);
  } if (threeA === -4){
    return console.log(`Blue win`)
  }

  //4a, 5b, 6c, 7d
  let fourA = 0
  fourA += connect4.row4[0].piece
  fourA += connect4.row4[1].piece
  fourA += connect4.row4[2].piece
  fourA += connect4.row4[3].piece
  if (fourA === 4){
    return console.log(`Red win`);
  } if (fourA === -4){
    return console.log(`Blue win`)
  }

  // right to left //

  //7c, 6d, 5e, 4f
  let sevenC = 0
  sevenC += connect4.row7[2].piece
  sevenC += connect4.row6[3].piece
  sevenC += connect4.row5[4].piece
  sevenC += connect4.row4[5].piece
  if (sevenC === 4){
    return console.log(`Red win`);
  } if (sevenC === -4){
    return console.log(`Blue win`)
  }

  //7b, 6c, 5d, 4e, 3f
  let sevenB = 0
  sevenB += connect4.row7[1].piece
  sevenB += connect4.row6[2].piece
  sevenB += connect4.row5[3].piece
  sevenB += connect4.row4[4].piece
  sevenB += connect4.row3[5].piece
  if (sevenB === 4){
    return console.log(`Red win`);
  } if (sevenB === -4){
    return console.log(`Blue win`)
  }

  //7a, 6b, 5c, 4d, 3e, 2f
  let sevenA = 0
  sevenA += connect4.row7[0].piece
  sevenA += connect4.row6[1].piece
  sevenA += connect4.row5[2].piece
  sevenA += connect4.row4[3].piece
  sevenA += connect4.row3[4].piece
  sevenA += connect4.row2[5].piece
  if (sevenA === 4){
    return console.log(`Red win`);
  } if (sevenA === -4){
    return console.log(`Blue win`)
  }

  //6a, 5b, 4c, 3d, 2e, 1f
  let sixA = 0
  sixA += connect4.row6[0].piece
  sixA += connect4.row5[1].piece
  sixA += connect4.row4[2].piece
  sixA += connect4.row3[3].piece
  sixA += connect4.row2[4].piece
  sixA += connect4.row1[5].piece
  if (sixA === 4){
    return console.log(`Red win`);
  } if (sixA === -4){
    return console.log(`Blue win`)
  }

  //5a, 4b, 3c, 2d, 1e,
  let fiveA = 0
  fiveA += connect4.row5[0].piece
  fiveA += connect4.row4[1].piece
  fiveA += connect4.row3[2].piece
  fiveA += connect4.row2[3].piece
  fiveA += connect4.row1[4].piece
  if (fiveA === 4){
    return console.log(`Red win`);
  } if (fiveA === -4){
    return console.log(`Blue win`)
  }

  //4a, 3b, 2c, 1d
  let fourAl = 0
  fourAl += connect4.row4[0].piece
  fourAl += connect4.row3[1].piece
  fourAl += connect4.row2[2].piece
  fourAl += connect4.row1[3].piece
  if (fourAl === 4){
    return console.log(`Red win`);
  } if (fourAl === -4){
    return console.log(`Blue win`)
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
