/*
1. Ask questions
2. Keep track of number of correct answers
3. Keep track of number incorrect
4. Use a 2D array to hold question and correct answer

*/
function print(message) {
    var printToDiv = document.getElementById('output');
    printToDiv.innerHTML = message;
}

var message = '';
var correctCount = 0;
var possibleCorrect = 3;
var questionsAndAnswers = [
    ['What is my favorite color?', 'red'],
    ['What is my favorite number?', '3'],
    ['What is my favorite sport?', 'water polo']
]

for(var i = 0; i < questionsAndAnswers.length; i++){
    var answer = prompt(questionsAndAnswers[i][0]);
    if(answer === questionsAndAnswers[i][1]){
        correctCount += 1;
    }
    
}
message += '<p>You got ' + correctCount + ' out of ' + possibleCorrect
    + '. Are you happy with that score?</p>';

print(message);
