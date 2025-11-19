const welcomeSliderWrapper = document.querySelector('.slider_wrapper_welcome');
const sliderWelcome = welcomeSliderWrapper.querySelector('.slider_welcome');

const pages = document.querySelectorAll('.page');
const exploreBlock = document.querySelector(".picture");
const imageBefore = document.querySelector('.image_before');
const slider = document.querySelector('.slider_block');

const gapBetweenSlides = 15;

const sliderExploreObject = {

    positionPictureExploreBlock: exploreBlock.getBoundingClientRect().left,
    maxDistanceForSlider: 700,
    minDistanceForSlider: -20,
    maxDistanceForImage: 700,
    minDistanceForImage: 0,

}

const sliderWelcomeObject = {

    firstImagePosition:  0,
    secondImagePosition: 1000 + gapBetweenSlides,
    thirdImagePosition:  2000 + gapBetweenSlides,
    fourthImagePosition: 3000 + gapBetweenSlides,
    fiveImagePosition:   4000 + gapBetweenSlides,

    baseDistanceFromCurrentSlide: 1000,

    positionPictureWelcomeBlock: welcomeSliderWrapper.getBoundingClientRect().left,
    centerOfPictureWelcomeBlock: welcomeSliderWrapper.getBoundingClientRect().width/2,

    speedDragging: 0.35,

}

const onMouseUpChangeSliderImage = (target) => {

    let newPos = target.clientX - sliderWelcomeObject.positionPictureWelcomeBlock;

    let numberOfPage = document.querySelector('#changable_number');

    if (newPos >= 350 && newPos <= 650) {

        changeWelcomeImagePagination('middle')

    } else {
        
        if (newPos > sliderWelcomeObject.centerOfPictureWelcomeBlock) {

            if (Number(numberOfPage.textContent) == 1) {

                    numberOfPage.textContent = 5;
                    changeWelcomeImagePagination(5);

            } else {

                numberOfPage.textContent = Number(numberOfPage.textContent)-1;
                changeWelcomeImagePagination(numberOfPage.textContent);

            }

        }

        if (newPos < sliderWelcomeObject.centerOfPictureWelcomeBlock) {

            if (Number(numberOfPage.textContent) == 5) {

                    numberOfPage.textContent = 1;
                    changeWelcomeImagePagination(1);

            } else {

                numberOfPage.textContent = Number(numberOfPage.textContent)+1;
                changeWelcomeImagePagination(numberOfPage.textContent);

            }

        }
    }



}

const sliderWelcomeActive = (target) => {
    let startX = target.clientX;
    let newPos = startX - sliderWelcomeObject.positionPictureWelcomeBlock - sliderWelcomeObject.centerOfPictureWelcomeBlock;

    let currentX = newPos * sliderWelcomeObject.speedDragging;
    
    sliderWelcome.style.backgroundPositionX = `
        ${sliderWelcomeObject.firstImagePosition + currentX}px,
        ${sliderWelcomeObject.secondImagePosition + currentX}px,
        ${sliderWelcomeObject.thirdImagePosition + currentX}px,
        ${sliderWelcomeObject.fourthImagePosition + currentX}px,
        ${sliderWelcomeObject.fiveImagePosition + currentX}px`;

    sliderWelcome.style.transition = `0s`;    

}

const sliderExploreActive = (target) => {

    let newPos = target.clientX - sliderExploreObject.positionPictureExploreBlock;

    slider.style = `left: ${newPos}px;`;
    imageBefore.style = `width: ${newPos+20}px;`;
    
    if (newPos >= sliderExploreObject.maxDistanceForSlider) {

        slider.style = `left: ${sliderExploreObject.maxDistanceForSlider}px;`;
        imageBefore.style = `width: ${sliderExploreObject.maxDistanceForImage}px;`;

    }

    if (newPos <= sliderExploreObject.minDistanceForSlider) {

        slider.style = `left: ${sliderExploreObject.minDistanceForSlider}px;`;
        imageBefore.style = `width: ${sliderExploreObject.minDistanceForImage}px;`;

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
                
            sliderWelcomeObject.firstImagePosition =  0;
            sliderWelcomeObject.secondImagePosition = 1000 + gapBetweenSlides;
            sliderWelcomeObject.thirdImagePosition =  2000 + gapBetweenSlides;
            sliderWelcomeObject.fourthImagePosition = 3000 + gapBetweenSlides;
            sliderWelcomeObject.fiveImagePosition =   4000 + gapBetweenSlides;

            break;
                
        case 2:
                
            sliderWelcomeObject.firstImagePosition =  -1000 - gapBetweenSlides;
            sliderWelcomeObject.secondImagePosition = 0;
            sliderWelcomeObject.thirdImagePosition =  1000 + gapBetweenSlides;
            sliderWelcomeObject.fourthImagePosition = 2000 + gapBetweenSlides;
            sliderWelcomeObject.fiveImagePosition =   3000 + gapBetweenSlides;

            break;
                
        case 3:
                
            sliderWelcomeObject.firstImagePosition =  -2000 - gapBetweenSlides;
            sliderWelcomeObject.secondImagePosition = -1000 - gapBetweenSlides;
            sliderWelcomeObject.thirdImagePosition =  0;
            sliderWelcomeObject.fourthImagePosition = 1000 + gapBetweenSlides;
            sliderWelcomeObject.fiveImagePosition =   2000 + gapBetweenSlides;

            break;
                
         case 4:
                
            sliderWelcomeObject.firstImagePosition =  -3000 - gapBetweenSlides;
            sliderWelcomeObject.secondImagePosition = -2000 - gapBetweenSlides;
            sliderWelcomeObject.thirdImagePosition =  -1000 - gapBetweenSlides;
            sliderWelcomeObject.fourthImagePosition = 0;
            sliderWelcomeObject.fiveImagePosition =   1000 + gapBetweenSlides;

            break;

        case 5:
                
            sliderWelcomeObject.firstImagePosition =  -4000 - gapBetweenSlides;
            sliderWelcomeObject.secondImagePosition = -3000 - gapBetweenSlides;
            sliderWelcomeObject.thirdImagePosition =  -2000 - gapBetweenSlides;
            sliderWelcomeObject.fourthImagePosition = -1000 - gapBetweenSlides;
            sliderWelcomeObject.fiveImagePosition =   0;

            break;
            
        default:

            sliderWelcome.style = `background-position-x: 
                ${sliderWelcomeObject.firstImagePosition}px,
                ${sliderWelcomeObject.secondImagePosition}px,
                ${sliderWelcomeObject.thirdImagePosition}px,
                ${sliderWelcomeObject.fourthImagePosition}px,
                ${sliderWelcomeObject.fiveImagePosition}px;`;

            break;
    }

    sliderWelcome.style = `background-position-x: 
        ${sliderWelcomeObject.firstImagePosition}px,
        ${sliderWelcomeObject.secondImagePosition}px,
        ${sliderWelcomeObject.thirdImagePosition}px,
        ${sliderWelcomeObject.fourthImagePosition}px,
        ${sliderWelcomeObject.fiveImagePosition}px;`;

    activePage.removeAttribute('id');
    pages[numberOfPage.textContent-1].setAttribute('id', 'active')

}