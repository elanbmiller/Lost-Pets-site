(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
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
