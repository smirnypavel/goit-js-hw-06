const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const valueCounter = document.querySelector('#value');

let count = 0;

const сlickPlus = () => {
    valueCounter.textContent = count += 1;
};
const clickMinus = () => {
    valueCounter.textContent = count -= 1;
};

buttonPlus.addEventListener('click', сlickPlus);
buttonMinus.addEventListener('click', clickMinus);