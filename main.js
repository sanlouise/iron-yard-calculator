// FUNCTION DEFINITIONS
const clear = () => {
  inputArr = [];
  document.getElementById('input').innerHTML = inputArr;
}

const calculate = (element) => {
  console.log('element', element.innerHTML);
  inputArr.push(this.innerHTML);
}

const evaluate = () => {
  let result = eval(inputArr);
  inputArr.innerHTML = result
}

// VARIABLE DECLARATION
const digitButtonOne = document.getElementById('one');
digitButtonOne.addEventListener('click', () => calculate(digitButtonOne));

const digitButtonTwo = document.getElementById('two');
digitButtonTwo.addEventListener('click', () => calculate(digitButtonTwo));

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

let inputArr = [];
