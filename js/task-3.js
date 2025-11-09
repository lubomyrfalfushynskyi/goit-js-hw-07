const inputElement = document.querySelector('#name-input');
console.log(inputElement);

const outputElement = document.querySelector('#name-output');
console.log(outputElement);

inputElement.addEventListener('input', () => {

  outputElement.textContent = inputElement.value.trim() || 'Anonymous';
});
