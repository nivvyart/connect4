console.log("hi");



const connect4 = {
//              |--> connect4.row7[0].pos
//              |      |--> connect4.row7[0].peice
  row7: [{pos:'7a', peice: 1}, {pos:'7b', peice: 1}, {pos:'7c', peice: 1}, {pos:'7d', peice: 1}, {pos:'7e', peice: 1}, {pos:'7f', peice: null}],
  row6: [{pos:'6a', peice: 1}, {pos:'6b', peice: 1}, {pos:'6c', peice: 1}, {pos:'6d', peice: 1}, {pos:'6e', peice: 1}, {pos:'6f', peice: 1}],
  row5: [{pos:'5a', peice: 1}, {pos:'5b', peice: 1}, {pos:'5c', peice: 1}, {pos:'5d', peice: 1}, {pos:'5e', peice: 1}, {pos:'5f', peice: 1}],
  row4: [{pos:'4a', peice: 1}, {pos:'4b', peice: 1}, {pos:'4c', peice: 1}, {pos:'4d', peice: 1}, {pos:'4e', peice: 1}, {pos:'4f', peice: 1}],
  row3: [{pos:'3a', peice: 1}, {pos:'3b', peice: 1}, {pos:'3c', peice: 1}, {pos:'3d', peice: 1}, {pos:'3e', peice: 1}, {pos:'3f', peice: 1}],
  row2: [{pos:'2a', peice: 1}, {pos:'2b', peice: 1}, {pos:'2c', peice: 1}, {pos:'2d', peice: 1}, {pos:'2e', peice: 1}, {pos:'2f', peice: 1}],
  row1: [{pos:'1a', peice: 1}, {pos:'1b', peice: null}, {pos:'1c', peice: null}, {pos:'1d', peice: null}, {pos:'1e', peice: null}, {pos:'1f', peice: null}],
}

// red = +1
// blue = -1
//null = empty space
//create loop for checking this

playerRed = true; // red goes first easy to change this with a button that changes this to false.
//token is "dropped" into array row,
const row1Move = function() {
  for (let i = 0; i < 7; i++) {
    if (connect4.row1[i].peice === null && playerRed === true) {
      connect4.row1[i].peice = 1
      playerRed = false;
      return
    }
    if (connect4.row1[i].peice === null && playerRed === false) {
      connect4.row1[i].peice = -1
      playerRed = true;
      return
    }
  }
}

//stuck on this, the score is updating appropriately now but i can get the jloop going through the rows, ie row 1-7
//win contions
//row 1 - 7, abcd, bcde, cdef
score = 0;
const winTest = function() {
  for (let j = 1; j < 7; j++) {
    console.log(`j loop ${[j]}`);
    for (let i = 0; i < 4 ; i++) {
      score += connect4.row6[i].peice; // i need J variable working here instead of 6, to check the whole board
    if (score === 4){
      return console.log('Red win');
    } if (score === -4){
      return console.log('Blue win')
      }
    }

    for (let i = 1; i < 5 ; i++) {

      console.log('1-5');
    }

    for (let i = 2; i < 6 ; i++) {
      // console.log(connect4.row7[i].pos);
      // console.log(connect4.row7[i].peice);
      console.log('2-6');
    }

    for (let i = 3; i < 7 ; i++) {
      // console.log(connect4.row7[i].pos);
      // console.log(connect4.row7[i].peice);
      console.log('3-7');
    }
  }
}

//index 0 - 6 of arrays - 1234, 2345, 3456, 4567 -- only 4 posibilities per row
//            |---> this 1 needs to be the variable,
//              |--> index location,
//connect4.row1[0].peice


//diaganal wins both values accending
// 1a, 2b, 3c, 4d
//max height is c -> f
