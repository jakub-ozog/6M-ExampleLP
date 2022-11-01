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


const timer = () => {
    const timerDate = new Date('Dec 17, 2022 15:30:00').getTime();
    const currentDate = new Date().getTime();
    const difference = timerDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(difference / day);
    const textHour = Math.floor((difference % day) / hour);
    const textMinute = Math.floor((difference % hour) / minute);
    const textSecond = Math.floor((difference % minute) / second);

    document.querySelector('.timer__day').textContent = textDay;
    document.querySelector('.timer__hour').textContent = textHour;
    document.querySelector('.timer__minute').textContent = textMinute;
    document.querySelector('.timer__second').textContent = textSecond;

};

setInterval(timer, 1000);