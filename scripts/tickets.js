const applicantForm = document.querySelector('#formTickets');

const plusButtonBasic = applicantForm.querySelector('#plusButtonBasic')
const minusButtonBasic = applicantForm.querySelector('#minusButtonBasic')
const plusButtonSenior = applicantForm.querySelector('#plusButtonSenior')
const minusButtonSenior = applicantForm.querySelector('#minusButtonSenior')

const counterBasic = applicantForm.querySelector('#counterBasic');
const counterSenior = applicantForm.querySelector('#counterSenior');

const formElements = (formNode) => {

    return new FormData(formNode)

}

const handleFormSubmit = (event) => {

    event.preventDefault()
    const formArray = Array.from(formElements(applicantForm).entries())

    console.log(formArray)

}

const handleCountBasicPlus = () => {

    counterBasic.value = Number(counterBasic.value) + 1;

};

const handleCountBasicMinus = () => {

    if (Number(counterBasic.value) - 1 >= 0) {

        counterBasic.value = Number(counterBasic.value) - 1;

    }

};

const handleCountSeniorPlus = () => {

    counterSenior.value = Number(counterSenior.value) + 1;

};

const handleCountSeniorMinus = () => {

    if (Number(counterSenior.value) - 1 >= 0) {

        counterSenior.value = Number(counterSenior.value) - 1;

    }

};

applicantForm.addEventListener('submit', handleFormSubmit)


plusButtonBasic.addEventListener('click', handleCountBasicPlus)
minusButtonBasic.addEventListener('click', handleCountBasicMinus)

plusButtonSenior.addEventListener('click', handleCountSeniorPlus)
minusButtonSenior.addEventListener('click', handleCountSeniorMinus)
