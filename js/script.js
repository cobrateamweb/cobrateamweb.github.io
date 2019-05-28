// parallax
// pricing
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

});

// progressbar
$(document).ready(function () {
    $('.html').animate({
        width: '90%'
    }, 2000);
    $('.css').animate({
        width: '75%'
    }, 2000);
    $('.js').animate({
        width: '50%'
    }, 2000);
    $('.php').animate({
        width: '50%'
    }, 2000);
    $('.ajax').animate({
        width: '45%'
    }, 2000);
});