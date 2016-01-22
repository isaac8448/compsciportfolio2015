var button = document.getElementById("submitButton");
var dropDown = document.getElementById("DropdownMenu1");
var input1 = document.getElementById('Number1');
var input2 = document.getElementById('Number2');
var display = document.getElementById('Answer');
var num1, num2, answer;
button.addEventListener("click", doMath);



function doMath() {
  
    if  (dropDown.value == "+"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1, 10) + parseInt(num2, 10);
        display.innerHTML = answer;
    }
    else if (dropDown.value == "-"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1, 10) - parseInt(num2, 10);
        display.innerHTML = answer;

    }
    else if (dropDown.value == "x"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1, 10) * parseInt(num2, 10);
        display.innerHTML = answer;
    }
    
    else if (dropDown.value == "÷"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1, 10) / parseInt(num2, 10);
        display.innerHTML = answer;
    }
    else if (dropDown.value == "^"){
        num1 = input1.value;
        num2 = input2.value;
        answer=Math.pow(num1, num2);
        display.innerHTML = answer;
        
    }
}