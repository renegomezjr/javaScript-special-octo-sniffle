//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
//add overlay
    //An image
    //A caption
$("body").append($overlay);

//1. Capture the click even on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var href = $(this).attr("href");
    $overlay.show();
    //1.1 Show the overlay
    //1.2 Update the overlay with the image linked in the link
    //1.3 Get child's alt attribute and set caption
    
});
        
//3. When overlay is clicked
    //3.1 Hide overlay









