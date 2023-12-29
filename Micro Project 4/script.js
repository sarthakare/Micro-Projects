let currentInput = '';
let isProcessing = false;

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function resetDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function add() {
    currentInput += '+';
    updateDisplay();
}

function subtract() {
    currentInput += '-';
    updateDisplay();
}

function multiply() {
    currentInput += '*';
    updateDisplay();
}

function divide() {
    currentInput += '/';
    updateDisplay();
}

function percentage() {
    try {
        const result = eval(currentInput) / 100;
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function handleDecimal() {
    const lastNumber = getLastNumber();
    if (!lastNumber.includes('.')) {
        appendToDisplay('.');
    }
}

function getLastNumber() {
    const numbers = currentInput.split(/[-+*/]/);
    return numbers[numbers.length - 1];
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentInput;
}

document.getElementById('keys').addEventListener(function (event) {
    if (isProcessing) {
        return; // Ignore clicks while processing
    }

    const buttonText = event.target.innerText;

    switch (buttonText) {
        case 'DEL':
            deleteLast();
            break;
        case 'RESET':
            resetDisplay();
            break;
        case '=':
            calculateResult();
            break;
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
        case '%':
            percentage();
            break;
        case '.':
            handleDecimal();
            break;
        default:
            appendToDisplay(buttonText);
    }

    // Disable buttons temporarily to prevent multiple clicks
    isProcessing = true;
    setTimeout(function () {
        isProcessing = false;
    }, 100);
});
