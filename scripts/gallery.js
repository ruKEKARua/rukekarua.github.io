const artBlock1 = document.querySelector('.art_block_1');
const artBlock2 = document.querySelector('.art_block_2');
const artBlock3 = document.querySelector('.art_block_3');

const imagesArray = document.querySelectorAll('.art_image');

const galleryObject = {

    isAnimated: false,

    minimumDistance: 550,
    maximumDistance: 600,

}

const animationArray = [

    {transform: "translateY(50px)", opacity: '0'},
    {transform: "translateY(0px)", opacity: '1'}
    
];

const durationArray = {

    duration: 500,

}

const showImages = () => {

    const min = galleryObject.minimumDistance;
    const max = galleryObject.maximumDistance;
    
    if (!galleryObject.isAnimated) {

        imagesArray.forEach((element) => {

            const verticalPos = element.getBoundingClientRect().y;

            if (verticalPos > min && verticalPos < max) {
            
                element.animate(animationArray, durationArray)
                element.style.opacity = '1';
            
            }

            if (imagesArray[imagesArray.length-1].style.opacity == '1') {// секретный костыль

                imagesArray[7].animate(animationArray, durationArray);
                imagesArray[3].animate(animationArray, durationArray);
                imagesArray[7].style.opacity = '1';
                imagesArray[3].style.opacity = '1';

                galleryObject.isAnimated = true;

            }

        })

    } else {

    }

}

let lastScrollTop = window.scrollY;
window.addEventListener('scroll', (event) => {
    console.log(window.scrollY)
    
    let currentScrollTop = window.scrollY;
    
    if (currentScrollTop > lastScrollTop) {// Скролл идёт вниз
        
        showImages();

    }
    lastScrollTop = currentScrollTop;

    if (window.scrollY <= 2000) {

            imagesArray.forEach((element) => {

                element.style.opacity = '0';

            })

            galleryObject.isAnimated = false;

        }

})