const WIDTH = window.innerWidth
const burgerMenu = document.querySelector('.burder_svg');
const burgerCloseButton = document.querySelector('.cross_svg');
const navigation = document.querySelector('.navigation ');

const animationArrayForOpen = [

    {transform: "translateX(-380px)", opacity: '0'},
    {transform: "translateX(0px)", opacity: '1'}
    
];

const animationArrayForClose = [

    {transform: "translateX(0px)", opacity: '1'},
    {transform: "translateX(-380px)", opacity: '0'}
    
];

const animationArrayForBurger = [

    {opacity: '0'},
    {opacity: '1'}
    
];

const animationArrayForCross = [

    {opacity: '0'},
    {opacity: '1'}
    
];

const durationArray = {

    duration: 650,

}

const openBurger = () => {

    

    burgerMenu.style.display = 'none';
    burgerCloseButton.style.display = 'block';

    burgerMenu.animate(animationArrayForBurger, durationArray)
    burgerCloseButton.animate(animationArrayForCross, durationArray)

    navigation.animate(animationArrayForOpen, durationArray)

    navigation.style.transform = 'translateX(0px)';

}

const closeBurger = () => {
    
    burgerMenu.animate(animationArrayForBurger, durationArray)
    burgerCloseButton.animate(animationArrayForCross, durationArray)
    navigation.animate(animationArrayForClose, durationArray)

    navigation.style.transform = 'translateX(-380px)';

    burgerMenu.style.display = 'block';
    burgerCloseButton.style.display = 'none';

}

if (WIDTH == 1024) {

    burgerMenu.addEventListener('click', openBurger)

    burgerCloseButton.addEventListener('click', closeBurger)

}