//Business Logic
var player1 = "";
var player2 = "";

function Player(name, score, total) {
  this.name = name;
  this.score = 0;
  this.total = 0;
};

Player.prototype.increaseScore = function(amount) {
  this.score += amount;
};

// User Interface Logic
$(document).ready(function() {
      var player1 = new Player("Player1");
      var player2 = new Player("Player2");

      function myFunction() {
      var rollDice = Math.floor((Math.random() * 6) + 1);
      document.getElementById("demo").innerHTML = x;
  }


    };
