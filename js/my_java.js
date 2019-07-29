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

});


