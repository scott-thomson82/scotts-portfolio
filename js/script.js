$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    })

    var typed = new Typed(".typed", {
        strings: ["Web Developer"],
        typeSpeed: 100,
        startDelay: 1000,
        showCursor: false
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

$("[data-fancybox]").fancybox()

$(".items").isotope({
    filter: '*',
    animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
    }
})

$("#filters a").click(function() {
    $("#filters.current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter")

    $(".items").isotope({
        filter: selector,
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })

    return false;
    })

})