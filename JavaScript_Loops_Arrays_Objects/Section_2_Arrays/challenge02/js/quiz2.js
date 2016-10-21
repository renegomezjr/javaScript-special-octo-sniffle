var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correctQuestions = [];
var wrongQuestions = [];

function print(message, correctArray, wrongArray) {
    var printToHTML = document.getElementById('output');
    var newMessage = message;
    if(correctArray.length > 0){
        newMessage += '<p>Here are the questions you got right:</p>';
        newMessage += '<ul>';
        for(var i = 0; i < correctArray.length; i++){
            newMessage += '<li>' + correctArray[i] + '</li>';
        }
        newMessage += '</ul>';
    }
    if(wrongArray.length > 0){
        newMessage += '<p>Here are the questions you got wrong:</p>';
        newMessage += '<ul>';
        for(var i = 0; i < wrongArray.length; i++){
            newMessage += '<li>' + wrongArray[i] + '</li>';
        }
        newMessage += '</ul>';
    }
        printToHTML.innerHTML = newMessage;
}

for(var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    correctQuestions.push(question);
  } else{
        wrongQuestions.push(question);
  }
}

var html = '<p>You got ' + correctAnswers + ' question(s) right.</p>';

print(html, correctQuestions, wrongQuestions);
