

$('#row1').mouseenter( function() {$(this).css('background-color', 'yellow');}).mouseleave( function () {$(this).css('background-color', 'white')});
$('#row1').on('click', function(){
  const position = row1Move();
  if (playerBlue) {
    $(`#${position}`).addClass('bluePiece');
  } else {
    $(`#${position}`).addClass('redPiece');
  }
})

$('#row2').mouseenter( function() {$(this).css('background-color', 'yellow');}).mouseleave( function () {$(this).css('background-color', 'white')});
$('#row2').on('click', function(){
  const position = row2Move();
  if (playerBlue) {
    $(`#${position}`).addClass('bluePiece');
  } else {
    $(`#${position}`).addClass('redPiece');
  }
});

$('#row3').mouseenter( function() {$(this).css('background-color', 'yellow');}).mouseleave( function () {$(this).css('background-color', 'white')});
$('#row3').on('click', function(){
  const position = row3Move();
  if (playerBlue) {
    $(`#${position}`).addClass('bluePiece');
  } else {
    $(`#${position}`).addClass('redPiece');
  }
});


$('#row4').mouseenter( function() {$(this).css('background-color', 'yellow');}).mouseleave( function () {$(this).css('background-color', 'white')});
$('#row4').on('click', function(){
  const position = row4Move();
  if (playerBlue) {
    $(`#${position}`).addClass('bluePiece');
  } else {
    $(`#${position}`).addClass('redPiece');
  }
});


$('#row5').mouseenter( function() {$(this).css('background-color', 'yellow');}).mouseleave( function () {$(this).css('background-color', 'white')});
$('#row5').on('click', function(){
  const position = row5Move();
  if (playerBlue) {
    $(`#${position}`).addClass('bluePiece');
  } else {
    $(`#${position}`).addClass('redPiece');
  }
});


$('#row6').mouseenter( function() {$(this).css('background-color', 'yellow');}).mouseleave( function () {$(this).css('background-color', 'white')});
$('#row6').on('click', function(){
  const position = row6Move();
  if (playerBlue) {
    $(`#${position}`).addClass('bluePiece');
  } else {
    $(`#${position}`).addClass('redPiece');
  }
});


$('#row7').mouseenter( function() {$(this).css('background-color', 'yellow');}).mouseleave( function () {$(this).css('background-color', 'white')});
$('#row7').on('click', function(){
  const position = row7Move();
  if (playerBlue) {
    $(`#${position}`).addClass('bluePiece');
  } else {
    $(`#${position}`).addClass('redPiece');
  }
});
