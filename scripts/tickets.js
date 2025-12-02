const applicantForm = document.querySelector('#formTickets');

const formElements = (formNode) => {

    return new FormData(formNode)

}

function handleFormSubmit(event) {

    event.preventDefault()
    const formArray = Array.from(formElements(applicantForm).entries())
    
}

applicantForm.addEventListener('submit', handleFormSubmit)

