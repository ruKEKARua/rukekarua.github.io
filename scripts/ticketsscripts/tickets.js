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

const plusButtonBasic = applicantForm.querySelector('#plusButtonBasic');
const minusButtonBasic = applicantForm.querySelector('#minusButtonBasic');

const plusButtonSenior = applicantForm.querySelector('#plusButtonSenior');
const minusButtonSenior = applicantForm.querySelector('#minusButtonSenior');

const plusButtonBasicModal = applicantFormModal.querySelector('#ticketButtonPlusBasic');
const minusButtonBasicModal = applicantFormModal.querySelector('#ticketButtonMinusBasic');

const plusButtonSeniorModal = applicantFormModal.querySelector('#ticketButtonPlusSenior');
const minusButtonSeniorModal = applicantFormModal.querySelector('#ticketButtonMinusSenior');

const counterBasic = applicantFormModal.querySelector('#inputBookingCountBasic');
const counterSenior = applicantFormModal.querySelector('#inputBookingCountSenior');

const basicTicketCounterOverview = applicantFormModal.querySelector('.basic_ticket').querySelector('p');
const seniorTicketCounterOverview = applicantFormModal.querySelector('.senior_ticket').querySelector('p');

const basicValue = applicantFormModal.querySelector('.basic_total_price');
const seniorValue = applicantFormModal.querySelector('.senior_total_price');
const totalPrice = applicantFormModal.querySelector('#total_price');

const ticketTipesBooking = applicantFormModal.querySelector('.type_selector').querySelectorAll('option');

const ticketValue = applicantFormModal.querySelector('.ticket_value').querySelector('p');

const closeModalButton = document.querySelector('.close_button');

const formElements = (formNode) => {

    return new FormData(formNode)

}

const handleFormSubmit = (event) => {
    
    event.preventDefault()
    
    const formArray = Array.from(formElements(applicantForm).entries())
    
    const ticketEntry = formArray.find(entry => entry[0] === 'ticketType');
    const valueBasicTickets = formArray[1][1];
    const valueSeniorTickets = formArray[2][1];
    const ticketType = ticketEntry[1];

    
    console.log(formArray)
    
    counterBasic.value = valueBasicTickets;
    counterSenior.value = valueSeniorTickets;
    basicTicketCounterOverview.textContent = valueBasicTickets;
    seniorTicketCounterOverview.textContent = valueSeniorTickets;

    basicValue.textContent = Number(counterBasic.value) * 20;
    seniorValue.textContent = Number(counterSenior.value) * 10;
    
    totalPrice.textContent = Number(basicValue.textContent) + Number(seniorValue.textContent)


    ticketValue.textContent = ticketType;
    
    ticketTipesBooking.forEach((element) => {

        if (element.value == ticketType) {

            element.setAttribute('selected', '')

        }

    })
    
    sectionWrapper.style.display = 'none';
    modalWindow.style.display = 'block';


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

