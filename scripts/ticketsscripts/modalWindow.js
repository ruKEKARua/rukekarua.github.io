const applicantForm = document.querySelector('#formTickets');
const sectionWrapper = document.querySelector('.tickets_wrapper');
const modalWindow = document.querySelector('.booking_modal');

const closeModal = () => {

    sectionWrapper.style.display = 'block';
    modalWindow.style.display = 'none';

}

export { closeModal }