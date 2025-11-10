const changeWelcomeImage = (value) => {

    const welcomeBackgroundBlock = document.querySelector('.welcome_wrapper');
    const pages = document.querySelectorAll('.page')

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