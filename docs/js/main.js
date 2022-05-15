const menuButton = document.querySelector('.menuBlock');
const headerListCars = document.querySelector('.cars');
const headerUser = document.querySelector('.user');
const body = document.body
menuButton.addEventListener('click',()=>{
    headerListCars.classList.toggle('cars--active');
    headerUser.classList.toggle('user--active');
    menuButton.classList.toggle('menuBlock--active')
    body.classList.toggle('body--active')
})

//функція скролу при натиску на стрілку
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1);
    console.log(blockID)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}