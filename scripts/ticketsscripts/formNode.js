const applicantForm = document.querySelector('#formTickets');
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

const ticketTipesBooking = applicantFormModal.querySelector('.type_selector').querySelectorAll('option');

const ticketValue = applicantFormModal.querySelector('.ticket_value').querySelector('p');

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

export {handleFormSubmit}