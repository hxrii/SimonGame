let buttonColors = ["red","blue","green","yellow"]
let gamePattern = [];
let userPattern = [];

let nextSequence = ()=>{
    let num = Math.random()*4;
    console.log(num)
    return num;
}

//buttonColors[parseInt(nextSequence())] gives buttonColors[int] where int is the random number generated

gamePattern.push(buttonColors[parseInt(nextSequence())]);
$("#" + buttonColors[parseInt(nextSequence())]).fadeIn(100).fadeOut(100).fadeIn(100);

console.log(gamePattern);

colorChosen= buttonColors[parseInt(nextSequence())]
console.log("./sounds/"+buttonColors[parseInt(nextSequence())]+".mp3")


/*  AUDIO
let audio = new Audio("sounds/" + colorChosen + ".mp3");
audio.play();
*/


$("button").on("click",(e)=>{
    let userChosenColor = e.
})






