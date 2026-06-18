function addToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    document.getElementById("result").value =
        eval(document.getElementById("result").value);
}
