const pages = document.querySelectorAll('.page');
const exploreBlock = document.querySelector(".picture");
const imageBefore = document.querySelector('.image_before');
const slider = document.querySelector('.slider_block');

const sliderExploreObject = {

    positionPictureExploreBlock: exploreBlock.getBoundingClientRect().left,
    maxDistanceForSlider: 700,
    minDistanceForSlider: -20,
    maxDistanceForImage: 700,
    minDistanceForImage: 0,

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
