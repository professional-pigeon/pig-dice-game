<!-- Make a dice roller.
  define numbers on the dice: 1-6 -->

Describe: function rollDice()

test: "will return a random value between 1-6"
code: rollDice()
expected result: number between 1-6



store the roll value - check
  add the roll value to the stored value - check
  if a 1, we'll need to clear the value - check
    switch to next player
  if someone holds, we'll need to add to the "player total" - check
    switch to next player

Make players an object:
  Make a player 1
  Make a second player 2

notifcation for whose turn it is

Make roll and hold buttons

Display the stored and "player total" values

Let player know when they've won

reset the game


