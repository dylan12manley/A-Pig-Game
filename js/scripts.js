//Back-End Logic//

function Game() {
  this.players = [],
  this.currentId = 0
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player1);
  this.players.push(player2);
}

function Player(uniqueId, roll, turnScore, totalScore) {
  this.uniqueId = uniqueId,
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
      console.log(player1.roll, player1.turnScore);
  return [player1.roll, player1.turnScore, player2.roll, player2.turnScore];
}

Player.prototype.addTotalScore = function(){
  if (this.roll > 1) {
    player1.totalScore = (player1.turnScore + player1.totalScore);
    player2.totalScore = (player2.turnScore + player2.totalScore);
    if (this.totalScore >= 20) {
      alert('Game Over. You Win!')
    }
    return [player1.totalScore, player1.turnScore = 0, player2.totalScore, player2.turnScore = 0]
  } else {
    return [player1.totalScore, player2.totalScore]
    }
}

//Front-End Logic//

var player1 = new Player(1, 0, 0, 0);
var player2 = new Player(2, 0, 0, 0);

$(document).ready(function() {
  $('#start').click(function(event) {
    event.preventDefault();
    var player1Name = $('input#player1Input').val();
    var player2Name = $('input#player2Input').val();
    if (player1Name === "") {
      $('#player1Name').text("Player 1");
    } else {
    $('#player1Name').text(player1Name);
      }
    if (player2Name === "") {
      $('#player2Name').text("Player 2");
    } else {
      $('#player2Name').text(player2Name);
      }
      var game = new Game([], [], 0);
    $('#player1Go').show();
    game.addPlayer(player1);
    game.addPlayer(player2);
    player1.totalScore = 0
    $('#player1TotalScore').text(player1.totalScore);
    player2.totalScore = 0
    $('#player2TotalScore').text(player2.totalScore);
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
      $('#youRolled1').show();
      $('#player1Go').hide();
    } else {
      $('#youRolled1').hide();
    }
    $('#player1TurnScore').text(player1.turnScore);
  });

  $('#player1HoldButton').click(function(event) {
    event.preventDefault();
    var totalScore = 0;
    player1.addTotalScore(totalScore);
    $('#player2Buttons').toggle();
    $('#player1Buttons').toggle();
    $('#player1TotalScore').text(player1.totalScore);
    $('#player1Go').hide();
    $('#youRolled1').hide();
  });

  $('#player2RollButton').click(function(event) {
    var roll = 0;
    player2.diceRoll(roll);
    $('#youRolled1').hide();
    $('#player2Roll').fadeOut(function() {
      $(this).text(player2.roll).fadeIn();
    });
    if (player2.roll === 1) {
      $('#player2Buttons').toggle();
      $('#player1Buttons').toggle();
      $('#youRolled1').show();
      $('#player1Go').hide();
    } else {
      $('#youRolled1').hide();
    }
    $('#player2TurnScore').text(player2.turnScore);
  });

  $('#player2HoldButton').click(function(event) {
    event.preventDefault();
    var totalScore = 0;
    player2.addTotalScore(totalScore);
    $('#player1Buttons').toggle();
    $('#player2Buttons').toggle();
    $('#player2TotalScore').text(player2.totalScore);
    $('#player1Go').hide();
    $('#youRolled1').hide();
  });
});
