

$(function () {
    $('.play').click(start);

    $('.menu').click(menuOpen);

    $('.menuOpen__home').mouseenter(function () {
        $('.menuSelect__home').css({
            left: '25%'
        })
    });
    $('.menuOpen__home').mouseleave(function () {
        $('.menuSelect__home').css({
            left: '12.5%'
        })
    });
    $('.menuOpen__about').mouseenter(function () {
        $('.menuSelect__about').css({
            left: '37.5%'
        })
    });
    $('.menuOpen__about').mouseleave(function () {
        $('.menuSelect__about').css({
            left: '25%'
        })
    });
    $('.menuOpen__project').mouseenter(function () {
        $('.menuSelect__project').css({
            left: '50%'
        })
    });
    $('.menuOpen__project').mouseleave(function () {
        $('.menuSelect__project').css({
            left: '37.5%'
        })
    });
    $('.menuOpen__contact').mouseenter(function () {
        $('.menuSelect__contact').css({
            left: '62.5%'
        })
    });
    $('.menuOpen__contact').mouseleave(function () {
        $('.menuSelect__contact').css({
            left: '50%'
        })
    });
})
function menuOpen() {
    $('.title').css({
        left: '-10%'
    });
    $('.menu').css({
        right: '15%'
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
        $('.menuSelect__home').css({
            display: 'block'
        });
        $('.menuSelect__about').css({
            display: 'block'
        });
        $('.menuSelect__project').css({
            display: 'block'
        });
        $('.menuSelect__contact').css({
            display: 'block'
        });
    }, 500);

}
function start() {
    $(this).fadeOut();
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
        $('.menu').css({
            display: 'flex',
        })
    }, 1400);
    setTimeout(function () {
        $('.menu').css({
            right: '5%'
        })
    }, 1500);
    // setTimeout(function(){
    //     $('.circle01').css({
    //         border : '80px solid #ed924e'
    //     })
    // },4800);
    // setTimeout(function(){
    //     $('.circle02').css({
    //         border : '80px solid #ed924e'
    //     })
    // },4800);
}