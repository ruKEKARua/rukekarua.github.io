const applicantFormModal = document.querySelector('.modal_wrapper');
const sectionWrapper = document.querySelector('.tickets_wrapper');
const modalWindow = document.querySelector('.booking_modal');

const counterBasic = applicantFormModal.querySelector('#inputBookingCountBasic');
const counterSenior = applicantFormModal.querySelector('#inputBookingCountSenior');

const basicTicketCounterOverview = applicantFormModal.querySelector('.basic_ticket').querySelector('p');
const seniorTicketCounterOverview = applicantFormModal.querySelector('.senior_ticket').querySelector('p');

const basicValue = applicantFormModal.querySelector('.basic_total_price');
const seniorValue = applicantFormModal.querySelector('.senior_total_price');
const totalPrice = applicantFormModal.querySelector('#total_price');

const timeValueInput = applicantFormModal.querySelector('#input_time');
const dateValueInput = applicantFormModal.querySelector('#input_date');

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

const changeTime = () => {

    const timeValue = applicantFormModal.querySelector('.time_value').querySelector('p')

    timeValue.textContent = timeValueInput.value;

};

const changeDate = () => {

    const dateValue = applicantFormModal.querySelector('.date_value').querySelector('p')

    dateValue.textContent = dateValueInput.value;

};

timeValueInput.addEventListener('input', changeTime)
dateValueInput.addEventListener('input', changeDate)


export { 

    closeModal,
    handleCountBasicPlusModal,
    handleCountBasicMinusModal,
    handleCountSeniorPlusModal,
    handleCountSeniorMinusModal

}