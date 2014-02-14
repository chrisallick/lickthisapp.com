hideHowTo = function( callback ) {
    $("#howto .lickheretobegin").animate({
        opacity: 0
    }, 100, function(){
        $("#howto").animate({
            opacity: 0
        }, 300, function() {
            $("#howto").hide();
            callback();
        });
    });
}

showHowTo = function() {
    $("#howto").show().animate({
        opacity: 1
    });
}

hideHome = function( callback ) {
    $("#home .start").animate({
        opacity: 0
    }, 100, function(){
        $("#home").animate({
            opacity: 0
        }, 300, function() {
            $("#home").hide();
            callback();
        });
    });
}

showHome = function() {
    $("#home").show().animate({
        opacity: 1
    });
}

showFooter = function() {
    $("#footer").animate({
        bottom: 0
    });
}

hideFooter = function() {
    $("#footer").animate({
        bottom: -111
    });
}

showMenu = function() {
    page = "menu";
    $("#footer .score").hide();

    $("#menu").show().animate({
        opacity: 1
    }, 300);
}

hideMenu = function( callback ) {
    hideFooter();

    $("#menu").animate({
        opacity: 0
    }, 300, function(){
        $("#menu").hide();
        callback();
    });
}

showLightSwitch = function() {
    $("#footer .score").text(count = 0);
    page = "lightswitch";

    $("#lightswitch").show().css({
        "padding-top": ($(window).height() - $("#footer").height() - $("#lightswitch .on").height())/2
    }).animate({
        opacity: 1
    }, 300, function() {
        showFooter();
        $("#footer .score").show();
    });

    $("#lightswitch .startscreen").css({
        "padding-top": ($(window).height() - $("#footer").height() - $("#lightswitch .startscreen img").height())/2
    });
}

hideLightSwitch = function( callback ) {
    hideFooter();

    $("#lightswitch").animate({
        opacity: 0
    }, 300, function(){
        $(this).hide();
    });

    if(callback) {
        callback();
    }
}

hideFreestyle = function( callback ) {
    hideFooter();

    $("#freestyle").animate({
        opacity: 0
    }, 300, function(){
        $(this).hide();
    });

    if(callback) {
        callback();
    }
}

showFreestyle = function() {
    $("#footer .score").text(count = 0);
    page = "freestyle";

    $("#freestyle").show().animate({
        opacity: 1
    }, 300, function() {
        showFooter();
        var pjs = Processing.getInstanceById("BouncingBallthree");
        pjs.start();
        $("#footer .score").show();
    });

    $("#freestyle .startscreen").css({
        "padding-top": ($(window).height() - $("#footer").height() - $("#freestyle .startscreen img").height())/2
    });
}

var bFirst = true;
showPencilSharpener = function() {
    $("#footer .score").text(count = 0);
    page = "pencilsharpener";

    $("#pencilsharpener .psbody").show().css({
        top: ($(window).height() - $("#footer").height() - $("#pencilsharpener .psbody").height())/2
    });

    if( bFirst ) {
        bFirst = false;
        $("#pencilsharpener .psarm").show().css({
            top: ($(window).height() - $("#footer").height() - $("#pencilsharpener .psbody").height())/2 - 18,
            left: "+=10"
        });
    }


    $("#pencilsharpener").show().animate({
        opacity: 1
    }, 300, function() {
        showFooter();
        $("#footer .score").show();
    });

    $("#pencilsharpener .startscreen").css({
        "padding-top": ($(window).height() - $("#footer").height() - $("#pencilsharpener .startscreen img").height())/2
    });
}

hidePencilSharpener = function( callback ) {
    hideFooter();

    $("#pencilsharpener").animate({
        opacity: 0
    }, 300, function(){
        $(this).hide();
    });

    if(callback) {
        callback();
    }
}

centerthat = function(callback) {
    $(".centerthis").each(function(value,index){
        $(this).css({
            left: $(document).width()/2 - $(this).width()/2    
        });
    });    

    if(callback) {
        callback();
    }
}

increaseCount = function() {
    $("#footer .score").text(++count);
}

var page = "menu";
var count = 0;
var psarm;
var deg = 0;
$(document).ready(function(){
    psarm = $("#pencilsharpener .psarm");

    $("#wrapper").css({
        width: $(window).width(),
        height: $(window).height()
    })

    //centerthat();
    centerthat(function(){
        showHome();
    });

    // disable touch scrolling unless explicitly allowed
    document.body.addEventListener('touchmove',function(e){
        if(!$(e.target).hasClass("scrollable")) {
            e.preventDefault();
        }
    });

    var lickToBegin = $("#howto .overlay").hammer();

    lickToBegin.on("swiperight", function(ev) {
        hideHowTo(function(){
            showMenu();
        });
    });

    $("#home .start").click(function(){
        hideHome(function(){
            showHowTo();
        });
    });

    $("#menu .lightswitch").click(function(){
        hideMenu(function(){
            showLightSwitch();
        });
    });

    $("#menu .pencilsharpener").click(function(){
        hideMenu(function(){
            showPencilSharpener();
        });
    });

    $("#menu .freestyle").click(function(){
        hideMenu(function(){
            showFreestyle();
        });
    });

    $("#footer .menulink").click(function(event){
        event.preventDefault();

        if( page == "lightswitch" ) {
            hideLightSwitch(function(){
                showMenu();
            });
        } else if( page == "pencilsharpener" ) {
            hideFreestyle(function(){
                showMenu();
            });
        } else if( page == "freestyle" ) {
            hideFreestyle(function(){
                showMenu();
            });
        }
    });

    $("#footer .nextlink").click(function(event){
        event.preventDefault();
        
        if( page == "lightswitch" ) {
            hideLightSwitch(function(){
                showPencilSharpener();
            });
        } else if( page == "pencilsharpener" ) {
            hidePencilSharpener(function(){
                showFreestyle();
            });
        } else if( page == "freestyle" ) {
            hideFreestyle(function(){
                showLightSwitch();
            });
        }
    });

    $("#levels").css({
        height: $(window).height() - 190
    });

    //$("img").on('dragstart', function(event) { event.preventDefault(); });

    var lightswitch = $("#lightswitch").hammer();

    lightswitch.on("swipedown", function(ev) {
        $("#lightswitch .on").hide();
        $("#lightswitch .off").show();
        $("#lightswitch .overlay").show();

        $("#footer .score").text(++count);
    }).on("swipeup", function(ev) {
        $("#lightswitch .on").show();
        $("#lightswitch .off").hide();
        $("#lightswitch .overlay").hide();

        $("#footer .score").text(++count);
    });

    var armRotate = $("#pencilsharpener .overlay").hammer();
    var other = false;
    var move_count = 0;
    armRotate.on("drag", function(e) {
        if( other ) {            
            move_count++;
            if( move_count > 60 ) {
                move_count = 0;
                console.log("awesome");
                $("#footer .score").text(++count);
            }

            var offset = psarm.offset();

            var center_x = (offset.left) + (psarm.width() / 2);
            var center_y = (offset.top) + (psarm.height() / 2);
            var mouse_x = e.gesture.touches[0].pageX;
            var mouse_y = e.gesture.touches[0].pageY;
            var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
            var degree = (radians * (180 / Math.PI) * -1);
            
            if( $(window).height() < 920 ) {
                psarm.css('-moz-transform', 'scale(.8) rotate(' + degree + 'deg)');
                psarm.css('-webkit-transform', 'scale(.8) rotate(' + degree + 'deg)');
                psarm.css('-o-transform', 'scale(.8) rotate(' + degree + 'deg)');
                psarm.css('-ms-transform', 'scale(.8) rotate(' + degree + 'deg)');
            } else {
                psarm.css('-moz-transform', 'rotate(' + degree + 'deg)');
                psarm.css('-webkit-transform', 'rotate(' + degree + 'deg)');
                psarm.css('-o-transform', 'rotate(' + degree + 'deg)');
                psarm.css('-ms-transform', 'rotate(' + degree + 'deg)');
            }

        } else {
            other = !other;
        }
    }).on("dragend", function(e) {
        move_count = 0;
    });

    $("#freestyle .startscreen").click(function(){
        $(this).hide();
    });

    $("#pencilsharpener .startscreen").click(function(){
        $(this).hide();
    });

    $("#lightswitch .startscreen").click(function(){
        $(this).hide();
    });
});