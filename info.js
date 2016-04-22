var callOfDuty = document.getElementById("item1");
var soccerImage = document.getElementById("item2");
var pokemonimage = document.getElementById("item3");
var soccer = document.getElementById("item4");
//the variables above make it so that all of the variables have an actual name
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

callOfDuty.addEventListener("click", function(){
    info1.innerHTML = "Call of duty is one of my favorite video games as well as it is for many other people";
    info2.innerHTML = "This game is very fun and there new one involves a lot more skill";
    info3.innerHTML = "I have been playing this game since i was around 10 and i have grown very fond towards it";
});
//this is showing what will happen to the image when you click on it and what will actually appear and it is like this for the other eventlisteners as well                       
soccerImage.addEventListener("click", function(){
    info1.innerHTML = "These cleats are very important to me and the sport of soccer because this was a big step towards the new way that cleast are goin got be made and for me this important because this is the firt really expensive pair of cleats i have ever had";
    info2.innerHTML = "Cleats are a very important thing for soccer players because they need these in order to actually play soccer";
    info3.innerHTML = "I love these cleats because of how comftorable they are and how flexible they are which helps me so that i can move a lot faster";
});
pokemonimage.addEventListener("click", function(){
    info1.innerHTML = "Pokemon was the first game that i had ever played for the first time";
    info2.innerHTML = "Also this game made me want to play more video games and expand my mind about how technology works";
    info3.innerHTML = "This was also one of the first things that i bonded with my cousins with";
});
soccer.addEventListener("click", function(){
    info1.innerHTML = "Soccer is one of the first like big things that i have learned as a kid and ever since then i have been playing it";
    info2.innerHTML = "I have been taught by many different people but my dad was the first person to";
    info3.innerHTML = "I still actually love this sport as much as i did when i first played it";
});
        