let currentDisplay = '0';
let isNewInput = true;

const displayEl = document.getElementById('display');

function updateDisplay() {
    displayEl.textContent = currentDisplay.replace('*', '×').replace('/', '÷');
    displayEl.scrollLeft = displayEl.scrollWidth;
}

function clearDisplay() {
    currentDisplay = '0';
    isNewInput = true;
    updateDisplay();
}

function deleteLast() {
    if (isNewInput) return;
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay === '' || currentDisplay === '-') {
        currentDisplay = '0';
        isNewInput = true;
    }
    updateDisplay();
}

function appendNumber(number) {
    if (isNewInput || currentDisplay === '0') {
        if (number === '.') {
            currentDisplay = '0.';
        } else {
            currentDisplay = number;
        }
        isNewInput = false;
    } else {
        // Prevent multiple decimals in the same number grouping
        if (number === '.' && currentDisplay.includes('.')) {
            const parts = currentDisplay.split(/[+\-*/]/);
            if (parts[parts.length - 1].includes('.')) return;
        }
        currentDisplay += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (isNewInput && currentDisplay === '0' && operator === '-') {
        currentDisplay = '-';
        isNewInput = false;
        updateDisplay();
        return;
    }
    const lastChar = currentDisplay.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentDisplay = currentDisplay.slice(0, -1) + operator;
    } else {
        currentDisplay += operator;
    }
    isNewInput = false;
    updateDisplay();
}

function calculate() {
    try {
        let sanitized = currentDisplay.replace(/[^-()\d/*+.]/g, '');
        if (sanitized === '') return;
        
        // Standard eval for simple client-side calculation capability
        let result = eval(sanitized);
        
        // Handle floating point precision issues
        result = Math.round(result * 10000000000) / 10000000000;
        
        currentDisplay = String(result);
        isNewInput = true;
        updateDisplay();
    } catch (e) {
        currentDisplay = 'Error';
        isNewInput = true;
        updateDisplay();
    }
}