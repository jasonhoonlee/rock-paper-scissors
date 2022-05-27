
//queries
const form = document.querySelector('form')
const playersWeapons = document.querySelector('.weapon')
const roundWinner = document.querySelector('.round-result')
const roundCount = document.querySelector('.round-count')


let round = 1;
let compScore = 0;
let userScore = 0;


//get input value and pass through function
form.addEventListener('click', e => {
  const userWeapon = e.target.value;
  form.reset();
  //generate comp weapon
  const computerWeapon = generateComputerWeapon();
  //display weapons for both user and comp
  displayWeaponUI(userWeapon, computerWeapon);
  //judge winner
  const roundResult = judgeRoundWinner(userWeapon, computerWeapon)
  //display winner of round
  displayRoundResult(roundResult);
  //update round
  updateRound();
  //update scores
  updateScore(roundResult)
})


//get randomly generated computer weapon
function generateComputerWeapon() {
  const weapons = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * weapons.length)
  return weapons[random]
}


function displayWeaponUI(userWeapon, computerWeapon) {
  //query both players' weapons image sections
  const userWeaponImage = document.querySelector('.user-weapon');
  const computerWeaponImage = document.querySelector('.computer-weapon');
  //display images for both players
  userWeaponImage.innerHTML = `<img src="images/${userWeapon}.png">`
  computerWeaponImage.innerHTML = `<img src="images/${computerWeapon}.png">`
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
      return 'win';
    case 'paper' && 'rock':
      return 'loss';
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
  roundCount.textContent = round++;
}

function updateScore(result) {
  if (result === 'draw') {
    return '';
  } else if (result === 'win') {
    const userTotal = document.querySelector('.user-total-score');
    userTotal.textContent = userScore++;
  } else {
    const compTotal = document.querySelector('.computer-total-score');
    compTotal.textContent = compScore++;
  }
}

updateScore('win')