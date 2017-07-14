let inputArr = [];

const operationButtons = document.querySelectorAll(".btn")
operationButtons.forEach(function(button){
  button.addEventListener('click', (event) => calculate(event.target));
})

const clear = () => {
  inputArr = [];
  document.getElementById('input').innerHTML = inputArr;
}

const calculate = (button) => {
  inputArr.push(button.dataset.value);
  inputField.innerHTML = inputArr.join('');
}

const evaluate = () => {
  if (inputArr[0] != "√") {
    let result = eval(inputArr.join(''));
    inputField.innerHTML = result;
    inputArr = [];
  } else {
    inputArr = inputArr.slice(1);
    let result = Math.sqrt(eval(inputArr.join('')));
    inputField.innerHTML = result;
    inputArr = [];
  }
}

// INPUT, RESULT, CLEAR BUTTONS
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

const inputField = document.getElementById('input');
inputField.innerHTML = inputArr;

const resultButton = document.getElementById('result');
resultButton.addEventListener('click', () => evaluate());
