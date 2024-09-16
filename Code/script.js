// Create query selector for display and set value to start at 0, also create result variable
const display = document.querySelector("#display");
let displayValue = 0;

let firstOperator;
let operand;
let secondOperator;
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

// Create function to update the display every time the display value changes
function updateDisplay() {
  display.innerText = displayValue;
}

updateDisplay();
