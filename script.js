var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        counter++;
        document.getElementById("points").innerHTML=counter;
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkdead = setInterval(function(){
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockleft < 20 && blockleft > 0 && charactertop >= 220){
        block.style.animation = "none";
        block.style.display= "none";
        character.style.animatiion="none";
        character.style.display="none";
        document.getElementById("points").style.left="38%";
        document.getElementById("points").style.color="red";
        document.getElementById("points").innerHTML="Game over";
        document.getElementById("points2").innerHTML="Your score: " + counter;
    }
},10);