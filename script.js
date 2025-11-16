const welcomeSliderWrapper = document.querySelector('.slider_wrapper_welcome');
const sliderWelcome = welcomeSliderWrapper.querySelector('.slider_welcome');

const pages = document.querySelectorAll('.page');
const exploreBlock = document.querySelector(".picture");
const imageBefore = document.querySelector('.image_before');
const slider = document.querySelector('.slider_block');

const exploreBlockParams = exploreBlock.getBoundingClientRect();
const welcomeBlockParams = welcomeSliderWrapper.getBoundingClientRect();

const positionPictureExploreBlock = exploreBlockParams.left;
const positionPictureWelcomeBlock = welcomeBlockParams.left;
const centerOfPictureWelcomeBlock = 500;
const maxDistanceForSlider = 700;
const minDistanceForSlider = -20;
const maxDistanceForImage = 700;
const minDistanceForImage = 0;
const gapBetweenSlides = 15;
const baseDistanceFromCurrentSlide = 1000

let firstImage =  0;
let secondImage = 1000 + gapBetweenSlides;
let thirdImage =  2000 + gapBetweenSlides;
let fourthImage = 3000 + gapBetweenSlides;
let fiveImage =   4000 + gapBetweenSlides;

const onMouseUpChangeSliderImage = (target) => {

    let newPos = target.clientX - positionPictureWelcomeBlock;

    let numberOfPage = document.querySelector('#changable_number');

    if (newPos > centerOfPictureWelcomeBlock) {

        

        if (Number(numberOfPage.textContent) == 1) {

                numberOfPage.textContent = 5;
                changeWelcomeImagePagination(5);

        } else {

            numberOfPage.textContent = Number(numberOfPage.textContent)-1;
            changeWelcomeImagePagination(numberOfPage.textContent);

        }

    }

    if (newPos < centerOfPictureWelcomeBlock) {

        if (Number(numberOfPage.textContent) == 5) {

                numberOfPage.textContent = 1;
                changeWelcomeImagePagination(1);

        } else {

            numberOfPage.textContent = Number(numberOfPage.textContent)+1;
            changeWelcomeImagePagination(numberOfPage.textContent);

        }

    }


}

const sliderWelcomeActive = (target) => {

    let newPos = target.clientX - positionPictureWelcomeBlock - centerOfPictureWelcomeBlock;

    sliderWelcome.style = `transition: 0s; background-position-x: 
        ${firstImage + newPos}px, 
        ${secondImage + newPos}px, 
        ${thirdImage + newPos}px, 
        ${fourthImage + newPos}px, 
        ${fiveImage + newPos}px;`;

}

const sliderExploreActive = (target) => {

    let newPos = target.clientX-positionPictureExploreBlock;

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


const handleRemoveSliderExploreListener = () => {

    exploreBlock.removeEventListener('mouseup', handleRemoveSliderExploreListener);
    exploreBlock.removeEventListener('mousemove', sliderExploreActive);

}

const handleSliderExplore = () => {

    exploreBlock.addEventListener('mouseup', handleRemoveSliderExploreListener);
    exploreBlock.addEventListener('mousemove', sliderExploreActive);

}

const handleRemoveSliderWelcomeListener = () => {

    welcomeSliderWrapper.removeEventListener('mouseup', handleRemoveSliderWelcomeListener);
    welcomeSliderWrapper.removeEventListener('mousemove', sliderWelcomeActive);
    sliderWelcome.removeEventListener('mouseup', onMouseUpChangeSliderImage);

}

const handleSliderWelcome = () => {

    welcomeSliderWrapper.addEventListener('mouseup', handleRemoveSliderWelcomeListener);
    welcomeSliderWrapper.addEventListener('mousemove', sliderWelcomeActive);
    sliderWelcome.addEventListener('mouseup', onMouseUpChangeSliderImage);

}

const changeWelcomeImagePagination = (value) => {

    let numberOfPage = document.querySelector('#changable_number');
    let activePage = document.querySelector('#active');

    switch (value) {

        case 'rightArrow':
            
            if (numberOfPage.textContent == '5') {

                numberOfPage.textContent = 1;

            } else {

                numberOfPage.textContent = Number(numberOfPage.textContent)+1;

            }

            break;
    
        case 'leftArrow':

            if (numberOfPage.textContent == '1') {

                numberOfPage.textContent = 5;

            } else {

                numberOfPage.textContent = Number(numberOfPage.textContent)-1;

            }

            
            break;

        case "firstPage": 

            numberOfPage.textContent = 1;

            break;

        case "secondPage": 

            numberOfPage.textContent = 2;

            break;

        case "thirdPage": 

            numberOfPage.textContent = 3;

            break;

        case "fourPage": 

            numberOfPage.textContent = 4;

            break;

        case "fivePage": 

            numberOfPage.textContent = 5;

            break;

        default:
            break;
    }

    
    switch (Number(numberOfPage.textContent)) {
                
        case 1:
                
            firstImage =  0;
            secondImage = 1000 + gapBetweenSlides;
            thirdImage =  2000 + gapBetweenSlides;
            fourthImage = 3000 + gapBetweenSlides;
            fiveImage =   4000 + gapBetweenSlides;

            break;
                
        case 2:
                
            firstImage =  -1000 - gapBetweenSlides;
            secondImage = 0;
            thirdImage =  1000 + gapBetweenSlides;
            fourthImage = 2000 + gapBetweenSlides;
            fiveImage =   3000 + gapBetweenSlides;

            break;
                
        case 3:
                
            firstImage =  -2000 - gapBetweenSlides;
            secondImage = -1000 - gapBetweenSlides;
            thirdImage =  0;
            fourthImage = 1000 + gapBetweenSlides;
            fiveImage =   2000 + gapBetweenSlides;

            break;
                
         case 4:
                
            firstImage =  -3000 - gapBetweenSlides;
            secondImage = -2000 - gapBetweenSlides;
            thirdImage =  -1000 - gapBetweenSlides;
            fourthImage = 0;
            fiveImage =   1000 + gapBetweenSlides;

            break;

        case 5:
                
            firstImage =  -4000 - gapBetweenSlides;
            secondImage = -3000 - gapBetweenSlides;
            thirdImage =  -2000 - gapBetweenSlides;
            fourthImage = -1000 - gapBetweenSlides;
            fiveImage =   0;

            break;
            
        default:
            break;
    }

    sliderWelcome.style = `background-position-x: 
        ${firstImage}px,
        ${secondImage}px,
        ${thirdImage}px,
        ${fourthImage}px,
        ${fiveImage}px;`;

    activePage.removeAttribute('id');
    pages[numberOfPage.textContent-1].setAttribute('id', 'active')

}