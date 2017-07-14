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
let currentDataStorageItem;
let historyPosition = 1

const dataStoreButton = document.getElementById('dataStore');
dataStoreButton.addEventListener('click', (event) => getDataStore())

const getDataStore = () => {
  if (dataStore.length > 0) {
    historyPosition++
    //Create temporary variable - don't want to modify the actual dataStorage array
    let tempHistory = dataStore[dataStore.length - historyPosition]
    inputField.innerHTML = tempHistory;
  } else {
    inputField.innerHTML = "No more previous answers.."
  }
}

const evaluate = () => {
  historyPosition = 1
  if (inputArr[0] != "√") {
    let result = eval(inputArr.join(''));
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
