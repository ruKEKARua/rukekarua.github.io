const burgerMenu = document.querySelector('.burder_svg');
const burgerCloseButton = document.querySelector('.cross_svg');
const navigation = document.querySelector('.navigation ');

const WIDTH = window.innerWidth

const openBurger = () => {

    navigation.style.display = 'block';

    

}

if (WIDTH == 1024) {

    burgerMenu.addEventListener('click', openBurger)

}