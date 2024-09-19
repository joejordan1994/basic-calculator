// ======== Query Selectors ========

// Select the display and set the initial display value
const display = document.querySelector("#display");
let displayValue = "0";

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
  if (displayValue === "0") {
    displayValue = number.toString();
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

// Append a decimal to the current display value
function appendDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
    updateDisplay();
  }
}

// Handle operator input
function handleOperator(op) {
  if (operator && displayValue === "") {
    operator = op; // Allow changing the operator before entering the second operand
    return;
  }

  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue);
  } else if (operator) {
    secondOperand = parseFloat(displayValue);
    firstOperand = operate(operator, firstOperand, secondOperand);
    displayValue = firstOperand.toString();
    updateDisplay();
  }

  operator = op;
  displayValue = ""; // Reset display value for the next operand
}

// Perform the calculation when the equals button is pressed
function calculateResult() {
  if (operator === null || displayValue === "") {
    return; // Nothing to calculate
  }

  secondOperand = parseFloat(displayValue);
  result = operate(operator, firstOperand, secondOperand);

  if (result === "Error") {
    displayValue = "Error";
  } else {
    displayValue = result.toString();
    firstOperand = result; // Allow for continued operations
  }

  operator = null;
  updateDisplay();
}

// Reset the calculator
function clearCalculator() {
  displayValue = "0";
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

function multiplyFunc(a, b) {
  return a * b;
}

function divideFunc(a, b) {
  if (b === 0) {
    return "Error"; // Prevent division by zero
  }
  return a / b;
}

function percent(a) {
  return (parseFloat(a) / 100).toString();
}

function toggleSign(a) {
  return (parseFloat(a) * -1).toString(); // Switches between positive and negative
}

// ======== Operation Logic ========

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiplyFunc(a, b);
    case "/":
      return divideFunc(a, b);
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
