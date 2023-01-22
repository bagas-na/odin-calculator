const currentDisplay = document.getElementById('input');
const history = document.getElementById('history');
const buttons = document.querySelectorAll('.button');

console.log(currentDisplay.innerHTML);
let currentInput = currentDisplay.innerHTML;
let tempInput = 0;
let currentOperation = null;
let tempOperation = null;

let isPercentage = false;

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.value);
        switch(e.target.value) {
            case '1': inputNumber(e.target.value); break;
            case '2': inputNumber(e.target.value); break;
            case '3': inputNumber(e.target.value); break;
            case '4': inputNumber(e.target.value); break;
            case '5': inputNumber(e.target.value); break;
            case '6': inputNumber(e.target.value); break;
            case '7': inputNumber(e.target.value); break;
            case '8': inputNumber(e.target.value); break;
            case '9': inputNumber(e.target.value); break;
            case '0': inputNumber(e.target.value); break;
            case '.': decimal(); break;
            case 'del': backSpace(); break;
            case 'clr': clear(); break;
            case 'sqrt': squareRoot(); break;
            case '%': percentage(); break;
            case '÷': currentOperation = '÷'; operand(); break;
            case '×': currentOperation = '×'; operand(); break;
            case '-': currentOperation = '-'; operand(); break;
            case '+': currentOperation = '+'; operand(); break;
            case'=': evaluate(); break;
        }
        currentDisplay.innerHTML = display(currentInput)
    })
})

function display(currentInput) {
    if(isPercentage) {
        return String(100*currentInput).substring(0, 8) + '%';
    } else {
        return String(currentInput).substring(0, 9)
    }
}

function inputNumber(number) {
    if(number == 0 && !currentDisplay.innerHTML) {
        return;
    } else if(currentDisplay.innerHTML.length >= 9) {
        return;
    } else if(isPercentage) {
        currentInput = 0.01 * (String(100*currentInput) + String(number));
    } else {
        currentInput = String(currentInput) + String(number);
    }
}

function decimal() {
    console.log(currentDisplay.innerHTML.includes('.'));
    if(currentDisplay.innerHTML.includes('.')) {
        return;
    } else if(currentDisplay.innerHTML.length >= 10) {
        return;
    } else {
        currentInput = String(currentInput) + '.';
    }
}

function backSpace() {
    if(isPercentage) {
        currentInput = 0.01 * String(100*currentInput).slice(0, -1);
    } else {
        currentInput = String(currentInput).slice(0, -1);
    }
}

function clear() {
    if(!currentInput) {
        history.innerHTML = '';
        tempInput = 0;
    }
    currentInput = '';
}

function squareRoot() {
    const sqrt = Math.sqrt(+currentInput);
    history.innerHTML = `sqrt(${currentDisplay.innerHTML})`;
    currentInput = sqrt;
    tempInput = currentInput;
}

function percentage() {
    if (!isPercentage) {
        isPercentage = true;
    } else {
        isPercentage = false;
    }
}

function operand() {
    console.log(`operand, currentoperation = ${currentOperation}`);
    if(!tempInput) {
        history.innerHTML = String(display(currentInput)) + String(currentOperation);
        tempOperation = currentOperation;
        tempInput = currentInput;
        currentInput = '';
    } else if(!currentInput || !tempOperation) {
        history.innerHTML = String(display(tempInput)) + String(currentOperation);
        tempOperation = currentOperation;
        currentInput = '';
    } else {
        tempInput = operate(tempOperation, tempInput, currentInput);
        currentInput = '';
        history.innerHTML = String(display(tempInput)) + String(currentOperation);
        tempOperation = currentOperation;
    }  
}

function evaluate() {
    console.log(currentOperation);
    if (!currentOperation) {
        return;
    } else {
        history.innerHTML = String(display(tempInput)) + String(currentOperation) + String(display(currentInput)) + '=';
        currentInput = operate(tempOperation, tempInput, currentInput);
        tempInput = currentInput;
        currentOperation = null;
        tempOperation = null;
    }
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+': return add(a, b);
        case '-': return substract(a, b);
        case '×': return multiply(a, b);
        case '÷': if (b === 0) return null
                  else return divide(a, b);
        default: return null;
    }
}

function add(a, b) {
    return a + b
  }
  
function substract(a, b) {
    return a - b
    }

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}
