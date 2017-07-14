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
  timesDataStoragePressed = 0;
  inputArr.push(button.dataset.value);
  inputField.innerHTML = inputArr.join('');
}

// STORE
let timesDataStoragePressed = 0;
let currentDataStorageItem;

const dataStoreButton = document.getElementById('dataStore');
dataStoreButton.addEventListener('click', (event) => getDataStore())

const getDataStore = () => {
  // Use pop here, we want to get rid of the last arr element as the button
  // can be pressed multiple times.
  if (dataStore.length > 0) {
    currentDataStorageItem = dataStore.pop()
    inputField.innerHTML = currentDataStorageItem;
  } else {
    inputField.innerHTML = "Can't go back more!"
  }
}



const evaluate = () => {
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

console.log(dataStore);
