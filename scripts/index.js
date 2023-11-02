document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const numButtons = document.querySelectorAll(".num-btn");
    const operatorButtons = document.querySelectorAll(".operator-btn");
    const clearButton = document.querySelector(".clear-btn");
    const equalButton = document.querySelector(".equal-btn");

    let currentInput = "";
    let currentOperator = null;

    numButtons.forEach(button => {
        button.addEventListener("click", function () {
            currentInput += button.textContent;
            display.value = currentInput;
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (currentInput !== "") {
                currentOperator = button.textContent;
                currentInput += " " + currentOperator + " ";
                display.value = currentInput;
            }
        });
    });

    clearButton.addEventListener("click", function () {
        currentInput = "";
        currentOperator = null;
        display.value = "";
    });

    equalButton.addEventListener("click", function () {
        if (currentInput !== "") {
            const inputArr = currentInput.split(" ");
            const num1 = parseFloat(inputArr[0]);
            const operator = inputArr[1];
            const num2 = parseFloat(inputArr[2]);

            if (isNaN(num1) || isNaN(num2)) {
                display.value = "Ошибка: Неверный ввод";
                return;
            }

            if (num2 === 0 && operator === "/") {
                display.value = "Ошибка: Деление на 0";
            } else {
                const result = calculateResult(num1, operator, num2);
                display.value = result;
            }
        }
    });

    function calculateResult(num1, operator, num2) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return "Ошибка: Неверный оператор";
        }
    }
});


const numButtons = document.querySelectorAll('.num-rum');
const operatorButtons = document.querySelectorAll('.operator-rum');
const clearButton = document.querySelector('.clear-rum');
const calculateButton = document.getElementById('calculate-rum');

let currentInput = '';

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.value;
        display.value = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.value;
        display.value = currentInput;
    });
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    display.value = '';
});

calculateButton.addEventListener('click', () => {
    const inputArray = currentInput.split(/([+\-*\/])/);
    if (inputArray.length !== 3) {
        display.value = 'Недопустимое выражение';
    } else {
        const operand1 = inputArray[0];
        const operator = inputArray[1];
        const operand2 = inputArray[2];
        const result = calculateRoman(operand1, operator, operand2);
        display.value = result;
    }
});

function calculateRoman(operand1, operator, operand2) {
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    if (!romanNumerals.includes(operand1) || !romanNumerals.includes(operand2)) {
        return 'Недопустимые операнды';
    }

    let result;
    const arabicOperand1 = romanNumerals.indexOf(operand1) + 1;
    const arabicOperand2 = romanNumerals.indexOf(operand2) + 1;

    switch (operator) {
        case '+':
            result = arabicOperand1 + arabicOperand2;
            break;
        case '-':
            result = arabicOperand1 - arabicOperand2;
            break;
        case '*':
            result = arabicOperand1 * arabicOperand2;
            break;
        case '/':
            result = arabicOperand1 / arabicOperand2;
            break;
        default:
            return 'Недопустимая операция';
    }

    if (result < 1 || result > 10) {
        return 'Превышен диапазон от I до X';
    }

    return romanNumerals[result - 1];
}



