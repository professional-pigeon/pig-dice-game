// business logic

let storedRoll = 0
let playerTotal = 0
let diceRoll = 0
let turn = 0

function rollDice() {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  storedRoll = diceRoll + storedRoll
  hide(diceRoll)
}

function hide(diceRoll){
  if(diceRoll === 1){
    storedRoll = 0
  }
}

function hold() {
	playerTotal = playerTotal + storedRoll
  storedRoll = 0
}

function Player(name, diceRoll, playerTotal) {
  this.name = name
  this.diceRoll = diceRoll
  this.playerTotal = playerTotal
}

let player1 = new Player("Humans", diceRoll, playerTotal)
let player2 = new Player("Pigs", diceRoll, playerTotal)



$(document).ready(function() {
  $("#totalPlayer1").html(player1.playerTotal)
  $("#namePlayer1").html(player1.name)
  $("#totalPlayer2").html(player2.playerTotal)
  $("#namePlayer2").html(player2.name)

  if (turn === 0) {
    $("button#hold").click(function(){
      hold();
      $("#totalPlayer1").html(playerTotal);
      turn = 1
  });
    
    $("button#roll").click(function(){
      rollDice();
      if (diceRoll === 1) {
        turn = 1
      }
    $("#rollPlayer1").html(diceRoll);
  });

  } else if (turn === 1) {
    $("button#hold").click(function(){
      hold();
      $("#totalPlayer2").html(player2.playerTotal);
      if (diceRoll === 1) {
        turn = 0
      }
    });
    $("button#roll").click(function(){
      rollDice();
      console.log(diceRoll)
      $("#rollPlayer2").html(diceRoll);
      turn = 0
    });
  }

});