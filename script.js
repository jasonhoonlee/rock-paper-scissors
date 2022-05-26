
//queries
const form = document.querySelector('form')
const playersWeapons = document.querySelector('.weapon')






//get input value and pass through function
form.addEventListener('click', e => {
  const userWeapon = e.target.value;
  displayWeaponUI(userWeapon)
  form.reset();
})


//get randomly generated computer weapon
function generateComputerWeapon() {
  const weapons = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * weapons.length)
  return weapons[random]
}


function displayWeaponUI(userWeapon) {
  //query both players' weapons image sections
  const userWeaponImage = document.querySelector('.user-weapon');
  const computerWeaponImage = document.querySelector('.computer-weapon');
  //call function to get computer weapon
  const computerWeapon = generateComputerWeapon()
  //display images for both players
  userWeaponImage.innerHTML = `<img src="images/${userWeapon}.png">`
  computerWeaponImage.innerHTML = `<img src="images/${computerWeapon}.png">`
}

