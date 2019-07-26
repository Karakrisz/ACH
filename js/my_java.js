$(document).ready(function () {
    $(".fa-align-right").click(function () {
        $(".menu").fadeIn();
        $(".fejlec_tartalom").hide();
        $(".fa-close").fadeIn();
        $(".fa-align-right").hide();
    });
    $(".fa-close").click(function () {
        $(".fejlec_tartalom").fadeIn();
        $(".menu").hide();
        $(".fa-close").hide();
        $(".fa-align-right").fadeIn();
    });
});


