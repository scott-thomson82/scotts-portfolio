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
})