(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    /* Turns on white background only when at picture of petyon
    
        $(document).ready(function () {
            var scroll_start = 0;
            var startchange = $('a.page-scroll');
            var offset = startchange.offset();
            if (startchange.length) {
                $(document).scroll(function () {
                    scroll_start = $(this).scrollTop();
                    if (scroll_start > 820) {
                        $(".navbar-default").css('background-color', 'White');
                    } else {
                        $('.navbar-default').css('background-color', 'transparent');
                    }
                });
            }
        });
        */

    //    Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })



})(jQuery); // End of use strict


//needs fixing--page gets all messed up
// $(document).ready(function () {
//     $("#detailButton").hide(); //hide your div initially

//     $(window).scroll(function () {
//         var dbSearch = $("#search").offset().top;
//         var contactPage = 4500;
//         if ($(window).scrollTop() > dbSearch && $(window).scrollTop() < contactPage) { //scrolled past the other div?
//             $("#detailButton").show(); //reached the desired point -- show div
//         }
//         /*
//         console.log("scrollTop: " + $(window).scrollTop());
//         console.log("document.height: " + $(document).height());
//         console.log("window.height: " + $(window).height());

//         //scrolltop max 4060 vs document.height 4870
//         //4889 vs 5699 (dif 810)
//         if ($(window).scrollTop() + 10 >= $(document).height() - $(window).height()) {
//             alert("We're at the bottom of the page!!");
//             exit();
//         }
//         */
//         else {
//             $("#detailButton").hide();
//         }
//     });
// });






