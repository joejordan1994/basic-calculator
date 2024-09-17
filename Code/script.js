// ======== Query Selectors ========

// Select the display and set the initial display value
const display = document.querySelector("#display");
let displayValue = 0;

// Define variables for operands, operator, and result
let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;

// Select the calculator buttons
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

// ======== Button Event Listeners ========

// Functional buttons
buttons.clear.addEventListener("click", clearCalculator);
buttons.sign.addEventListener("click", () => {
  displayValue = toggleSign(displayValue);
  updateDisplay();
});
buttons.percent.addEventListener("click", () => {
  displayValue = percent(displayValue);
  updateDisplay();
});
buttons.divide.addEventListener("click", () => handleOperator("/"));
buttons.multiply.addEventListener("click", () => handleOperator("*"));
buttons.minus.addEventListener("click", () => handleOperator("-"));
buttons.plus.addEventListener("click", () => handleOperator("+"));
buttons.equals.addEventListener("click", calculateResult);

// Number buttons
buttons.zero.addEventListener("click", () => appendNumber(0));
buttons.one.addEventListener("click", () => appendNumber(1));
buttons.two.addEventListener("click", () => appendNumber(2));
buttons.three.addEventListener("click", () => appendNumber(3));
buttons.four.addEventListener("click", () => appendNumber(4));
buttons.five.addEventListener("click", () => appendNumber(5));
buttons.six.addEventListener("click", () => appendNumber(6));
buttons.seven.addEventListener("click", () => appendNumber(7));
buttons.eight.addEventListener("click", () => appendNumber(8));
buttons.nine.addEventListener("click", () => appendNumber(9));

// Decimal button
buttons.decimal.addEventListener("click", appendDecimal);

// ======== Calculator Functions ========

// Append a number to the current display value
function appendNumber(number) {
  displayValue = displayValue * 10 + number;
  updateDisplay();
}

// Append a decimal to the current display value
function appendDecimal() {
  if (!displayValue.toString().includes(".")) {
    displayValue += ".";
    updateDisplay();
  }
}

// Handle operator input
function handleOperator(op) {
  firstOperand = displayValue;
  operator = op;
  displayValue = 0; // Reset display value for second operand
  updateDisplay();
}

// Perform the calculation when the equals button is pressed
function calculateResult() {
  secondOperand = displayValue;
  result = operate(operator, firstOperand, secondOperand);
  displayValue = result;
  updateDisplay();
}

// Reset the calculator
function clearCalculator() {
  displayValue = 0;
  firstOperand = null;
  secondOperand = null;
  operator = null;
  result = null;
  updateDisplay();
}

// ======== Basic Operations ========

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

// ======== Operation Logic ========

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

// ======== Update Display ========

function updateDisplay() {
  display.innerText = displayValue;
}

// Initial display update
updateDisplay();
