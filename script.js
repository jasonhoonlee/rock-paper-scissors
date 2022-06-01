
//queries
const form = document.querySelector('form');
const playersWeapons = document.querySelector('.weapon');
const roundWinner = document.querySelector('.round-result');
const roundCount = document.querySelector('.round-count');
const continueGame = document.querySelector('.continue');
const nextRoundBtn = document.querySelector('.next-round');
const endGameBtn = document.querySelector('.end-game');
const gameWinner = document.querySelector('.congratulate-winner');

let round = 1;
let compScore = 0;
let userScore = 0;

//get input value and pass through function
form.addEventListener('click', e => {
  if (e.target.tagName === 'INPUT') {
    const userWeapon = e.target.id;
    form.reset();
    //generate comp weapon
    const computerWeapon = generateComputerWeapon();
    //display weapons for both user and comp
    displayWeaponUI(userWeapon, computerWeapon);
    //judge winner
    const roundResult = judgeRoundWinner(userWeapon, computerWeapon);
    //display winner of round
    displayRoundResult(roundResult);
    //update scores
    updateScore(roundResult);
    //ask user to continue
    askUserToContinue();
    //if score of 3 is reached, congratulate winner
    if ((userScore === 3) || (compScore === 3)) {
      congratulateWinner();
    }
  }
  return;
});


nextRoundBtn.addEventListener('click', e => {
  updateRound();
  continueGame.classList.add('hide');
  const userWeapon = document.querySelector('.user-weapon');
  const compWeapon = document.querySelector('.computer-weapon');
  userWeapon.innerHTML = '';
  compWeapon.innerHTML = '';
  roundWinner.innerHTML = '';
  document.querySelector('#rock').disabled = false;
  document.querySelector('#paper').disabled = false;
  document.querySelector('#scissors').disabled = false;

})



endGameBtn.addEventListener('click', e => {
  const gameOver = document.querySelector('.game-over')
  gameOver.classList.remove('hide')
  continueGame.classList.add('hide')
})




//get randomly generated computer weapon
function generateComputerWeapon() {
  const weapons = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * weapons.length);
  return weapons[random]
}


function displayWeaponUI(userWeapon, computerWeapon) {
  //query both players' weapons image sections
  const userWeaponImage = document.querySelector('.user-weapon');
  const computerWeaponImage = document.querySelector('.computer-weapon');
  //display images for both players
  userWeaponImage.innerHTML = `<img src="./images/${userWeapon}.png">`;
  computerWeaponImage.innerHTML = `<img src="./images/${computerWeapon}.png">`;
}


function askUserToContinue() {
  if (continueGame.classList.contains('hide')) {
    continueGame.classList.remove('hide');
  }
  document.querySelector('#rock').disabled = true;
  document.querySelector('#paper').disabled = true;
  document.querySelector('#scissors').disabled = true;
}


function judgeRoundWinner(user, comp) {
  if (user === comp) {
    return 'draw'
  }
  switch(user, comp) {
    case 'rock' && 'paper':
      return 'loss';
    case 'rock' && 'scissors':
      return 'win';
    case 'paper' && 'scissors':
      return 'loss';
    case 'paper' && 'rock':
      return 'win';
    case 'scissors' && 'rock':
      return 'loss';
    case 'scissors' && 'paper':
      return 'win';
  }
}


function displayRoundResult(result) {
  if (result === 'loss') {
    roundWinner.innerHTML = 'YOU LOSE THIS ROUND.';
  } else if (result === 'win') {
    roundWinner.innerHTML = 'YOU WIN THIS ROUND!';
  } else {
    roundWinner.innerHTML = 'DRAW!';
  }
}


function updateRound() {
  round += 1
  roundCount.textContent = round;
}


function updateScore(result) {
  if (result === 'draw') {
    return '';
  } else if (result === 'win') {
    const userTotal = document.querySelector('.user-total-score');
    userScore++;
    userTotal.textContent = userScore;
  } else {
    compScore++
    const compTotal = document.querySelector('.computer-total-score');
    compTotal.textContent = compScore;
  }
}


function congratulateWinner() {
  const winner = (userScore === 3) ? 'User' : 'Computer';
  continueGame.classList.add('hide');
  roundWinner.classList.add('hide');
  gameWinner.innerHTML = `${winner} wins!`
}