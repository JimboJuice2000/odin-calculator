const display = document.querySelector("#display");

function appendToDisplay(input) {
    display.value +=input;
}

// function appendToDisplay(input) {
//     const operators = ['+', '-', '*', '/'];
//     const lastChar = display.value.slice(-1);

//     // If the input is operator and the last character is operator, u replace it
//     if (operators.includes(input) && operators.includes(lastChar)) {
//         display.value = display.value.slice(0, -1) + input;
//     } else {
//         display.value += input;
//     }

//     // If the last character was an operator and u just added a number, calculate it
//     if (operators.includes(lastChar) && !operators.includes(input)) {
//         calculate();
//     }
// }

function clearDisplay() {
    display.value="";
}

function calculate() {
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR"
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
