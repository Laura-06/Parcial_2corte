function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result;

    switch (operation) {
        case 'suma':
            result = num1 + num2;
            break;
        case 'resta':
            result = num1 - num2;
            break;
        case 'multiplicacion':
            result = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'No valido.';
            }
            break;
        default:
            result = 'Error en la operacion';
    }

    document.getElementById('result').value = result;
}