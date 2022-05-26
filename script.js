
//queries
const form = document.querySelector('form')
const playersWeapons = document.querySelector('.weapon')






//get input value and pass through function
form.addEventListener('click', e => {
  const userWeapon = e.target.value;
  console.log(userWeapon)
})


function displayWeapon(userWeapon) {
  //query both players' weapons image sections
  const userWeaponImage = playersWeapons.querySelector('.user-weapon');
  const computerWeaponImage = playersWeapons.querySelector('.computer-weapon');

  //call function to get computer weapon
  const computerWeapon;

  //display images for both players
  userWeaponImage.innerHTML = `<img src="images/${userWeapon}.png">`
  computerWeaponImage.innerHTML = `<img src="images/${computerWeapon}.png">`
}