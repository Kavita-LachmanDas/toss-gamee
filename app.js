
///////there are 2 players
alert("welcome to toss game..")
alert("in this game there are 2 players..")
var user1 = prompt("before start the game..\n Whats your Name? \n player 1");
var user2 = prompt("before start the game..\n Whats your Name? \n player 2");

var player1 = prompt("player 1 choose head or tail")
// var player2 ;       
var number = prompt("player 1 plz write the number you choose this 0 ya 1")
//////player 2 jo bache ga wo lelee ga

var random = Math.floor(Math.random()*2);

// jis ka bhi number random number se match hojayeega to wo jeet jaye ga 

if(player1 == "head" && number == random){
  document.write(`congrats your name ${user1} </br> you chose ${player1} </br> you opt ${number} number </br> and number generate is ${random} </br> your number ${number} matches with generated number ${random}`)
} 
else if(player1 == "tail" && number == random){
    document.write(`congrats your name ${user2} </br> you chose ${player1} </br> you opt ${number} number </br> and number generate is ${random} </br> your number ${number} matches with generated number ${random}`)
 }
else{
    alert("sorrrrrrry you lose!!!!!!! try again")
}
 
//  if(player1 == "head" ){
//     player2 = "tail"
//  } else if(player1 == "tail" ){
//     player2 = "head"
//  }

