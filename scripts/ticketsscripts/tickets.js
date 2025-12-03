import { 
    handleCountBasicPlus,
    handleCountBasicMinus,
    handleCountSeniorPlus,
    handleCountSeniorMinus 
} from "./counterButtons.js";
import { handleFormSubmit } from "./formNode.js";
import { 
    closeModal, 
    handleCountBasicPlusModal,
    handleCountBasicMinusModal,
    handleCountSeniorPlusModal,
    handleCountSeniorMinusModal,
    changeTime,
    changeDate,
    showPickerDate,
    showPickerTime,
} from "./modalWindow.js";

const applicantForm = document.querySelector('#formTickets');
const applicantFormModal = document.querySelector('.modal_wrapper');

const plusButtonBasic = applicantForm.querySelector('#plusButtonBasic');
const minusButtonBasic = applicantForm.querySelector('#minusButtonBasic');

const plusButtonSenior = applicantForm.querySelector('#plusButtonSenior');
const minusButtonSenior = applicantForm.querySelector('#minusButtonSenior');

const plusButtonBasicModal = applicantFormModal.querySelector('#ticketButtonPlusBasic');
const minusButtonBasicModal = applicantFormModal.querySelector('#ticketButtonMinusBasic');

const plusButtonSeniorModal = applicantFormModal.querySelector('#ticketButtonPlusSenior');
const minusButtonSeniorModal = applicantFormModal.querySelector('#ticketButtonMinusSenior');

const timeValueInput = applicantFormModal.querySelector('#input_time');
const dateValueInput = applicantFormModal.querySelector('#input_date');

const dateArrowButton = document.querySelector('#arrowBottomDate');
const timeArrowButton = document.querySelector('#arrowBottomTime');

const closeModalButton = document.querySelector('.close_button');


applicantForm.addEventListener('submit', handleFormSubmit)


plusButtonBasic.addEventListener('click', handleCountBasicPlus)
minusButtonBasic.addEventListener('click', handleCountBasicMinus)

plusButtonSenior.addEventListener('click', handleCountSeniorPlus)
minusButtonSenior.addEventListener('click', handleCountSeniorMinus)

plusButtonBasicModal.addEventListener('click', handleCountBasicPlusModal);
minusButtonBasicModal.addEventListener('click', handleCountBasicMinusModal);
plusButtonSeniorModal.addEventListener('click', handleCountSeniorPlusModal);
minusButtonSeniorModal.addEventListener('click', handleCountSeniorMinusModal);

timeValueInput.addEventListener('input', changeTime)
dateValueInput.addEventListener('input', changeDate)

dateArrowButton.addEventListener('click', showPickerDate)
timeArrowButton.addEventListener('click', showPickerTime)

closeModalButton.addEventListener('click', closeModal);

