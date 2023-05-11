Num1 = document.getElementById("txtNum1");
Num2 = document.getElementById("txtNum2");

function btnA() {
    Sum = parseInt(Num1.value) + parseInt(Num2.value);
    alert("SUM: " + Sum);
}
function btnS() {
    Diff = parseInt(Num1.value) - parseInt(Num2.value);
    alert("DIFFERENCE: " + Diff);
}
function btnM() {
    Product = parseInt(Num1.value) * parseInt(Num2.value);
    alert("PRODUCT: " + Product);
}
function btnD() {
    Quo = parseInt(Num1.value) / parseInt(Num2.value);
    alert("QUOTIENT: " + Quo);
}
function btnC() {
    txtNum1.value = "";
    txtNum2.value = "";
}