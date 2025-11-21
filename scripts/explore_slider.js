const pages = document.querySelectorAll('.page');
const exploreBlock = document.querySelector(".picture");
const imageBefore = document.querySelector('.image_before');
const slider = document.querySelector('.slider_block');
const explore = document.querySelector('#explore');

const sliderExploreObject = {

    positionPictureExploreBlock: exploreBlock.getBoundingClientRect().left,
    
    maxDistanceForSlider: 700,
    minDistanceForSlider: -20,

    maxDistanceForImage: 720,
    minDistanceForImage: 0,

}

const sliderExploreActive = (target) => {

    let cursorPos = target.clientX;
    let positionBlockFromLeft = sliderExploreObject.positionPictureExploreBlock;
    let newPos = cursorPos - positionBlockFromLeft;

    let maximumToLeftImage = sliderExploreObject.minDistanceForImage;
    let maximumToRightImage = sliderExploreObject.maxDistanceForImage;

    let maximumToLeftSlider = sliderExploreObject.minDistanceForSlider;
    let maximumToRightSlider = sliderExploreObject.maxDistanceForSlider;

    slider.style = `left: ${newPos-20}px;`;
    imageBefore.style = `width: ${newPos}px;`;
    
    if (newPos > maximumToRightImage) {

        slider.style = `left: ${maximumToRightSlider}px;`;
        imageBefore.style = `width: ${maximumToRightImage}px;`;

    }

    if (newPos < maximumToLeftImage) {

        slider.style = `left: ${maximumToLeftSlider}px;`;
        imageBefore.style = `width: ${maximumToLeftImage}px;`;

    }

}

const sliderHandle = () => {

    exploreBlock.addEventListener('mousemove', sliderExploreActive);

}

const handleRemoveSliderExploreListener = () => {

    exploreBlock.removeEventListener('mousemove', sliderExploreActive);

}

slider.addEventListener('mousedown', sliderHandle)
explore.addEventListener('mouseup', handleRemoveSliderExploreListener)
exploreBlock.addEventListener('mouseup', handleRemoveSliderExploreListener);



slider.ondragstart = () => false // функция, чтобы точка не раздваивалась при перемещении
