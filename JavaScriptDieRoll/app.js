var userChoice1 = prompt("Please give me a number");
var userNumber1 = parseInt(userChoice1);
var userChoice2 = prompt("Great! Now give me a top end number, and I will give you a random number between your first and second number.");
var userNumber2 = parseInt(userChoice2);
var dieRoll = Math.floor(Math.random() * (userNumber2 -  userNumber1 + 1)) + userNumber1;
document.write("<p>Here is your random number " + dieRoll + ". Between " + userNumber1 + " and " + userNumber2 + ".</p>");