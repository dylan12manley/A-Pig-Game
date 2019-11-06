// function Players(player1, player2) {
//   this.player1 = player1,
//   this.player2 = player2
// }
//
// function Player(currentRoll, turnScore, totalScore) {
//   this.currentRoll = currentRoll,
//   this.turnScore = turnScore,
//   this.totalScore = totalScore
// }
//
var die = 0;
var turnScore = 0;

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


$(document).ready(function() {
  $('#rollBtn').click(function(event) {
    event.preventDefault();
    dieRoll();
    $('#player1Roll').text(die);
    addTurnScore();
    $('#player1TurnScore').text(turnScore);
    console.log(die);
  })
  // $('#rollBtn').click(function(event) {
  //   event.preventDefault();
  //   var roll = dieRoll();
  //   $('#player2Roll').text(roll);
  // })
})
