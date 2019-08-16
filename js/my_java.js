$(document).ready(function () {
    $(".menu_open").click(function () {
        $(".menu").fadeIn();
        $(".fejlec_tartalom").hide();
        $(".menu_close").fadeIn();
        $(".menu_open").hide();
        $(".navbar-dark").hide();
    });

    $(".menu_close").click(function () {
        $(".fejlec_tartalom").fadeIn();
        $(".menu").hide();
        $(".menu_close").hide();
        $(".menu_open").fadeIn();
        $(".navbar-dark").fadeIn();
    });

    $(".back").click(function () {
        $(".fejlec_tartalom").fadeIn();
        $(".menu").hide();
        $(".menu_close").hide();
        $(".menu_open").fadeIn();
        $(".navbar-dark").fadeIn();
    });

    $('.rolunk').click(function () {
        $('html, body').animate({
            scrollTop: $("div.test_tartalom").offset().top
        }, 1000)
    });

    $('.kapcsolat').click(function () {
        $('html, body').animate({
            scrollTop: $("div.lablec").offset().top
        }, 1000)
    });

    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });


});


