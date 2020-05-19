

$(function () {
    start();
    $('.menu').click(menuOpen);
    $('.menuOpen').find('a').mouseenter(function () {
        $('.menuOpen').find('a').css({
            opacity: 0.3
        });
        $(this).css({
            opacity: 1
        })
    })
    $('.menuOpen').find('a').mouseleave(function () {
        $('.menuOpen').find('a').css({
            opacity: 1
        });
    })
});
function menuOpen() {
    $('.menu__button').find('span').css({
        width: '30px'
    });
    $('.firstSpan').css({
        transform: 'rotate(45deg) translateY(18px)'
    });
    $('.secondSpan').css({
        width: 0
    });
    $('.thirdSpan').css({
        transform: 'rotate(-45deg) translateY(-17px)'
    });
    $('.menuBackground').css({
        width: '100%'
    });
    $('.title').css({
        left: '-10%'
    });
    $('.menuOpen').css({
        display: 'block'
    });
    setTimeout(function () {
        $('.menuOpen__home').css({
            left: '25%',
        })
    }, 500);
    setTimeout(function () {
        $('.menuOpen__about').css({
            left: '37.5%',
        })
    }, 600);
    setTimeout(function () {
        $('.menuOpen__project').css({
            left: '50%',
        })
    }, 700);
    setTimeout(function () {
        $('.menuOpen__contact').css({
            left: '62.5%',
        })
    }, 800);
    setTimeout(function () {
        $('.menuOpen__home').css({
            zIndex: '51'
        });
        $('.menuOpen__about').css({
            zIndex: '51'
        });
        $('.menuOpen__project').css({
            zIndex: '51'
        });
        $('.menuOpen__contact').css({
            zIndex: '51'
        });
    }, 1200);
}
function start() {
    $('.area').animate({
        height: '100vh'
    }, 300);
    setTimeout(function () {
        $('.area01').find('.area__wrapper').css({
            width: '100%'
        })
    }, 600);
    setTimeout(function () {
        $('.area02').find('.area__wrapper').css({
            width: '100%'
        })
    }, 700);
    setTimeout(function () {
        $('.area03').find('.area__wrapper').css({
            width: '100%'
        })
    }, 800);
    setTimeout(function () {
        $('.area04').find('.area__wrapper').css({
            width: '100%'
        })
    }, 900);
    setTimeout(function () {
        $('.area05').find('.area__wrapper').css({
            width: '100%'
        })
    }, 1000);
    setTimeout(function () {
        $('.area06').find('.area__wrapper').css({
            width: '100%'
        })
    }, 1100);
    setTimeout(function () {
        $('.area07').find('.area__wrapper').css({
            width: '100%'
        })
    }, 1200);
    setTimeout(function () {
        $('.area08').find('.area__wrapper').css({
            width: '100%'
        })
    }, 1300);
    setTimeout(function () {
        $('.title').css({
            display: 'flex',
        })
    }, 600);
    setTimeout(function () {
        $('.title').css({
            left: '15%'
        })
    }, 1300);
    setTimeout(function () {
        $('.menu').find('button').css({
            display: 'flex',
        })
    }, 1400);
    setTimeout(function () {
        $('.menu').find('button').css({
            right: '5%'
        })
    }, 1500);
}