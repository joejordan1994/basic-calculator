document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  let currentInput = "";
  let operator = "";
  let previousValue = "";

  function updateDisplay(value) {
    display.textContent = value;
  }

  function calculate() {
    try {
      // Evaluate the expression using the `eval` function
      // Note: For a real-world application, use a safer alternative to eval for security reasons
      currentInput = eval(currentInput.replace(/%/g, "/100")).toString();
      updateDisplay(currentInput);
    } catch (error) {
      updateDisplay("Error");
    }
  }

  function handleButtonClick(e) {
    const button = e.target;
    const value = button.value;
    const key = button.dataset.key;

    if (button.classList.contains("operand")) {
      currentInput += value;
      updateDisplay(currentInput);
    } else if (button.classList.contains("operator")) {
      if (currentInput === "" && value !== "-") return;
      currentInput += ` ${value} `;
      updateDisplay(currentInput);
    } else if (button.classList.contains("clear")) {
      currentInput = "";
      updateDisplay("0");
    } else if (button.classList.contains("percent")) {
      currentInput += "%";
      updateDisplay(currentInput);
    } else if (button.classList.contains("sign")) {
      currentInput = currentInput.startsWith("-")
        ? currentInput.slice(1)
        : `-${currentInput}`;
      updateDisplay(currentInput);
    } else if (button.classList.contains("equals")) {
      calculate();
    }
  }

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  // Optional: Handle keyboard input for convenience
  document.addEventListener("keydown", function (event) {
    const keyMap = {
      0: "#zero",
      1: "#one",
      2: "#two",
      3: "#three",
      4: "#four",
      5: "#five",
      6: "#six",
      7: "#seven",
      8: "#eight",
      9: "#nine",
      "+": "#plus",
      "-": "#minus",
      "*": "#multiply",
      "/": "#divide",
      ".": "#decimal",
      Enter: "#equals",
      Escape: "#clear",
    };

    if (keyMap[event.key]) {
      document.querySelector(keyMap[event.key]).click();
    } else if (event.key === "%") {
      document.querySelector("#percent").click();
    } else if (event.key === "+") {
      document.querySelector("#plus").click();
    } else if (event.key === "-") {
      document.querySelector("#minus").click();
    } else if (event.key === "*") {
      document.querySelector("#multiply").click();
    } else if (event.key === "/") {
      document.querySelector("#divide").click();
    }
  });
});
