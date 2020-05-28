import * as all from './common.js';

$(function () {
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        all.startCommon(); //공통시작이벤트 발동
        start();//시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
    }, 500)
    setInterval(function () {
        askBox();
    }, 10000);
});

function start() {
    setTimeout(function () {
        $('.pic__left').css({
            transform: 'translateY(0)'
        });
    }, 1000);
    setTimeout(function () {
        $('.pic__right').css({
            transform: 'translateY(0)'
        });
    }, 1000);
    setTimeout(function () {
        $('.background').find('.area01').css({
            transition: '1s',
            width: '87.5%'
        });
    }, 600);
    setTimeout(function () {
        $('.about__title').find('span').css({
            top: '18.9%'
        });
    }, 1300);
    setTimeout(function () {
        $('.about__title').find('span').css({
            width: '62%',
            right: '14%'
        })
    }, 1800);
    setTimeout(function () {
        $('.about__title').find('p').css({
            top: '10%',
            opacity: 1
        });
    }, 2000);
    setTimeout(function () {
        $('.about__title').find('h3').css({
            top: '14%',
            opacity: 1
        });
    }, 2500);
    setTimeout(function () {
        $('.about__spec__title').find('strong').css({
            opacity: 1
        });
        $('.about__spec__edu').find('p').css({
            opacity: 1
        });
        $('.about__spec__career').find('p').css({
            opacity: 1
        });
        $('.about__spec__qualification').find('p').css({
            opacity: 1
        });
        $('.about__spec__github').find('p').css({
            opacity: 1
        });
        $('.askBox').css({
            opacity: 1
        });
    }, 3100);
    setTimeout(function () {
        for (var i = 1; i < 7; i++) {
            var D = redDotSlide(i, "about__spec__hardSkils");
            D();
        }
    }, 2300);
    setTimeout(function () {
        for (var i = 1; i < 6; i++) {
            var D = redLineSlide(i, "about__spec__hardSkils");
            D();
        }
    }, 2800);
    setTimeout(function () {
        for (var i = 1; i < 4; i++) {
            var D = redDotSlide(i, "about__spec__softSkils");
            D();
        }
    }, 2300);
    setTimeout(function () {
        for (var i = 1; i < 3; i++) {
            var D = redLineSlide(i, "about__spec__softSkils");
            D();
        }
    }, 2800);
}

function redDotSlide(i, dv) {
    return function () {
        setTimeout(function () {
            $('.' + dv + ' .0' + i).css({
                right: (75 - i * 10) + '%',
                opacity: 1
            });
        }, 500 + i * 500);
        setTimeout(function () {
            $('.' + dv + ' .0' + (i + 1)).css({
                right: (75 - i * 10) + '%'
            });
        }, 500 + i * 500);
        setTimeout(function () {
            $('.' + dv + ' .0' + (i + 2)).css({
                right: (75 - i * 10) + '%'
            });
        }, 500 + i * 500);
        setTimeout(function () {
            $('.' + dv + ' .0' + (i + 3)).css({
                right: (75 - i * 10) + '%'
            });
        }, 500 + i * 500);
        setTimeout(function () {
            $('.' + dv + ' .0' + (i + 4)).css({
                right: (75 - i * 10) + '%'
            });
        }, 500 + i * 500);
        setTimeout(function () {
            $('.' + dv + ' .0' + (i + 5)).css({
                right: (75 - i * 10) + '%'
            });
        }, 500 + i * 500);
        setTimeout(function () {
            $('.' + dv + ' .0' + (i + 6)).css({
                right: (75 - i * 10) + '%'
            });
        }, 500 + i * 500);
    }
}

function redLineSlide(i, dv) {
    return function () {
        setTimeout(function () {
            $('.' + dv).find('.line').css({
                width: (10 * i) + '%'
            });
        }, 500 + i * 500);
    }
}

function askBox() {
    $('.askBox').find('div').eq(1).animate({
        opacity: 1
    });
    $('.askBox').find('div').eq(0).animate({
        opacity: 0
    }, 300);
    $('.askBox').animate({
        bottom: -100
    }, function () {
        $('.askBox').append($('.askBox').find('div').eq(0));
        $('.askBox').css({
            bottom: -250
        });
    });
}

