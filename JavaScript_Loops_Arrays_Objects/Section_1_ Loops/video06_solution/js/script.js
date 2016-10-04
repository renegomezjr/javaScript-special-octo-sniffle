var html = '';
var red;
var green;
var blue;
var rgbColor;
function getRandom(){
    return Math.floor(Math.random() * 256 );
}
for(var i = 0; i < 1000; i++){
    red = getRandom();
    green = getRandom();
    blue = getRandom();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);