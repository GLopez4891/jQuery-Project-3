$(document).ready(function(){
    $("h1").click(function(){
        $(this).toggleClass("blue");
    });
});

$(document).ready(function(){
    $(".one").hover(function(){
        $(this).css("font-family", "Times New Roman");
    }, function(){
        $(this).css("font-family", "'Lobster', cursive");
    });
});
$(document).ready(function(){    
    $(".rainbows").dblclick(function(){
        alert("You double clicked me!");
    });
});
$(document).ready(function(){    
    $("button").click(function(){
        $(".words").hide();
        
    });
});
$(document).ready(function(){
    $(".rainbows").click(function(){
        $(this).css("color", "red");
    });
});