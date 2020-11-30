const chalk = require("chalk");
var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question(chalk.bold("What's you name? : "));
console.log("\n");
console.log(chalk.bold.bgRed("WELCOME " + userName + " to DO YOU KNOW Pranita\n"));

//function
function play(question, answer){
  var userAns = readlineSync.question(question+"\n");
  // console.log("Your answer: " + userAns);
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Correct!"));
    score++;
  } else {
    console.log(chalk.red("Wrong!"));
  }
  console.log("Current score: " + score);
  console.log("-------------------");
}

//array of objects
var queAns = [{
  que: "Where do Pranita live? ",
  ans: "Pune",
},
{
  que: "What's Pranita's favorite school subject? ",
  ans: "Maths",
},
{
  que: "What food does Pranita hate? ",
  ans: "Bitterguard",
},
{
  que: "What's Pranita's favorite season? ",
  ans: "Winter",
},
{
  que: "During which month is Pranita's birthday? ",
  ans: "October",
},
{
  que: "When Pranita is bored, what does she do?? ",
  ans: "Watches a movie",
}];

//data of high scorers
var highScore = [{
  name: "Pranita",
  score: 6,
},
{
  name: "Kartiki",
  score: 5,
}];

//loop
for(var i=0;i<queAns.length;i++){
  var currQue = queAns[i];
  play(currQue.que, currQue.ans);
}
console.log("\n");
console.log("Your final score is "+score+"\n");
// console.log("---------------------");
console.log(chalk.bold("Check out the high scores: \n"));
for(var i=0;i<highScore.length;i++){
  console.log(highScore[i].name + " : " + highScore[i].score);
}

console.log(chalk.inverse("\nIf you have beaten anyone's score then send me the screenshot."));