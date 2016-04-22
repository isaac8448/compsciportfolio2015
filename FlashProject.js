var button = document.getElementById("button");
var x = 0;

/*the variable var x is being used for the code that is selecting random numbers*/
var sound = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3')

/*This is allowing the button to make a noise everytime it is clicked*/

function randomizePage(){
    document.getElementById("body").style.backgroundColor = randomColor();
document.body.appendChild( randomElement()   );
document.body.appendChild(randomElement2()   );
}
/*This function is allowing the two random elements that I have able to be pressed and ot will use all three at the same time*/

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
/*This code runs the random word and it changes the different background 
color the word is in as well as changes the word font and makes it so that 
the button can be spammed and it will still work also it moves it to anywhere on the page*/

function randomElement2(){
    var tempL2 = document.createElement("img");
    tempL2.src = randomImage();
    sound.play();
    tempL2.style.backgroundColor = randomColor();
    tempL2.style.height = "200px";
    tempL2.style.width = "200px";
    tempL2.style.color = randomColor();
    tempL2.style.position = "absolute"
    tempL2.style.top = Math.floor((Math.random() * document.body.scrollHeight ) + 1) + "px";
    tempL2.style.left = Math.floor((Math.random() * document.body.scrollWidth ) + 1) + "px";
    return tempL2;
}

/*This code does the same thing as the functin above except this displays numbers*/
function randomColor(){
    var color;
    sound.play();
    var colors = ["white", "pink","red", "blue", "green", "yellow", "teal", "purple", "orange", "indigo", "aqua", "brown", "crimson", "grey","chartreuse"]
    x =  Math.floor(( Math.random()* colors.length));
    color = colors[x];  
    return color;
}
/*This code is creating a variable that is an array that holds all of the colors to change 
the background and the math equation randomly selects different colors for the background*/
function randomWord(){
    var word;
    var words = ["WOW", "M8", "REKT", "MEXICAN AMERICANS", "YOLO", "PEPE", "PAPI", "WORDS", "PONG", "DEWITTOS", "MTN DEW", "MLG", "SWEG", "NICE","COOL"]
    x =  Math.floor(( Math.random()* words.length));
    word = words[x];  
    return word;
}
/*This also does the same thing as the randomcolor function except it is used for words*/
function randomImage(){
    var imageSrc = ["https://i.ytimg.com/vi/ISsLgApJSCk/hqdefault.jpg", "https://i.ytimg.com/vi/lhTWYFhTHqw/hqdefault.jpg", "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/07f/064/1d0dd06.jpg", "https://i.ytimg.com/vi/sYxQwPyp6Kw/hqdefault.jpg", "https://pbs.twimg.com/media/CbqjK26UYAEX7KZ.png", "https://i.ytimg.com/vi/eyPen81KQhw/maxresdefault.jpg", "http://img.ifcdn.com/images/0fd1966920d5d6e4853aa39e7eff5b7a706d3a86075c2c05fb468c3c85b7f2fb_1.jpg", "https://pbs.twimg.com/media/Bw_Rb8_CcAAnSZf.jpg", "https://pbs.twimg.com/profile_images/614589470835216384/j9aQ8-2d.jpg", "http://www.gifplanets.co.uk/gif3%20(8).gif", "https://media.giphy.com/media/3oEduQ62pRN6Zaugnu/giphy.gif", "http://vignette1.wikia.nocookie.net/mlg-frag/images/2/2e/Coool.gif/revision/latest?cb=20141124012931"];
    x =  Math.floor(( Math.random()* imageSrc.length));
    return imageSrc[x];
}
