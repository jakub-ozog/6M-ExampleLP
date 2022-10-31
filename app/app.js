const hamburgerNav = document.querySelector('.hamburgerMenu__mainMenuToggle');
const toggleNav = document.querySelector('.hamburgerMenu__menuCloseBtn');
const menuContainer = document.querySelector('.hamburgerMenu__menuContainer')

hamburgerNav.addEventListener('click', () => {
menuContainer.classList.toggle('-show')
    console.log('click')
})

toggleNav.addEventListener('click', () => {
    menuContainer.classList.toggle('-show')
})
