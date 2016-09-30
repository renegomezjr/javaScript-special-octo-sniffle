var upper = 10000
var randomNumber = getRandomNumber(upper);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

while( guess !== randomNumber ) {
  guess = getRandomNumber(upper);
  guessCount += 1;
  
}
  
document.write('<h1>The computer finally got it!</h1>');
document.write('<p>It took you ' + guessCount + ' tries to guess the number ' + randomNumber + '</p>');