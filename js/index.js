
$(document).ready(function () {

    //set container positions
    $('.nav-bar').hide("slide", {direction: "right"});
    $('.name').hide();
    $('#nav').hide("slide", { direction: "right" });
    $("#x-btn").css("opacity", 0);
    $('.nav-bar').css("zIndex", 999);
    $('.name').css("zIndex", 999);


    //nav bar slide-out
    $( "#bars-btn" ).click(function() {
        console.log("click");
        $('#bars-btn').hide("slide", { direction: "right" }, 400);
        $('#nav').delay(400).show("slide", { direction: "right" }, 600);
        $("#x-btn").delay(800).animate({opacity: 1}, 400);
    });

    //nav bar slide-in
    $( "#x-btn" ).click(function() {
        console.log("click");
        $(this).animate({opacity: 0}, 10);
        $('#nav').hide("slide", { direction: "right" }, 600);
        $('#bars-btn').delay(400).show("slide", { direction: "right" }, 400);
    });

    //nav bar slide-out hover animation
    $("#bars-btn").hover(function() {
        $(this).animate({ opacity: ".5"});
    }, function() {
        $(this).animate({ opacity: "1"});
    });

    let moveArrow = function() {
        setInterval( function() {
            $('#arrow').addClass('glow', 600, "linear");
            setTimeout( function() {
                    $('#arrow').removeClass('glow', 2000, "linear");
                }, 1000);
        }, 4000);
    }

    moveArrow();

    //nav bar slide-in hover animation
    $("#x-btn").hover(function() {
        $(this).animate({ opacity: ".5"});
    }, function() {
        $(this).animate({ opacity: "1"});
    });

    $('#email-btn').hover(function() {
        $('#arrow-img').animate({ width: "100px"}, 300);
    }, function() {
        $('#arrow-img').animate({ width: "70px"}, 300);
    });

    $('#arrow-img').hover(function() {
        $('#arrow-img').animate({ width: "100px"}, 300);
    }, function() {
        $('#arrow-img').animate({ width: "70px"}, 300);
    });

});

//top refferance for scroll conditions
let currentTop = $(window).scrollTop();

//home arrow slide up
function moveTo(elem) {
    //let container = $(elem).closest(".container");
    $('html, body').animate({
        scrollTop: $("#" + elem).offset().top
    }, 600, "easeOutQuad");
}

//scroll conditions
$( window ).scroll(function() {
    let docHeight = $(window).height();
    let homeHeight = $('#home').height();
    let aboutHeight = $('#about').height();
    console.log("about " + aboutHeight);
    console.log("top " + $(window).scrollTop());
    console.log("currentTop " +  currentTop);
    console.log("docHeight " + docHeight);

    if($(window).width() > 480) {
        if($(window).scrollTop() > (2*docHeight)) {
           $('#top-about').removeClass("fixed");
        }

        if($(window).scrollTop() < (2*docHeight)-70 && $(window).scrollTop() > docHeight) {
           $('#top-about').addClass("fixed");
        }

        if($(window).scrollTop() > (2*docHeight)-100 && $(window).scrollTop() > docHeight && $(window).scrollTop() < (3*docHeight)) {
           $('#top-skills').addClass("fixed");
        }

        if($(window).scrollTop() > (3*docHeight)-20 || $(window).scrollTop() < (2*docHeight)-30) {
           $('#top-skills').removeClass("fixed");
        }
    } else {
        if($(window).scrollTop() > docHeight) {
           $('#top-about').addClass("fixed");
        }
    }

    //hide name and nav
    if(currentTop >= docHeight && $(window).scrollTop() < docHeight) {
        console.log("past");
        $('.top-bar').removeClass("fixed");
        $('.name').hide( "slide", { direction: "left"  }, 600, "easeOutQuad");
        $('.nav-bar').hide( "slide", { direction: "right"  }, 600, "easeOutQuad");
    }

    //show name and nav
    if(currentTop <= docHeight && $(window).scrollTop() >= docHeight) {
        console.log("past");
       $('.name').show( "slide", { direction: "left"  }, 600, "easeOutQuad");
       $('.nav-bar').show( "slide", { direction: "right" }, 600, "easeOutQuad");
    //    $('#top-bar-about').addClass("fixed");
    }

    if($(window).scrollTop() > (2*docHeight)-150) {
        console.log("darker");
        $("#x-btn").addClass("darker-color");
    }

    if($(window).scrollTop() < (2*docHeight)-150) {
        console.log("darker");
        $("#x-btn").removeClass("darker-color");
    }

    if($(window).scrollTop() > (3*docHeight)-143) {
        console.log("darker");
        $("#x-btn").removeClass("darker-color");
    }

    if($(window).scrollTop() > (2*docHeight)-30) {
        console.log("darker");
        $("#bars-btn").addClass("darker-color");
    }

    if($(window).scrollTop() < (2*docHeight)-30) {
        console.log("darker");
        $("#bars-btn").removeClass("darker-color");
    }

    if($(window).scrollTop() > (3*docHeight)-30) {
        console.log("darker");
        $("#bars-btn").removeClass("darker-color");
    }

    currentTop = $(window).scrollTop();
});
