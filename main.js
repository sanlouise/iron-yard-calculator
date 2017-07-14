let inputArr = [];

// FUNCTION DEFINITIONS
const clear = () => {
  inputArr = [];
  document.getElementById('input').innerHTML = inputArr;
}

const calculate = (button) => {
  console.log(button.innerHTML);
  inputArr.push(button.innerHTML);
  inputField.innerHTML = inputArr.join('');
  console.log("Looking for this! " + inputField.innerHTML);
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

// VARIABLE DECLARATIONS
// DIGITS
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

// OPERATORS
const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', () => calculate(plusButton));

const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', () => calculate(minusButton));

const timesButton = document.getElementById('times');
timesButton.addEventListener('click', () => calculate(timesButton));

const divisionButton = document.getElementById('division');
divisionButton.addEventListener('click', () => calculate(divisionButton));

const modulaButton = document.getElementById('modula');
modulaButton.addEventListener('click', () => calculate(modulaButton));

const dotButton = document.getElementById('dot');
dotButton.addEventListener('click', () => calculate(dotButton));

const squareRootButton = document.getElementById('squareRoot');
squareRootButton.addEventListener('click', () => calculate(squareRootButton));


// INPUT, RESULT, CLEAR BUTTONS
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

const inputField = document.getElementById('input');
inputField.innerHTML = inputArr;

const resultButton = document.getElementById('result');
resultButton.addEventListener('click', () => evaluate());

console.log(inputArr);
