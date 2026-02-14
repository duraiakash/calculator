function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    document.getElementById("output-value").innerText = num;
}

let operators = document.getElementsByClassName("operator");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {

        if (this.id === "clear") {
            printHistory("");
            printOutput("");
        }

        else if (this.id === "backspace") {
            let output = getOutput();
            output = output.substr(0, output.length - 1);
            printOutput(output);
        }

        else if (this.id === "=") {
            let result = getHistory() + getOutput();
            if (result) {
                printOutput(eval(result));
                printHistory("");
            }
        }

        else {
            let output = getOutput();
            let history = getHistory();

            if (output === "" && history !== "") {
                history = history.substr(0, history.length - 1);
            }

            if (output !== "" || history !== "") {
                printHistory(history + output + this.id);
                printOutput("");
            }
        }
    });
}

let numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        let output = getOutput();
        printOutput(output + this.id);
    });
}
