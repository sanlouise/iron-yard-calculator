let inputArr = [], dataStore = [], currentDataStorageItem, historyPosition = 1;
const clearButton = document.getElementById('clear');
const dataStoreButton = document.getElementById('dataStore');
const inputField = document.getElementById('input');
const operationButtons = document.querySelectorAll(".btn");
const resultButton = document.getElementById('result');

const clear = () => {
  inputArr = [];
  document.getElementById('input').innerHTML = inputArr;
}

const calculate = (button) => {
  inputArr.push(button.dataset.value);
  inputField.innerHTML = inputArr.join('');
}

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
  latestAns = result;
  inputArr = [];
}

const getResultForSqrt = () => {
  inputArr = inputArr.slice(1);
  result = Math.sqrt(inputArr.join(''));
  displayResult();
}

//This function is needed for chaining of operators
const newFunc = (inputArr) => {
  return new Function('return ' + inputArr.join(''))();
}

const getResult = () => {
  result = (newFunc(inputArr));
  displayResult();
}

const evaluate = () => {
  historyPosition = 1;
  let result, latestAns;
  if (inputArr[0] != "√") {
    getResult();
  } else {
    getResultForSqrt();
  }
}

// Add Event Listeners
operationButtons.forEach((button) => {
  button.addEventListener('click', (event) => calculate(event.target));
})

clearButton.addEventListener('click', clear);
dataStoreButton.addEventListener('click', (event) => getDataStore())
inputField.innerHTML = inputArr;
resultButton.addEventListener('click', () => evaluate());
