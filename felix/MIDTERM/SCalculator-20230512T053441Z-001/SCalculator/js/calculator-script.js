
function addNumbers(){
    var num1, num2,result;
    
    num1 = Number(document.getElementById("txtNum1").value);
    num2 = Number(document.getElementById("txtNum2").value);
    result = num1 + num2;
    
    alert("The Sum is: " + result);
    }

function subNumbers(){
    var num1, num2,result;
        
    num1 = Number(document.getElementById("txtNum1").value);
    num2 = Number(document.getElementById("txtNum2").value);
    result = num1 - num2;
        
    alert("The different is: " + result);
    }

function divNumbers(){
    var num1, num2,result;
            
     num1 = Number(document.getElementById("txtNum1").value);
    num2 = Number(document.getElementById("txtNum2").value);
    result = num1 / num2;
            
    alert("The quotient is: " + result);
      }

 function prodNumbers(){
    var num1, num2,result;
                
    num1 = Number(document.getElementById("txtNum1").value);
    num2 = Number(document.getElementById("txtNum2").value);
    result = num1 * num2;
                
    alert("The product is: " + result);
     }

     function Clear(){
 document.getElementById("txtNum1").value="";
 document.getElementById("txtNum2").value="";

 
     }

