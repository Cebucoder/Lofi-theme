function intialize()
{
  document.getElementById("txtNum1").value = "0";
  document.getElementById("txtNum2").value = "0";
} 

function sum()
{
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var sum = num1 + num2;
  alert(`Result: ${sum}`);
}
  
function minus()
{
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var sum = num1 - num2;
  alert(`Result: ${sum}`);
}

function multiply()
{
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var sum = num1 * num2;
  alert(`Result: ${sum}`);
}

function divide() 
{
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var sum = num1 / num2;
  alert(`Result: ${sum}`);
}
  
  const inputField = document.getElementById("txtNum1");
  const inputField2 = document.getElementById("txtNum2");
  const btnClear = document.getElementById("btnClear");

  btnClear.addEventListener('click',()=>{
    inputField.value = " ";
    inputField2.value = " ";
  })