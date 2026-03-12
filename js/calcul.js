const buttons = [
  "C", "/", "*", "-",
  "7", "8", "9", "+",
  "4", "5", "6", "=",
  "1", "2", "3",
  "0", "."
];

let first = "";
let second = "";
let operator = "";

const container = document.getElementById("buttons");
const screen = document.getElementById("screen");

buttons.forEach(b => {
  const btn = document.createElement("button");
  btn.textContent = b;

  btn.onclick = function () {

    if (b === "C") {
      screen.value = "";
      first = second = operator = "";
    }

    else if (b === "+" || b === "-" || b === "*" || b === "/") {
      first = screen.value;
      operator = b;
      screen.value = "";
    }

    else if (b === "=") {
      second = screen.value;
      let result = 0;

      if (operator === "+") result = Number(first) + Number(second);
      if (operator === "-") result = Number(first) - Number(second);
      if (operator === "*") result = Number(first) * Number(second);
      if (operator === "/") result = Number(first) / Number(second);

      screen.value = result;
    }

    else {
      screen.value += b;
    }
  };

  container.appendChild(btn);
})  