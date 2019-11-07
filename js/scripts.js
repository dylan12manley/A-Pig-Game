function Game(player1, player2) {
  this.player1 = player1,
  this.player2 = player2
}

function Player(roll, turnScore, totalScore) {
  this.roll = roll,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}

Player.prototype.diceRoll = function() {
    this.roll = Math.floor(Math.random() * 6) + 1;
    if (this.roll === 1) {
      this.turnScore = 0;
    } else {
      this.turnScore += this.roll;
  }

  return player.roll, player.turnScore;
}

Player.prototype.addTotalScore = function(){
  console.log(player.roll);
  player.totalScore = (player.roll + player.turnScore);
  return player.totalScore
}



// function addTotalScore() {
//   totalScore = totalScore + turnScore;
  // $("#player2Btns").toggle();
  // $("#player1Btns").toggle();
// }
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
    console.log(player.roll, player.turnScore);
    $('#player1Roll').text(player.roll);
    $('#player1TurnScore').text(player.turnScore);
  })
  $('#holdBtn').click(function(event) {
    event.preventDefault();
    var totalScore = 0;
    player.addTotalScore(totalScore);
    console.log(player.totalScore);
    $('#player1TotalScore').text(this.totalScore);
  })
})
