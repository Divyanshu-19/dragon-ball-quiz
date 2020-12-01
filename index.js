const readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var level = {
  level1: [
    {
      question: `We all know that BoDuring the Saiyan Saga, how does Goku reach King Kai's planet 
      [A]By making a wish with the Dragon Balls
      [B]Via high speed vehicle 
      [C]By traveling along Snake Way
      [D]By teleporting there instantly\n`,
      ans: "C"
    },
    {
      question: `What item is used to restore a wounded Z fighter to full health? 
      [A]Z Sword
      [B]Saiyan hair 
      [C]Capsule Corp medicine
      [D]Senzu bean\n`,
      ans: "D"
    },
    {
      question: `What's the highest Super Saiyan level attained by Vegeta in DBZ?
      [A]Super Saiyan 1
      [B]Super Saiyan 2
      [C]Super Saiyan 3
      [D]Super Saiyan 4\n`,
      ans: "B"
    },
    {
      question: `What's Goku's wife's name? 
      [A]Cha Chi
      [B]Cho Cha
      [C]Chi Chi
      [D]Chi Cha\n`,
      ans: "C"
    },
    {
      question: `Who does Captain Ginyu serve? 
      [A]Cell
      [B]Frieza
      [C]Lord Slug
      [D]Turles\n`,
      ans: "B"
    }
  ],
  level2: [
    {
      question: `Where is Goku when he transforms into a Super Saiyan for the first time? 
      [A]Planet Vegeta
      [B]Planet Namek
      [C]Planet Earth
      [D]King Kai's Planet\n`,
      ans: "B"
    },
    {
      question: `What are the names of King Kai's little buddies? 
      [A]Bubbles and Gregory
      [B]Bobo and John
      [C]Bernie and Jim
      [D]Bonobo and Garrett\n`,
      ans: "A"
    },
    {
      question: `Why does Vegeta allow himself to be possessed by Babidi?
      [A]In order to win the World Martial Arts Tournament
      [B]In order to fight Dabura
      [C]In order to discover Babidi's true plan
      [D]In order to fight Goku\n`,
      ans: "D"
    },
    {
      question: `At what point in the series do the Z fighters encounter Saibamen?
      [A]During the Cell saga
      [B]During the Namek saga
      [C]During the Buu saga
      [D]During the Saiyan saga\n`,
      ans: "D"
    },
    {
      question: `How is Krillin able to recover so quickly after second form Frieza impales him?
      [A]He ate a Senzu bean
      [B]Someone wished for his full health with the Dragon Balls
      [C]He was healed by Dende
      [D]He tricked Frieza - he was never impaled in the first place\n`,
      ans: "C"
    },
  ],
  level3: [
    {
      question: `Which DBZ character is Buu's best friend?
      [A]Bulma
      [B]Dr. Brief
      [C]Hercule
      [D]Goten\n`,
      ans: "C"
    },
    {
      question: `During the Namek Saga, which character did Bulma have a crush on?
      [A]Dodoria
      [B]Zarbon
      [C]Frieza
      [D]Recoome\n`,
      ans: "B"
    },
    {
      question: `What planet does Vegeta come from?
      [A]Planet Z103
      [B]Planet Frieza
      [C]Planet Vegeta
      [D]Planet of the Kais\n`,
      ans: "C"
    },
    {
      question: `When Cell is in his first form, how does he slowly grow stronger?
      [A]By training in the Hyperbolic Time Chamber
      [B]By engaging in deep meditation
      [C]By absorbing his victims
      [D]By fusing with a Namekian\n`,
      ans: "C"
    },
    {
      question: `What happens when Dabura spits on someone?
      [A]They turn to liquid
      [B]They turn to candy
      [C]They turn to stone
      [D]They grow a beard\n`,
      ans: "C"
    }
  ],
}

console.log("Welcome to the DBZ Quiz");
console.log("RULES");
console.log("Level 1: 5 Questions| correct answer +1| wrong answer -1");
console.log("Level 1: 5 Questions| correct answer +2| wrong answer -2");
console.log("Level 1: 5 Questions| correct answer +3| wrong answer -3");
var userName = readlineSync.question("Enter your name: ");
console.log();
console.log("You are entering level 1");
console.log("------------------------");

var currentLevel = level.level1
for(var i=0; i< currentLevel.length; i++){
  var userAnswer = readlineSync.question(currentLevel[i].question+ "choose your answer: ");
  if(userAnswer.toUpperCase() === currentLevel[i].ans){
    score++;
    console.log(chalk.black.bgGreen("Correct Answer") , ", Score:",score,"(+1)");
  }
  else{
    score--;
    console.log(chalk.bgRedBright("Wrong Answer") , ", Score:",score,"(-1)");
  }

  console.log();
}

if(score>3){
  console.log("Congrats!!You passed level 1, Now entering level 2");
  console.log("------------------------");
  var currentLevel = level.level2
  for(var i=0; i< currentLevel.length; i++){
  var userAnswer = readlineSync.question(currentLevel[i].question+ "choose your answer: ");
  if(userAnswer.toUpperCase() === currentLevel[i].ans){
    score+=2;
    console.log(chalk.black.bgGreen("Correct Answer") , ", Score:",score,"(+2)");
  }
  else{
    score-=2;
    console.log(chalk.bgRedBright("Wrong Answer") , ", Score:",score,"(-2)");
  }

  console.log();
}

}
else{
  console.log("Thanks For Playing!! Your final score is", score);
}

if(score>10){
  console.log("Congrats!!You passed level 2, Now entering level 3");
  console.log("------------------------");
  var currentLevel = level.level3
  for(var i=0; i< currentLevel.length; i++){
  var userAnswer = readlineSync.question(currentLevel[i].question+ "choose your answer: ");
  if(userAnswer.toUpperCase() === currentLevel[i].ans){
    score+=3;
    console.log(chalk.black.bgGreen("Correct Answer") , ", Score:",score,"(+3)");
  }
  else{
    score-=3;
    console.log(chalk.bgRedBright("Wrong Answer") , ", Score:",score,"(-3)");
  }

  console.log();
}

}
else{
  console.log("Thanks For Playing!! Your final score is", score);
}