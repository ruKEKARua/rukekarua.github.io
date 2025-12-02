const applicantForm = document.querySelector('.modal_wrapper');
const sectionWrapper = document.querySelector('.tickets_wrapper');
const modalWindow = document.querySelector('.booking_modal');

const counterBasic = applicantForm.querySelector('#inputBookingCountBasic');
const counterSenior = applicantForm.querySelector('#inputBookingCountSenior');

const basicTicketCounterOverview = document.querySelector('.basic_ticket').querySelector('p');
const seniorTicketCounterOverview = document.querySelector('.senior_ticket').querySelector('p');

const basicValue = document.querySelector('.basic_total_price');
const seniorValue = document.querySelector('.senior_total_price');
const totalPrice = document.querySelector('#total_price');

const closeModal = () => {

    sectionWrapper.style.display = 'block';
    modalWindow.style.display = 'none';

}

const handleCountBasicPlusModal = () => {

    counterBasic.value = Number(counterBasic.value) + 1;
    basicTicketCounterOverview.textContent = counterBasic.value;

    basicValue.textContent = Number(counterBasic.value) * 20;
    totalPrice.textContent = Number(basicValue.textContent) + Number(seniorValue.textContent)

};

const handleCountBasicMinusModal = () => {

    if (Number(counterBasic.value) - 1 >= 0) {

        counterBasic.value = Number(counterBasic.value) - 1;
        basicTicketCounterOverview.textContent = counterBasic.value;
        basicValue.textContent = Number(counterBasic.value) * 20;
        totalPrice.textContent = Number(basicValue.textContent) + Number(seniorValue.textContent)

    }

};

const handleCountSeniorPlusModal = () => {

    counterSenior.value = Number(counterSenior.value) + 1;
    seniorTicketCounterOverview.textContent = counterSenior.value;
    seniorValue.textContent = Number(counterSenior.value) * 10;
    totalPrice.textContent = Number(basicValue.textContent) + Number(seniorValue.textContent)


};

const handleCountSeniorMinusModal = () => {

    if (Number(counterSenior.value) - 1 >= 0) {

        counterSenior.value = Number(counterSenior.value) - 1;
        seniorTicketCounterOverview.textContent = counterSenior.value;
        seniorValue.textContent = Number(counterSenior.value) * 10;
        totalPrice.textContent = Number(basicValue.textContent) + Number(seniorValue.textContent)


    }

};

export { 

    closeModal,
    handleCountBasicPlusModal,
    handleCountBasicMinusModal,
    handleCountSeniorPlusModal,
    handleCountSeniorMinusModal

}