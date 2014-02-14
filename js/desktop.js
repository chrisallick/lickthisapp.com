centerThatShit = function(callback) {
    $("#wrapper").css({
        "padding-top": $(window).height()/2 - $(".gif").height()/2
    });

    if(callback) {
        callback();
    }
}
$(document).ready(function(){
    centerThatShit(function(){
        $("#wrapper").animate({
            opacity: 1
        }, 1000 );
    });

    $(window).resize(function(){
        centerThatShit();
    })
});