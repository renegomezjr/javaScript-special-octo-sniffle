//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation



//create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);


//Cycle over menu links
$("#menu a").each(function(){
    var $anchor = $(this);
    //create an option
    var $option = $("<option></option>");
    
    if($anchor.parent().hasClass("selected")){
        $option.prop("selected", true);
    }
    
    //option's value is the href
    $option.val($anchor.attr("href"));
    //otion's text is the text of the link
    $option.text($anchor.text());
    $select.append($option);
});

$select.change(function(){
    window.location = $select.val(); 
});






