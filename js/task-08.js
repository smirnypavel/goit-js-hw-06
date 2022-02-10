const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.dir(event.currentTarget);
    const formElements = event.currentTarget.elements;
    // console.log(formElements);
    const emailValue = formElements.email.value;
    const passwordValue = formElements.password.value;
    if (!emailValue || !passwordValue) {
        alert('Все поля должны быть заполнены');
        return
    }
    const dataUser = {};
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => dataUser[name] = value)
    console.log(dataUser);
    event.currentTarget.reset();
})