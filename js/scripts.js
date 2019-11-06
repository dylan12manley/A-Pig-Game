function Players(player1, player2) {
  this.player1 = player1,
  this.player2 = player2
}

function Player(currentRoll, turnScore, totalScore) {
  this.currentRoll = currentRoll,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}

var dice = 0;

function diceRoll() {
  Math.floor((math.random() * 6) + 1);
  dice = diceRoll();
  console.log(dice);
}

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
  })
})
