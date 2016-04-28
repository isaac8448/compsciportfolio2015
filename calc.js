var button = document.getElementById("submitButton");
var dropDown = document.getElementById("DropdownMenu1");
var input1 = document.getElementById('Number1');
var input2 = document.getElementById('Number2');
var display = document.getElementById('Answer');
var num1, num2, answer;
//the num1 and num2 allow those two numbers to be able to be as big as they can be and they will be answered
button.addEventListener("click", doMath);



function doMath() {
  
    if  (dropDown.value == "+"){
        num1 = input1.value;
        num2 = input2.value;
        answer = parseInt(num1, 10) + parseInt(num2, 10);
        display.innerHTML = answer;
    }
    //this makes the code be able to add numbers and it make it so that it adds no matter how big the number is
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