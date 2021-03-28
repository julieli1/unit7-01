// connect the button to the random function
document.getElementById('button').addEventListener('click', randomizer)

document.getElementById('play-again').addEventListener('click', randomizer)

let randomNumber = 0
let userGuess = 0

function randomizer () {
  // get the number that user typed turned into a integer
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // generates a number from 1 to 6
  randomNumber = Math.round(Math.floor(Math.random() * 6) + 1)

  // compares userGuess and randomNumber
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'congrats, you got it!'
  } else if (userGuess >= randomNumber) {
    document.getElementById('answer').innerHTML = 'try lower'
  } else {
    document.getElementById('answer').innerHTML = 'try higher'
  }
}
