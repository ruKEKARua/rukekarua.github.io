const changeWelcomeImage = (value) => {

    const welcomeBackgroundBlock = document.querySelector('.welcome_wrapper');
    let numberOfPage = document.querySelector('#changable_number');

    switch (value) {
        case 'rightArrow':
            
            if (numberOfPage.textContent == '5') {

                numberOfPage.textContent = 1;

            } else {

                numberOfPage.textContent = Number(numberOfPage.textContent)+1;

            }

            welcomeBackgroundBlock.style.backgroundImage = `url(/assets/img/welcome-slider/${Number(numberOfPage.textContent)}.jpg)`;

            break;
    
        default:
            break;
    }

}