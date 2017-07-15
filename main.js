let inputArr = [], dataStore = [], currentDataStorageItem, historyPosition = 1;

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

const displayResult = () => {
  inputField.innerHTML = result;
  dataStore.push(result);
  inputArr = [];
}

const getResultForSqrt = () => {
  inputArr = inputArr.slice(1);
  result = Math.sqrt(inputArr.join(''));
  displayResult();
}

const getResult= () => {
  let operatorIndex = inputArr.findIndex(getOperatorIndex);
  let operator = inputArr[operatorIndex];
  let a = inputArr.slice(0, operatorIndex).join('');
  let b = inputArr.splice(operatorIndex + 1).join('');

  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
    case "%": result = a % b; break;
  }
  displayResult();
}

const evaluate = () => {
  historyPosition = 1
  let result;
  if (inputArr[0] != "√") {
    getResult();
  } else {
    getResultForSqrt();
  }
}

// INPUT, RESULT, CLEAR BUTTONS
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

const inputField = document.getElementById('input');
inputField.innerHTML = inputArr;

const resultButton = document.getElementById('result');
resultButton.addEventListener('click', () => evaluate());
