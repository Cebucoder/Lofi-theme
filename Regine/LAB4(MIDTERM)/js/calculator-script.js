Num1 = document.getElementById("txtNum1");
Num2 = document.getElementById("txtNum2");

function addNumbers() {
    Sum = parseInt(Num1.value) + parseInt(Num2.value);
    alert("SUM: " + Sum);
}
function subtractNumbers() {
    Diff = parseInt(Num1.value) - parseInt(Num2.value);
    alert("DIFFERENCE: " + Diff);
}
function multiplyNumbers() {
    Product = parseInt(Num1.value) * parseInt(Num2.value);
    alert("PRODUCT: " + Product);
}
function divideNumbers() {
    Quo = parseInt(Num1.value) / parseInt(Num2.value);
    alert("QUOTIENT: " + Quo);
}
function clearTextboxes() {
    txtNum1.value = "";
    txtNum2.value = "";
}