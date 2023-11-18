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
                let result;
                if (isNaN(num1) && isNaN(num2)) {
                    result = calculateRoman(inputArr[0], operator, inputArr[2]);
                } else {
                    result = calculateResult(num1, operator, num2);
                }
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

    const numButtonsRum = document.querySelectorAll('.num-rum');
    const operatorButtonsRum = document.querySelectorAll('.operator-rum');
    const clearButtonRum = document.querySelector('.clear-rum');
    const calculateButtonRum = document.getElementById('calculate-rum');

    let currentInputRum = '';

    numButtonsRum.forEach(button => {
        button.addEventListener('click', () => {
            currentInputRum += button.value;
            display.value = currentInputRum;
        });
    });

    operatorButtonsRum.forEach(button => {
        button.addEventListener('click', () => {
            currentInputRum += button.value;
            display.value = currentInputRum;
        });
    });

    clearButtonRum.addEventListener('click', () => {
        currentInputRum = '';
        display.value = '';
    });

    calculateButtonRum.addEventListener('click', () => {
        const inputArrayRum = currentInputRum.split(/([+\-*\/])/);
        if (inputArrayRum.length !== 3) {
            display.value = 'Недопустимое выражение';
        } else {
            const operand1Rum = inputArrayRum[0];
            const operatorRum = inputArrayRum[1];
            const operand2Rum = inputArrayRum[2];
            const resultRum = calculateRoman(operand1Rum, operatorRum, operand2Rum);
            display.value = resultRum;
        }
    });

    function calculateRoman(operand1, operator, operand2) {
        const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

        if (!romanNumerals.includes(operand1) || !romanNumerals.includes(operand2)) {
            return 'Недопустимые операнды';
        }

        let result;
        const arabicOperand1 = convertRomanToArabic(operand1);
        const arabicOperand2 = convertRomanToArabic(operand2);

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

        return result.toString();
    }

    function convertRomanToArabic(roman) {
        const romanNumerals = {
            'I': 1,
            'II': 2,
            'III': 3,
            'IV': 4,
            'V': 5,
            'VI': 6,
            'VII': 7,
            'VIII': 8,
            'IX': 9,
            'X': 10,
        };

        return romanNumerals[roman] || 0;
    }
});

