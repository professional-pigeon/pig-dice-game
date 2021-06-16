//business logic

let storedRoll = 0
let playerTotal = 0
let diceRoll = 0
let turn = 0

//Player 1:
function rollDice1() {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  storedRoll = diceRoll + storedRoll
  hide1(diceRoll)
}
function hide1(diceRoll){
  if(diceRoll === 1){
    storedRoll = 0
    turn = 1
    $("#turn").html(player2.name)
  }
}
function hold1() {
	player1.playerTotal = player1.playerTotal + storedRoll
  storedRoll = 0
  turn = 1
}

//Player 2:
function rollDice2() {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  storedRoll = diceRoll + storedRoll
  hide2(diceRoll)
}
function hide2(diceRoll){
  if(diceRoll === 1){
    storedRoll = 0
    turn = 0
    $("#turn").html(player1.name)
  }
}
function hold2() {
	player2.playerTotal = player2.playerTotal + storedRoll
  storedRoll = 0
  turn = 0
}

function Player(name, diceRoll, playerTotal) {
  this.name = name
  this.diceRoll = diceRoll
  this.playerTotal = playerTotal
}

let player1 = new Player("Humans", diceRoll, playerTotal)
let player2 = new Player("Pigs", diceRoll, playerTotal)



$(document).ready(function() {
  $("#playerTotal1").html(player1.playerTotal)
  $("#namePlayer1").html(player1.name)
  $("#playerTotal2").html(player2.playerTotal)
  $("#namePlayer2").html(player2.name)
  $("#storedRoll").html(storedRoll)
  $("#turn").html(player1.name)


  $("button#hold").click(function() {
    if (turn === 0) {
      hold1();
      $("#playerTotal1").html(player1.playerTotal);
      if (player1.playerTotal >= 100) {
        alert(player1.name + " wins")
        } else {
          turn = 1;
          $("#turn").html(player2.name)
        }
      
      } else {
        hold2();
        $("#playerTotal2").html(player2.playerTotal);
        if (player2.playerTotal >= 100) {
          alert(player2.name + " wins")
        } else {
          turn = 0;
          $("#turn").html(player1.name)
        }
      }
  });
    
  $("button#roll").click(function(){
    if (turn === 0) {
      rollDice1();
      $("#rollPlayer1").html(diceRoll);
      $("#storedRoll").html(storedRoll);
    } else {
      rollDice2();
      $("#rollPlayer2").html(diceRoll);
      $("#storedRoll2").html(storedRoll);
    }
  });
});

// combined functions

/* 
Player.prototype.hold() = function() {
  this.playerTotal = this.playerTotal + storedRoll
  storedRoll = 0
  turn = 1
}

function Players(player) {
  this.Group = player.name
}

function Player(name, diceRoll, playerTotal) {
  this.name = name
  this.diceRoll = diceRoll
  this.playerTotal = playerTotal
}

let player1 = new Player("Humans", diceRoll, playerTotal)
let player2 = new Player("Pigs", diceRoll, playerTotal)
*/
