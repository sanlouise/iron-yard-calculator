let inputArr = [], dataStore = [];

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

// STORE
let currentDataStorageItem, historyPosition = 1
const dataStoreButton = document.getElementById('dataStore');
dataStoreButton.addEventListener('click', (event) => getDataStore())

const getDataStore = () => {
  if (dataStore.length > 0) {
    historyPosition++
    let tempHistory = dataStore[dataStore.length - historyPosition]
    inputField.innerHTML = tempHistory;
  } else {
    inputField.innerHTML = "No more previous answers.."
  }
}

const getOperatorIndex = (operator) => {
  return operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%'
}

const evaluate = () => {
  historyPosition = 1
  let result;
  if (inputArr[0] != "√") {

    let operatorIndex = inputArr.findIndex(getOperatorIndex);
    let operator = inputArr[operatorIndex];
    let a = inputArr.slice(0, operatorIndex).join('');
    let b = inputArr.splice(operatorIndex + 1).join('');

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
      case "%":
        result = a % b;
        break;
    }

    inputField.innerHTML = result;
    dataStore.push(result);
    inputArr = [];
  } else {
    inputArr = inputArr.slice(1);
    let result = Math.sqrt(eval(inputArr.join('')));
    inputField.innerHTML = result;
    dataStore.push(result);
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
