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

    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $('#kalkulator').submit(function (event) {
        event.preventDefault();
        $.ajax({
            /*
            url: kalkulator.php,
            method: post, / get
            data: {
                vastagsag:  $('#vastagsag').val()
                ...
            }
            */
            url: 'kalkulator.php?vastagsag=' + $('#vastagsag').val() + '&szelesseg=' + $('#szelesseg').val() + '&hosszusag=' + $('#hosszusag').val() + '&mennyiseg=' + $('#mennyiseg').val() + '&termek_tipus=' + $('#termek_tipus').val()
        }).done(function (valasz) {
            if (valasz.error) {
                $('#osszsuly_eredmeny').html('<span class="error">' + valasz.error + '</span>');
            } else {
                $('#osszsuly_eredmeny').text(valasz.osszsuly + ' kg');
            }
        });
    });

    /*    $('#kalkulator').submit(function (event) {
            event.preventDefault();
            fetch('kalkulator.php?vastagsag=' + $('#vastagsag').val() + '&szelesseg=' + $('#szelesseg').val() + '&hosszusag=' + $('#hosszusag').val() + '&mennyiseg=' + $('#mennyiseg').val() + '&termek_tipus=' + $('#termek_tipus').val())
                .then(response => response.json())
                .then(valasz => $('#osszsuly_eredmeny').text(valasz.osszsuly.toFixed(2) + ' kg'));
        });*/
});