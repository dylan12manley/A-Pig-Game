function Game() {
  this.players = [],
  this.currentId = 0
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player1);
  this.players.push(player2);
}

function Player1(uniqueId, roll, turnScore, totalScore) {
  this.uniqueId = uniqueId,
  this.roll = roll,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}

function Player2(uniqueId, roll, turnScore, totalScore) {
  this.uniqueId = uniqueId,
  this.roll = roll,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}

Player1.prototype.diceRoll = function() {
  this.roll = Math.floor(Math.random() * 6) + 1;
    if (this.roll === 1) {
      this.turnScore = 0;
    } else {
      this.turnScore += this.roll;
      }
      console.log(player1.roll, player1.turnScore);
  return [player1.roll, player1.turnScore];

}

Player1.prototype.addTotalScore = function(){
  if (this.roll > 1) {
    player1.totalScore = (player1.turnScore + player1.totalScore);
    return player1.totalScore, player1.turnScore = 0
  } else {
    if (this.totalScore >= 100) {
      alert('Game Over. You Win!')
    }
    return player1.totalScore
    }
}

Player2.prototype.diceRoll = function() {
  this.roll = Math.floor(Math.random() * 6) + 1;
    if (this.roll === 1) {
      this.turnScore = 0;
    } else {
      this.turnScore += this.roll;
  }

  return [player2.roll, player2.turnScore];
}

Player2.prototype.addTotalScore = function(){
  if (this.roll > 1) {
    player2.totalScore = (player2.turnScore + player2.totalScore);
    return player2.totalScore, player2.turnScore = 0
  } else {
    if (this.totalScore >= 100) {
      alert('Game Over. You Win!')
    }
    return player2.totalScore
    }
}

var player1 = new Player1(1, 0, 0, 0);
var player2 = new Player2(2, 0, 0, 0);

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
      var game = new Game([], [], 0);
    game.addPlayer(player1)
    game.addPlayer(player2)
  })

  $('#player1RollButton').click(function(event) {
    var roll = 0;
    player1.diceRoll(roll);
    $('#player1Roll').fadeOut(function() {
      $(this).text(player1.roll).fadeIn();
    });
    if (player1.roll === 1) {
      $('#player2Buttons').toggle();
      $('#player1Buttons').toggle();
      alert('You rolled a 1! Next player')
    }
    $('#player1TurnScore').text(player1.turnScore);
  })

  $('#player1HoldButton').click(function(event) {
    event.preventDefault();
    var totalScore = 0;
    player1.addTotalScore(totalScore);
    $('#player2Buttons').toggle();
    $('#player1Buttons').toggle();
    $('#player1TotalScore').text(player1.totalScore);

  })
  $('#player2RollButton').click(function(event) {
    var roll = 0;
    player2.diceRoll(roll);
    $('#player2Roll').fadeOut(function() {
      $(this).text(player2.roll).fadeIn();
    });
    if (player2.roll === 1) {
      $('#player2Buttons').toggle();
      $('#player1Buttons').toggle();
      alert('You rolled a 1! Next player')
    }
    $('#player2TurnScore').text(player2.turnScore);
  })

  $('#player2HoldButton').click(function(event) {
    event.preventDefault();
    var totalScore = 0;
    player2.addTotalScore(totalScore);
    $('#player1Buttons').toggle();
    $('#player2Buttons').toggle();
    $('#player2TotalScore').text(player2.totalScore);

  })
})
