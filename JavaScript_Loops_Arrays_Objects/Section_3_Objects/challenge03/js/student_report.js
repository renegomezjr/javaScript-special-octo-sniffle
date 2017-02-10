

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var choice = prompt('Which student would you like to find? Or enter "quit" to exit:');

while(choice != 'quit'){ 
var message = '';
var student;
for (var i = 0; i < students.length; i += 1) {
  student = students[i];
    if(choice === student.name){
        message += '<h2>Student: ' + student.name + '</h2>';
        message += '<p>Track: ' + student.track + '</p>';
        message += '<p>Points: ' + student.points + '</p>';
        message += '<p>Achievements: ' + student.achievements + '</p>';
        print(message);
        break;
    }
};

    choice = prompt('Which student would you like to find? Or enter "quit" to exit:');
};
