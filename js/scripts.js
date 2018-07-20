//Business Logic
function Player(name) {
  this.name = name;
  this.score = 0;
}

Player.prototype.increaseScore = function(amount) {
  this.score += amount;
}





// User Interface Logic
$(document).ready(function() {
  $("button#start").click(function(event){
      playerOne = new Player(true);
      playerTwo =  new Player(false);
      $(".player-console").show();
      $(".start-menu").hide();
};

   var playerOneName = $(".playerOneName").val();
   $("#playerOneName").text(playerOneName);

   var playerTwoName = $(".playerTwoName").val();
   $("#playerTwoName").text(playerTwoName);
