const applicantForm = document.querySelector('.modal_wrapper');
const sectionWrapper = document.querySelector('.tickets_wrapper');
const modalWindow = document.querySelector('.booking_modal');

const counterBasic = applicantForm.querySelector('#inputBookingCountBasic');
const counterSenior = applicantForm.querySelector('#inputBookingCountSenior');

const closeModal = () => {

    sectionWrapper.style.display = 'block';
    modalWindow.style.display = 'none';

}

const handleCountBasicPlusModal = () => {

    counterBasic.value = Number(counterBasic.value) + 1;

};

const handleCountBasicMinusModal = () => {

    if (Number(counterBasic.value) - 1 >= 0) {

        counterBasic.value = Number(counterBasic.value) - 1;

    }

};

const handleCountSeniorPlusModal = () => {

    counterSenior.value = Number(counterSenior.value) + 1;

};

const handleCountSeniorMinusModal = () => {

    if (Number(counterSenior.value) - 1 >= 0) {

        counterSenior.value = Number(counterSenior.value) - 1;

    }

};

export { 

    closeModal,
    handleCountBasicPlusModal,
    handleCountBasicMinusModal,
    handleCountSeniorPlusModal,
    handleCountSeniorMinusModal

}