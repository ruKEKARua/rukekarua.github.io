<<<<<<< Updated upstream
=======
const welcomeBackgroundBlock = document.querySelector('.welcome_wrapper');
const pages = document.querySelectorAll('.page')

const pictureBlock = document.querySelector(".picture");
const imageBefore = document.querySelector('.image_before');
const slider = document.querySelector('.slider_block');

const pictureBlockParams = pictureBlock.getBoundingClientRect();
const maxDistanceForSlider = 700;
const minDistanceForSlider = -20;
const maxDistanceForImage = 700;
const minDistanceForImage = 0;


const changeWelcomeImage = (value) => {

    let numberOfPage = document.querySelector('#changable_number');
    let activePage = document.querySelector('#active');

    switch (value) {

        case 'rightArrow':
            
            if (numberOfPage.textContent == '5') {

                numberOfPage.textContent = 1;

            } else {

                numberOfPage.textContent = Number(numberOfPage.textContent)+1;

            }

            welcomeBackgroundBlock.style.backgroundImage = `url(/assets/img/welcome-slider/${Number(numberOfPage.textContent)}.jpg)`;
        
            break;
    
        case 'leftArrow':

            if (numberOfPage.textContent == '1') {

                numberOfPage.textContent = 5;

            } else {

                numberOfPage.textContent = Number(numberOfPage.textContent)-1;

            }

            welcomeBackgroundBlock.style.backgroundImage = `url(/assets/img/welcome-slider/${Number(numberOfPage.textContent)}.jpg)`;
            
            break;

        case 1: 

            numberOfPage.textContent = value;
            welcomeBackgroundBlock.style.backgroundImage = `url(/assets/img/welcome-slider/${Number(value)}.jpg)`;
            break;

        case 2: 

            numberOfPage.textContent = value;
            welcomeBackgroundBlock.style.backgroundImage = `url(/assets/img/welcome-slider/${Number(value)}.jpg)`;
            break;

        case 3: 

            numberOfPage.textContent = value;
            welcomeBackgroundBlock.style.backgroundImage = `url(/assets/img/welcome-slider/${Number(value)}.jpg)`;
            break;

        case 4: 

            numberOfPage.textContent = value;
            welcomeBackgroundBlock.style.backgroundImage = `url(/assets/img/welcome-slider/${Number(value)}.jpg)`;
            break;

        case 5: 

            numberOfPage.textContent = value;
            welcomeBackgroundBlock.style.backgroundImage = `url(/assets/img/welcome-slider/${Number(value)}.jpg)`;
            break;

        default:
            break;
    }

    activePage.removeAttribute('id');
    pages[numberOfPage.textContent-1].setAttribute('id', 'active')

}

const sliderActive = (target) => {

    let newPos = target.clientX-970;

    slider.style = `left: ${newPos}px;`;
    imageBefore.style = `width: ${newPos+20}px;`;
    
    if (newPos >= maxDistanceForSlider) {

        slider.style = `left: ${maxDistanceForSlider}px;`;
        imageBefore.style = `width: ${maxDistanceForImage}px;`;

    }

    if (newPos <= minDistanceForSlider) {

        slider.style = `left: ${minDistanceForSlider}px;`;
        imageBefore.style = `width: ${minDistanceForImage}px;`;

    }

}

const handleRemoveListener = () => {

    pictureBlock.removeEventListener('mouseup', handleRemoveListener)
    pictureBlock.removeEventListener('mousemove', sliderActive)

}

const handleSlider = () => {

    pictureBlock.addEventListener('mouseup', handleRemoveListener)
    pictureBlock.addEventListener('mousemove', sliderActive)

}
>>>>>>> Stashed changes
