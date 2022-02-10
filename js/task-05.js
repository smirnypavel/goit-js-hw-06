const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
  let inputValue = event.currentTarget.value.trim();
  output.textContent = inputValue ? inputValue : 'Anonimus';
 
 
//   if (event.currentTarget.value.trim() === '') {
//     output.textContent = 'Anonimus';
//     return;
//   }
//  output.textContent = event.currentTarget.value;
});