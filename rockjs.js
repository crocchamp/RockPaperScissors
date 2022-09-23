let input = prompt("Rock, Paper or Scissors?")
//get player choice

var myArray = [
    "Rock",
    "Paper",
    "Scissors"
  ];
  
  var aiPick = myArray[Math.floor(Math.random()*myArray.length)];
//get ai choice

alert(aiPick)

if(input==="Rock" && aiPick==="Rock") {
    alert("Tie game!") //Rock vs Rock
} else if(input==="Rock" && aiPick==="Paper") {
    alert("You lose!")
}else if(input==="Rock" && aiPick==="Scissors") {
    alert("You win!")
}
