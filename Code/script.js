// Create query selector for display and set value to start at 0, also create result variable
const display = document.querySelector("#display");
let displayValue = 0;

let firstOperand;
let operator;
let secondOperand;
let result;

// Create query selectors to give functionality to the calculator buttons
const buttons = {
  clear: document.querySelector("#clear"),
  sign: document.querySelector("#sign"),
  percent: document.querySelector("#percent"),
  divide: document.querySelector("#divide"),

  seven: document.querySelector("#seven"),
  eight: document.querySelector("#eight"),
  nine: document.querySelector("#nine"),
  multiply: document.querySelector("#multiply"),

  four: document.querySelector("#four"),
  five: document.querySelector("#five"),
  six: document.querySelector("#six"),
  minus: document.querySelector("#minus"),

  one: document.querySelector("#one"),
  two: document.querySelector("#two"),
  three: document.querySelector("#three"),
  plus: document.querySelector("#plus"),

  zero: document.querySelector("#zero"),
  decimal: document.querySelector("#decimal"),
  equals: document.querySelector("#equals"),
};

// Create functions for basic functionality
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error"; // Prevent division by zero
  }
  return a / b;
}

function percent(a) {
  return a / 100;
}

function toggleSign(a) {
  return -a; // Switches between positive and negative
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

// Create function to update the display every time the display value changes
function updateDisplay() {
  display.innerText = displayValue;
}

updateDisplay();
