$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";    
    //input box

  $("#button").click(function(){
    var number = $("#number").val();
    var color = $("#color").val();
        if (number == "1") {
            $("#square_a").css("background-color", color);
        } else if (number == "2") {
            $("#square_b").css("background-color", color);
        } else {
    $("#square_c").css("background-color", color);
                }
      })
    
    //Mouseover square2 to animate square3
    $("#square2").on("mouseover", function(evt){
        $(myFunction4);
    });
    //replaces placeholder text on square1
    $("#square1").on("click", swapMe);
    $("#square1").on("dblclick", swapMe2);
    
    //This uses a shorthand way attaching a click handler.
    $("#myList li:nth-child(3)").click(myFunction2);
    $("#myList li:nth-child(4)").on("click", myFunction3);
    $("#myList li:nth-child(5)").one("click", function(evt) {
        myFunction4("#square4");
                                   });
    $("quote2").hide();
    
    
    $("button").on("click", function(evt){
   // console.log($("#numberbox").val());
        var myColor = $("#colorbox").val();
        var myBox = $("#numberbox").val();
        if (myBox == 1){
        $("#lilsquare").css("background-color",myColor);
        }
            if (myBox == 2){
        $("#lilsquare2").css("background-color",myColor);
            }
        if (myBox == 3){
        $("#lilsquare3").css("background-color",myColor);
        }
    });

});


//-------------------------------------------------------------------
//The code below are functions that will only run when called by name.
function swapMe() {
   
    var tempText = $("#quote").text();
    $("#quote").text($("#square1").text());
    $("#square1").text(tempText);
};

function swapMe2() {
   
    var tempText = $("#quote2").text();
    $("#quote2").text($("#square1").text());
    $("#square1").text(tempText);
};
function myFunction2() {
    // Change the css
    $(this).css({"text-shadow":"4px 4px #FFFF00","font-size":"300%"});
}
function myFunction3() {
    //Here is a neat one. Add a new class to tag so it takes on a whole new look.
    //Also, because it uses "this" the same function can be used on many items.
    $(this).toggleClass("long-shadow");
};
function myFunction4(myObject) {
    $(square3).slideDown()
        .delay(500)
        .animate({left: '+=700px'})
        .animate({top: '-=400px',
                  height: '500px'}, "slow");
}
