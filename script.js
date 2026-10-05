let firstNumber = "";
let secondNumber = "";
let operator = "";
let expression = "";

const display = document.querySelector("#display");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const del = document.querySelector("#delete");


// Numbers
numbers.forEach(button => {

    button.addEventListener("click", () => {

        if (operator === "") {
            firstNumber += button.textContent;
        } 
        else {
            secondNumber += button.textContent;
        }

        updateDisplay();
    });

});


// Operators
operators.forEach(button => {

    button.addEventListener("click", () => {

        if (firstNumber !== "") {
            operator = button.textContent;
            updateDisplay();
        }

    });

});


// Display
function updateDisplay() {

    expression = firstNumber;

    if (operator !== "") {
        expression += " " + operator;
    }

    if (secondNumber !== "") {
        expression += " " + secondNumber;
    }

    display.textContent = expression;
}


// Equals
equals.addEventListener("click", () => {

    let a = Number(firstNumber);
    let b = Number(secondNumber);

    let result;

    if (operator === "+") {
        result = a + b;
    }

    else if (operator === "−") {
        result = a - b;
    }

    else if (operator === "×") {
        result = a * b;
    }

    else if (operator === "÷") {

        if (b === 0) {
            display.textContent = "Error";
            return;
        }

        result = a / b;
    }

    // Show complete operation
    display.textContent =
        firstNumber + " " +
        operator + " " +
        secondNumber + " = " +
        result;

    // Store result for next calculation
    firstNumber = String(result);
    secondNumber = "";
    operator = "";

});


// Clear
clear.addEventListener("click", () => {

    firstNumber = "";
    secondNumber = "";
    operator = "";
    expression = "";

    display.textContent = "0";

});


// Delete
del.addEventListener("click", () => {

    if (operator === "") {

        firstNumber = firstNumber.slice(0, -1);

    } else {

        secondNumber = secondNumber.slice(0, -1);

    }

    updateDisplay();

});


// Decimal
decimal.addEventListener("click", () => {

    if (operator === "") {

        if (!firstNumber.includes(".")) {
            firstNumber += firstNumber === "" ? "0." : ".";
        }

    } else {

        if (!secondNumber.includes(".")) {
            secondNumber += secondNumber === "" ? "0." : ".";
        }

    }

    updateDisplay();

});