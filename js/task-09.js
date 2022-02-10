function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanEl = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  // console.log(color);
  document.body.style.background = color;
  spanEl.textContent = color;
})