let inputArr = [];

// FUNCTION DEFINITIONS
const clear = () => {
  inputArr = [];
  document.getElementById('input').innerHTML = inputArr;
}

const calculate = (button) => {
  console.log('button', button.innerHTML);
  inputArr.push(button.innerHTML);
  inputField.innerHTML = inputArr.map(Number).join('');
}

const evaluate = () => {
  let result = eval(inputArr);
  inputField.innerHTML = result;
}

// VARIABLE DECLARATION
const digitButtonOne = document.getElementById('one');
digitButtonOne.addEventListener('click', () => calculate(digitButtonOne));

const digitButtonTwo = document.getElementById('two');
digitButtonTwo.addEventListener('click', () => calculate(digitButtonTwo));

const digitButtonThree = document.getElementById('three');
digitButtonThree.addEventListener('click', () => calculate(digitButtonThree));

const digitButtonFour = document.getElementById('four');
digitButtonFour.addEventListener('click', () => calculate(digitButtonFour));

const digitButtonFive = document.getElementById('five');
digitButtonFive.addEventListener('click', () => calculate(digitButtonFive));

const digitButtonSix = document.getElementById('six');
digitButtonSix.addEventListener('click', () => calculate(digitButtonSix));

const digitButtonSeven = document.getElementById('seven');
digitButtonSeven.addEventListener('click', () => calculate(digitButtonSeven));

const digitButtonEight = document.getElementById('eight');
digitButtonEight.addEventListener('click', () => calculate(digitButtonEight));

const digitButtonNine = document.getElementById('nine');
digitButtonNine.addEventListener('click', () => calculate(digitButtonNine));

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

const inputField = document.getElementById('input');
inputField.innerHTML = inputArr;

console.log(inputArr);
