// JavaScript File
var button = document.getElementById("button");
var x = 0;
var sound = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3')
function randomizePage(){
    document.getElementById("body").style.backgroundColor = randomColor();
document.body.appendChild( randomElement()   );
document.body.appendChild(randomElement2()   );

}
button.addEventListener("click", randomizePage);

function randomElement(){
    var tempL = document.createElement("div");
    tempL.innerHTML = randomWord();
    tempL.style.backgroundColor = randomColor();
    tempL.style.color = randomColor();
    tempL.style.position = "absolute"
    tempL.style.top = Math.floor((Math.random() * document.body.scrollHeight ) + 1) + "px";
    tempL.style.left = Math.floor((Math.random() * document.body.scrollWidth ) + 1) + "px";
    sound.play();
    return tempL;
}

function randomElement2(){
    var tempL2 = document.createElement("div");
    tempL2.innerHTML = randomNumber();
    sound.play();
    tempL2.style.backgroundColor = randomColor();
    tempL2.style.color = randomColor();
    tempL2.style.position = "absolute"
    tempL2.style.top = Math.floor((Math.random() * document.body.scrollHeight ) + 1) + "px";
    tempL2.style.left = Math.floor((Math.random() * document.body.scrollWidth ) + 1) + "px";
    return tempL2;
}

function randomColor(){
    var color;
    sound.play();
    var colors = ["white", "black", "red", "blue", "green", "yellow", "teal", "purple", "orange", "indigo", "aqua", "brown", "crimson", "grey","chartreuse"]
    x =  Math.floor(( Math.random()* colors.length));
    color = colors[x];  
    return color;
}

function randomWord(){
    var word;
    var words = ["WOW", "M8", "REKT", "MEXICAN AMERICANS", "YOLO", "PEPE", "PAPI", "WORDS", "PONG", "DEWITTOS", "MTN DEW", "MLG", "SWEG", "NICE","COOL"]
    x =  Math.floor(( Math.random()* words.length));
    word = words[x];  
    return word;
}
function randomNumber(){
    var number;
    var numbers = ["84", "69", "96", "21", "48", "53", "650", "88", "6", "10", "7", "1", "94", "72","66"]
    x =  Math.floor(( Math.random()* numbers.length));
    number = numbers[x];  
    return number;
}

