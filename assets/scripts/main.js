/**
 * Created by jason on 12/12/16.
 */

$("#aboutBtn").click(function () {
    $('html, body').animate({
            scrollTop: $("#about").offset().top
        },
        1000
    )
});

