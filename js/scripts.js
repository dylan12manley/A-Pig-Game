function Game(player1, player2) {
  this.player1 = [],
  this.player2 = [],
  this.currentId = 0;
}

Game.prototype.assignGameId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Player(roll, turnScore, totalScore) {
  this.roll = roll,
  this.turnScore = turnScore,
  this.totalScore = totalScore
  this.currentId = 0;
}

Player.prototype.assignPlayerId = function() {
  this.currentId += 1;
  return this.currentId;
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

var player = new Player(0, 0, 0);

$(document).ready(function() {

  $('#start').click(function(event) {
    event.preventDefault();
    var player1Name = $('input#player1Input').val();
    var player2Name = $('input#player2Input').val();
    var game = new Game(player1Name, player2Name);
    $('#player1Name').text(player1Name);
    $('#player2Name').text(player2Name);
  })

  $('#rollBtn').click(function(event) {
    var roll = 0;
    player.diceRoll(roll);
    $('#player1Roll').fadeOut(function() {
      $(this).text(player.roll).fadeIn();
    });
    $('#player1TurnScore').text(player.turnScore);
  })

  $('#holdBtn').click(function(event) {
    event.preventDefault();
    console.log(player.roll, player.turnScore);
    var totalScore = 0;
    player.addTotalScore(totalScore);
    console.log(player.totalScore);
    $('#player1TotalScore').text(player.totalScore);
  })
})
