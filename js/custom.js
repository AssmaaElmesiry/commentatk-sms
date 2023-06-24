$(document).ready(function() {
    /**************************************************
     ******************* When Open Menu  **********************
     ***************************************************/
    $(".openMenu").click(function() {
        $("body").addClass("overflowH");
        $(".menuMobile").fadeIn();
        $(".menuMobile .menuContent").addClass("active");
    });
    $(".closeX,.BgClose").click(function() {

        $("body").removeClass("overflowH");
        $(".menuMobile").fadeOut();
        $(".menuMobile .menuContent").removeClass("active");

    });
    /**************************************************
     ******************* backgroundSlider  **********************
     ***************************************************/
    if ($('#ClientSlider')[0]) {
        $("#ClientSlider").owlCarousel({
            loop: true,
            nav: false,
            rtl: true,
            margin: 30,
            autoplay: true,
            center: false,
            dots: false,
            // navText: ["<img src='img/right.png'>", "<img src='img/left.png'>"],
            responsive: {
                0: {
                    items: 2
                },
                991: {
                    items: 3,
                },
                1200: {
                    items: 5,

                }
            }
        });
    }

    new WOW().init();

});