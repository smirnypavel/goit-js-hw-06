const textEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');
textEl.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener('input', (event) => {
    textEl.style.fontSize = event.currentTarget.value + 'px';
});