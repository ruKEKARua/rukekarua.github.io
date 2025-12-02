const applicantForm = document.querySelector('#formTickets');
const sectionWrapper = document.querySelector('.tickets_wrapper');
const modalWindow = document.querySelector('.booking_modal');

const counterBasic = applicantForm.querySelector('#counterBasic');
const counterSenior = applicantForm.querySelector('#counterSenior');

const totalPrice = applicantForm.querySelector('.total_price ').querySelector('span');

const handleCountBasicPlus = () => {

    counterBasic.value = Number(counterBasic.value) + 1;
    totalPrice.textContent = (Number(counterBasic.value) * 20) + (Number(counterSenior.value) * 10)


};

const handleCountBasicMinus = () => {

    if (Number(counterBasic.value) - 1 >= 0) {

        counterBasic.value = Number(counterBasic.value) - 1;
        totalPrice.textContent = (Number(counterBasic.value) * 20) + (Number(counterSenior.value) * 10)


    }

};

const handleCountSeniorPlus = () => {

    counterSenior.value = Number(counterSenior.value) + 1;
    totalPrice.textContent = (Number(counterBasic.value) * 20) + (Number(counterSenior.value) * 10)


};

const handleCountSeniorMinus = () => {

    if (Number(counterSenior.value) - 1 >= 0) {

        counterSenior.value = Number(counterSenior.value) - 1;
        totalPrice.textContent = (Number(counterBasic.value) * 20) + (Number(counterSenior.value) * 10)


    }

};

export {

    handleCountBasicPlus,
    handleCountBasicMinus,
    handleCountSeniorPlus,
    handleCountSeniorMinus 
    
}