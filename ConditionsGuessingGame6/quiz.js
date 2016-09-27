/*
1. 5 quiz questions
2. Print to screen how many were correct
3. Give award for the number correct.
*/

var response;
var points = 0;
    
alert("Hey, here's a little quiz for you.");
response = prompt("What is my favorite color?");

if (response.toLowerCase() === "red"){
    points += 1;
}
response = prompt("What is my favorite number between 1 and 10?");
if(response === "3"){
    points += 1;
}
response = prompt("What is my favorite pro football team?");
if(response.toLowerCase() === "dolphins"){
    points += 1;
}
response = prompt("What is my favorite water sport?");
if(response.toLowerCase() === "water polo"){
    points += 10;
}
response = prompt("What is my favorite food?");
if(response.toLowerCase() === "meat"){
    points += 1;
}

if(points === 14){
    document.write("<p>" +points + " points. Amazing! Gold Star</p>");
}else if(points === 10){
    document.write("<p>" +points + " points. You got the most important one correct! Silver Star</p>");
}else if(points <=4 && points >= 2){
    document.write("<p>" +points + " points. You did ok... Paper Star</p>");
}else{
    document.write("<p>" +points + " points. You should never play any game again! No star");
}
    