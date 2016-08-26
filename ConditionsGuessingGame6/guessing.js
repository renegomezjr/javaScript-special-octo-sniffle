var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt("I am thinking of a number between 1 and 6.  What is it?");

do {

    
if(randomNumber === parseInt(guess)){
    document.write("<p>You got it! " + randomNumber +" is correct!</p>");
    correctGuess = true;
}else if (randomNumber < parseInt(guess)){
    guess = prompt("Nope. You will need to guess lower!");
}else if(randomNumber > parseInt(guess)){
    guess = prompt("Nope. You will need to guess higher!");
}
    }while(!correctGuess)