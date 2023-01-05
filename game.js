let buttonColors = ["red","blue","green","yellow"]
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

var started = false;


let startOver = (e)=>{
    level =0;
    started = false;
    gamePattern = [];
    userClickedPattern = [];
}



$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
  
    userClickedPattern.push(userChosenColour); 

   
    let audio = new Audio("sounds/" + userChosenColour + ".mp3");
    animatePress(userChosenColour);
    audio.play();
    
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1)

    console.log(userClickedPattern)
    console.log(gamePattern)
  
  });
  

function checkAnswer(currentLevel) {
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
       if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      } }

    else {
      console.log("wrong");
      animateGameOver();
      $("#level-title").text("Game Over. Press Any Key to restart");
      let audio = new Audio("sounds/wrong.mp3");
      audio.play();
      audio.play();
      startOver();


    }
}

let animateGameOver = (e)=>{
    $('body').addClass("game-over")
    setTimeout((e)=>{
        $('body').removeClass("game-over")
    },300);
} 


let nextSequence = ()=>{
    level ++;
    $("#level-title").text("Level "+level);
   

    let num = Math.floor(Math.random()*4);

    gamePattern.push(buttonColors[num]);
    $("#" + buttonColors[num]).fadeIn(200).fadeOut(250).fadeIn(200);

    console.log(gamePattern);
    colorChosen= buttonColors[num]
   
   
    console.log("./sounds/"+buttonColors[num]+".mp3")

    

    
    let audio = new Audio("sounds/" + colorChosen + ".mp3");
    audio.play();
    
}


let animatePress = (currentColor)=>{
    $('#'+currentColor).addClass("pressed")
    setTimeout((e)=>{
        $("#"+currentColor).removeClass("pressed")
    },100);
} 




// let timer = (e)=>{
//     if(e==0)
//     return;
//     else
//     {
//         timer(e-1);
//     }
//     setTimeout((e)=>{
//         $("#level-title").text("3");
//     },1000);
//     e--;

//     console.log(e);

// }

$(document).keypress(function() {
    if (!started) {
  
       $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });





