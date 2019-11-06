function Game(player1, player2) {
  this.player1 = player1,
  this.player2 = player2
}

var die = 0;
var turnScore = 0;
var totalScore = 0;

function dieRoll() {
die = Math.floor(Math.random() * 6) + 1;
}

function addTurnScore() {
  if (die === 1) {
    turnScore = 0;
  } else {
    turnScore = turnScore + die;
  }
}

function addTotalScore() {
  totalScore = totalScore + turnScore;
  // $("#player2Btns").toggle();
  // $("#player1Btns").toggle();
  // return totalScore;
}


$(document).ready(function() {

  $('#rollBtn').click(function(event) {
    event.preventDefault();
    dieRoll();
    $('#player1Roll').text(die);
    addTurnScore();
    $('#player1TurnScore').text(turnScore);
    console.log(die);
  })
  $('#holdBtn').click(function(event) {
    event.preventDefault();
    addTotalScore();
    $('#player1TotalScore').text(totalScore);
    console.log(totalScore);
  })
})
