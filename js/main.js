$(".open").click(function () {
    $("#left").animate({ width: '250px' }, 50);
    $("#home-content").animate({ marginLeft: '250px' }, 50);
});

$(".closebtn").click(function () {
    $("#left").animate({ width: '0px' }, 50);
    $("#home-content").animate({ marginLeft: '0px' }, 50);
});

$("#left a").click(function () {
    var sectionId = $(this).attr("href");
    var positionOfSection = $(sectionId).offset().top;
    $("html , body").animate({ scrollTop: positionOfSection }, 500);
});

$('#slider .toggle').click(function () {
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

window.onload = function () {
    countDownToTime("25 October 2024 00:00:00");
};

function countDownToTime(countTo) {
    let futureDate = new Date(countTo).getTime();

    setInterval(function () {
        let now = new Date().getTime();
        let timeDifference = futureDate - now;

        if (timeDifference < 0) {
            $(".days").html(`0 D`);
            $(".hours").html(`0 h`);
            $(".minutes").html(`0 m`);
            $('.seconds').html(`0 s`);
            return;
        }

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((timeDifference % (1000 * 60)) / 1000);

        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${mins} m`);
        $('.seconds').html(`${secs} s`);
    }, 1000);
}

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;

    if (AmountLeft <= 0) {
        $(this).val($(this).val().substring(0, maxLength));
        $("#chars").text("Your available characters finished");
        $(this).attr("disabled", "disabled");
    } else {
        $("#chars").text(AmountLeft);
    }
});
