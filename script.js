const currentDisplay = document.getElementById('input');
const history = document.getElementById('history');
const buttons = document.querySelectorAll('.button');

console.log(currentDisplay.innerHTML);
let currentInput = currentDisplay.innerHTML;

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
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
        }
        display()
    })
})

function display() {
    if (String(currentInput).length >= 10) {
        currentInput = +currentInput;
        currentDisplay.innerHTML = currentInput.toPrecision(9);
    } else if (+currentInput > 9999999990) {
        currentDisplay.innerHTML = 'Out of Range';
    } else {
        currentDisplay.innerHTML = currentInput;
    }
}

function inputNumber(number) {
    if(number == 0 && !currentDisplay.innerHTML) {
        return;
    } else if(currentDisplay.innerHTML.length >= 10) {
        return;
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
    currentInput = String(currentInput);
    currentInput = currentInput.slice(0, -1);
}

function clear() {
    if(!currentInput) {
        history.innerHTML = '';
    }
    currentInput = '';
}

function squareRoot() {
    const sqrt = Math.sqrt(+currentInput);
    history.innerHTML = `sqrt(${currentDisplay.innerHTML})`;
    currentInput = sqrt;
}

function percentage() {
    
}