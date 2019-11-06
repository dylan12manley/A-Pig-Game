function Game(player1, player2) {
  this.player1 = player1,
  this.player2 = player2
}

function Player(roll, turnScore, totalScore) {
  this.roll = roll,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}

var thisRoll = 0;
var thisTurnScore = 0;
var totalScore = 0;



Player.prototype.diceRoll = function() {
    this.roll = Math.floor(Math.random() * 6) + 1;
    if (this.roll === 1) {
      this.turnScore = 0;
    } else {
      this.turnScore += this.roll;
  }
  return ((thisRoll = this.roll), (thisTurnScore = this.turnScore));
}


function addTotalScore() {
  totalScore = totalScore + turnScore;
  // $("#player2Btns").toggle();
  // $("#player1Btns").toggle();
  // return totalScore;
}
var player = new Player(0, 0, 0);

$(document).ready(function() {
  $('#start').click(function(event) {
    event.preventDefault();
    var player1Name = $('input#player1Input').val();
    var player2Name = $('input#player2Input').val();
    var game = new Game(player1Name, player2Name);


  })
  $('#rollBtn').click(function(event) {
    var roll = 0;
    player.diceRoll(roll);
    $('#player1Roll').text(thisRoll);
    $('#player1TurnScore').text(thisTurnScore);
  })
  console.log(player.roll);
  $('#holdBtn').click(function(event) {
    addTotalScore();
    $('#player1TotalScore').text(totalScore);
  })
})
