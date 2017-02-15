//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1. Hide contents of spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler</button>");
//3. button is pressed
$("button").click(function(){
    $(this).prev().show();
    $(this).remove();
});
    //3.1 Show spoiler
    //3.2 Hide button


