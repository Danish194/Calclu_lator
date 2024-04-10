function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultElement = document.getElementById('result');
    var result;
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = '<p class="error">Please enter valid numbers.</p>';
        return;
    }
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                resultElement.innerHTML = '<p class="error">Cannot divide by zero!</p>';
                return;
            }
            break;
        default:
            resultElement.innerHTML = '<p class="error">Invalid operation</p>';
            return;
    }
    resultElement.innerHTML = '<p>Result: ' + result + '</p>';
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        calculate();
    }
});
