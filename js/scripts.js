function Game(player1, player2) {
  this.player1 = [],
  this.player2 = []
}

Game.prototype.addPlayer = function(contact) {
  player.id = this.assignId();
  this.contacts.push(contact);
}

function Player(roll, turnScore, totalScore, currentId) {
  this.roll = roll,
  this.turnScore = turnScore,
  this.totalScore = totalScore,
  this.currentId = 0
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
  if (this.roll > 1) {
    player.totalScore = (player.turnScore + player.totalScore);
    return player.totalScore, player.turnScore = 0
  } else {
    return player.totalScore
    }
}

var player = new Player(0, 0, 0, 0);

$(document).ready(function() {

  $('#start').click(function(event) {
    event.preventDefault();
    var player1Name = $('input#player1Input').val();
    var player2Name = $('input#player2Input').val();
    if (player1Name === "") {
      $('#player1Name').text("Player 1")
    } else {
    $('#player1Name').text(player1Name);
      }
    if (player1Name === "") {
      $('#player2Name').text("Player 2")
    } else {
      $('#player2Name').text(player2Name);
      }
    player.assignPlayerId(player)
    var game = new Game([], [], 0);
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
    var totalScore = 0;
    player.addTotalScore(totalScore);
    console.log(player.id);
    $('#player1TotalScore').text(player.totalScore);
  })
})
