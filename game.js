let buttonColors = ["red","blue","green","yellow"]
let gamePattern = [];
let userClickedPattern = [];

let nextSequence = ()=>{
    let num = Math.floor(Math.random()*4);

    gamePattern.push(buttonColors[num]);
    $("#" + buttonColors[num]).fadeIn(200).fadeOut(250).fadeIn(200);

    console.log(gamePattern);
    colorChosen= buttonColors[num]
   
   
    console.log("./sounds/"+buttonColors[num]+".mp3")

    

    
    // let audio = new Audio("sounds/" + colorChosen + ".mp3");
    // audio.play();
    
}


let animatePress = (currentColor)=>{
    $('#'+currentColor).addClass("pressed")
    setTimeout((e)=>{
        $("#"+currentColor).removeClass("pressed")
    },100);
} 

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
  
    userClickedPattern.push(userChosenColour); 

   
    let audio = new Audio("sounds/" + userChosenColour + ".mp3");
    animatePress(userChosenColour);
    audio.play();
    
    animatePress(userChosenColour);
  
  });

  






