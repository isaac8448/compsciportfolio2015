// JavaScript File
var button = document.getElementById("button");
var number = 0;
var number2 = 0;
var color;
var color2;
var colors = ["white", "black", "red", "blue", "green", "yellow", "teal", "purple", "orange", "indigo", "aqua", "brown", "crimson", "grey","chartreuse"];
function changeBackground(){
    document.getElementById("body").style.backgroundColor = color;
}

button.addEventListener("click", function(){
    changeBackground();
    changeBorder();
})

function changeBorder(){
    document.getElementById("body").style.color = color2;
}


function randomNumber()
{
    number =  Math.floor((Math.random()*14));
  color = colors[number];
}
function randomNumber2()
{
    number2 =  Math.floor((Math.random()*14));
  color2 = colors[number2];
}
