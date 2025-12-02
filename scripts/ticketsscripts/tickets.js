import { 
    handleCountBasicPlus,
    handleCountBasicMinus,
    handleCountSeniorPlus,
    handleCountSeniorMinus 
} from "./counterButtons.js";
import { 
    closeModal, 
    handleCountBasicPlusModal,
    handleCountBasicMinusModal,
    handleCountSeniorPlusModal,
    handleCountSeniorMinusModal

} from "./modalWindow.js";

const applicantForm = document.querySelector('#formTickets');
const applicantFormModal = document.querySelector('.modal_wrapper');

const sectionWrapper = document.querySelector('.tickets_wrapper');
const modalWindow = document.querySelector('.booking_modal');

const plusButtonBasic = applicantForm.querySelector('#plusButtonBasic')
const minusButtonBasic = applicantForm.querySelector('#minusButtonBasic')

const plusButtonSenior = applicantForm.querySelector('#plusButtonSenior')
const minusButtonSenior = applicantForm.querySelector('#minusButtonSenior')

const plusButtonBasicModal = applicantFormModal.querySelector('#ticketButtonPlusBasic')
const minusButtonBasicModal = applicantFormModal.querySelector('#ticketButtonMinusBasic')

const plusButtonSeniorModal = applicantFormModal.querySelector('#ticketButtonPlusSenior')
const minusButtonSeniorModal = applicantFormModal.querySelector('#ticketButtonMinusSenior')

const closeModalButton = document.querySelector('.close_button');

const formElements = (formNode) => {

    return new FormData(formNode)

}

const handleFormSubmit = (event) => {
    
    event.preventDefault()
    const formArray = Array.from(formElements(applicantForm).entries())

    sectionWrapper.style.display = 'none';
    modalWindow.style.display = 'block';
    console.log(formArray)

}


applicantForm.addEventListener('submit', handleFormSubmit)


plusButtonBasic.addEventListener('click', handleCountBasicPlus)
minusButtonBasic.addEventListener('click', handleCountBasicMinus)

plusButtonSenior.addEventListener('click', handleCountSeniorPlus)
minusButtonSenior.addEventListener('click', handleCountSeniorMinus)

plusButtonBasicModal.addEventListener('click', handleCountBasicPlusModal);
minusButtonBasicModal.addEventListener('click', handleCountBasicMinusModal);
plusButtonSeniorModal.addEventListener('click', handleCountSeniorPlusModal);
minusButtonSeniorModal.addEventListener('click', handleCountSeniorMinusModal);

closeModalButton.addEventListener('click', closeModal);
