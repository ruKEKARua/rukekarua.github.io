const firstPage = document.querySelector('.first_page');
const secondPage = document.querySelector('.second_page');

const changePage = (event) => {
    
    const targetArrow = event.target.classList[0];

    let pageArray = document.querySelectorAll('.circle');
        
    let indexOfActivePage = 0;

    if (targetArrow == 'arrow_button_right') {

        pageArray.forEach((element, i) => {

            if (element.classList[1] == 'circle_active') {

                element.classList.remove('circle_active')
                indexOfActivePage = i+1;

            }

        })

        if (indexOfActivePage > pageArray.length-1) {

            indexOfActivePage = 0;

        }

        pageArray[indexOfActivePage].classList.add('circle_active')

        return indexOfActivePage

    } else {
        
        pageArray.forEach((element, i) => {

            if (element.classList[1] == 'circle_active') {

                element.classList.remove('circle_active')
                indexOfActivePage = i+1;

            }

        })

        if (indexOfActivePage > pageArray.length-1) {

            indexOfActivePage = 0;

        }

        pageArray[indexOfActivePage].classList.add('circle_active')

        return indexOfActivePage

    }

}

const moveSlider = (event) => { // event => то что передаётся при addEventListener
    
    if (changePage(event) == 1) { // если результат changePage == 1 | также в самой changePage манипуляции с event

        firstPage.style.transform = 'translateX(-1482px)';
        secondPage.style.transform = 'translateX(-1482px)';

    } else {

        firstPage.style.transform = 'translateX(0)';
        secondPage.style.transform = 'translateX(0)';

    }

}


/*
const videoSliderArray = [

    {
        videoName: 'video0',
        videoTitle: 'Louvre Intro',
        videoPoster: 'poster0'
    },
    {
        videoName: 'video3',
        videoTitle: 'Exposition - Le Corps et l’Ame. De Dona...',
        videoPoster: 'poster3'
    },
    {
        videoName: 'video1',
        videoTitle: 'Au Louvre ! La Venus de Milo',
        videoPoster: 'poster1'
    },
    {
        videoName: 'video2',
        videoTitle: 'Promenade dans les collections mesop...',
        videoPoster: 'poster2'
    },
    {
        videoName: 'video4',
        videoTitle: 'La ruse du renad',
        videoPoster: 'poster4'
    },
    {
        videoName: 'video6',
        videoTitle: 'Nouveau Louvre : first images',
        videoPoster: 'poster6'
    },
    {
        videoName: 'video7',
        videoTitle: 'The Louvre: 800 years of history',
        videoPoster: 'poster7'
    },
    

];
 */
export {moveSlider};