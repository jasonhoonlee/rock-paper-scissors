
//queries
const form = document.querySelector('form')
const playersWeapons = document.querySelector('.weapon')






//get input value and pass through function
form.addEventListener('click', e => {
  const userWeapon = e.target.value;
  form.reset();
  //generate comp weapon
  const computerWeapon = generateComputerWeapon();
  //display weapons for both user and comp
  displayWeaponUI(userWeapon, computerWeapon);
  //judge winner
  const roundWinner = judgeRoundWinner(userWeapon, computerWeapon)
  //display winner of round
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
  const loss = 'YOU LOSE THIS ROUND!'
  const win = 'YOU WIN THIS ROUND!'
  if (user === comp) {
    return 'DRAW!'
  }
  switch(user, comp) {
    case 'rock' && 'paper':
      return loss;
    case 'rock' && 'scissors':
      return win;
    case 'paper' && 'scissors':
      return win;
    case 'paper' && 'rock':
      return loss;
    case 'scissors' && 'rock':
      return loss;
    case 'scissors' && 'paper':
      return win;
  }
}

