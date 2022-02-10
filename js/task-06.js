const userInput = document.querySelector('#validation-input');

userInput.addEventListener('blur', event => {
    console.log(event.currentTarget.value.length);
    console.log(event.currentTarget.dataset.length);
    const valueLength = event.currentTarget.value.length;
    const dataSetLength = Number(event.currentTarget.dataset.length);
    if (valueLength === dataSetLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
        return
    };
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
})