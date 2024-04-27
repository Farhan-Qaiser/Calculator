let currentString = "";

function appendNumber(number) {
    currentString += number;
    document.getElementById("screen").value = currentString;
}

function appendOperator(operator) {
    if (currentString === "") return;
    currentString += operator;
    document.getElementById("screen").value = currentString;
}

function clearScreen() {
    currentString = "";
    document.getElementById("screen").value = currentString;
}

function calculate() {
    let result = eval(currentString);
    currentString = result.toString();
    document.getElementById("screen").value = currentString;
}
