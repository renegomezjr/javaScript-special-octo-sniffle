var questions = 3;
var numberOfQuestions = " [" + questions + " questions left]";
var noun = prompt("Hey, let's make a story together. Give me a noun." + numberOfQuestions);
questions -= 1;
numberOfQuestions = " [" + questions + " questions left]";
var verb = prompt("Ok, cool. How about a verb?" + numberOfQuestions);
questions -= 1;
numberOfQuestions = " [" + questions + " questions left]";
var adjective = prompt("Sweet. Last thing. How about an adjective?" + numberOfQuestions);
document.write("<h2>Once upon a time there was a " + noun + ". You have never seen a " + adjective +" " + noun + " like this one. This " + noun + " loved to " + verb + "!  Isn't that weird?! The END.</h2>");