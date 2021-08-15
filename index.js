var readlineSync = require('readline-sync');



var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("U r right!!!")
    score++
  } else {
    console.log("U r wrong!!")
  }
  console.log("Your score is "
    + score)
}

questionOne = {
  question: "Where I live?",
  answer: "Agra"
}

questionTwo = {
  question: "What is my gaming name?",
  answer: "Ultron"
}

questionThree = {
  question: "Who is my favorite villian?",
  answer: "Thanos"
}

questionFour = {
  question: "Who is my favorite superhero?",
  answer: "Ironman"
}

questionFive = {
  question: "Which is my favorite sad song?",
  answer: "Happier"
}

var question = [questionOne, questionTwo, questionThree, questionFour, questionFive]
var userName = readlineSync.question('Enter your username ');
console.log('Hi ' + userName + '!');

for (var i = 0; i < question.length; i++) {
  play(question[i].question, question[i].answer)
}

console.log("YAY u completed the game.Final Score is " + score)