
$(function () {
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        start(); //시작이벤트 발동
        $('.menu__button').click(menuToggle); //메뉴 열기&닫기
    }, 100)
});
var bln = true;

function menuToggle() {
    if ($('.menu__button').hasClass('open') && bln == false) {
        //버튼 z-index 감소 및 원래모양으로 변형
        $('.menu__button').removeClass('open');

        //menu__background 사라지기
        for (var i = 1; i < 5; i++) {
            var menuOut = menu(i, '-100%', 400, -50);
            menuOut();
        }
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                var bgDel = bgShow(i, "menu__background", " .area__wrapper", "translateX(100%)", 0, 100);
                bgDel();
            }
        }, 100)
        for (var i = 1; i < 9; i++) {
            var redRev = bgShow(i, "area__wrapper", "", 0, 0, -50);
            redRev();
        }
        setTimeout(function () {
            $('.area__wrapper').find('a').css({
                display: 'none',
            });
        }, 600);
        //menu__background 사라지기 end

        //title 등장
        setTimeout(function () {
            $('.background').find('h3').css({
                top: '5%'
            });
        }, 500);
        //title 등장 end

        //menu title 퇴장
        $('.menu').find('h3').css({
            top: '-5%'
        });
        //menu title 퇴장 end

        //menu__background 원래위치로 돌려두기
        setTimeout(function () {
            $('.menu__background').find('.area__wrapper').css({
                transform: 'translateX(0)',
            });
            $('.menu__background').css({
                zIndex: -1
            });
        }, 1400)
        //menu__background 원래위치로 돌려두기 end

        //연속실행 방지
        setTimeout(function () {
            bln = true;
        }, 2000)
        //연속실행 방지 end
    }
    if (!$('.menu__button').hasClass('open') && bln == true) {
        $('.menu__button').addClass('open');
        $('.menu__button').css({
            zIndex: 100
        });

        //background 등장
        $('.menu__background').css({
            zIndex: 49
        })
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                var menuBgShow = bgShow(i, "menu__background", " .area__wrapper", 0, '100%', 100);
                menuBgShow();
            }
        }, 100);
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                var redShow = bgShow(i, "area__wrapper", "", 0, '100%', 100);
                redShow();
            }
        }, 800);
        setTimeout(function () {
            $('.area__wrapper').find('a').css({
                display: 'flex',
                zIndex: 82
            });
        }, 1400);
        setTimeout(function () {
            for (var i = 1; i < 5; i++) {
                var menuShow = menu(i, '50%', 600, 100);
                menuShow();
            }
        }, 800);
        //background 등장 end

        //title 퇴장
        $('.background').find('h3').css({
            top: '-5%'
        });
        //title 퇴장 end

        //menu title 등장
        setTimeout(function () {
            $('.menu').find('h3').css({
                top: '5%'
            });
        }, 500);
        //menu title 등장 end

        //연속실행 방지
        setTimeout(function () {
            bln = false;
        }, 2000)
        //연속실행 방지 end
    }
}

function start() {
    $('.menu').find('button').css({
        right: '6.25%'
    })
    setTimeout(function () {
        $('.background').find('h3').css({
            top: '5%'
        });
    }, 1300);
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

function bgShow(i, div, find, trans, wid, num) {
    return function () {
        setTimeout(function () {
            $('.' + div + ' .area0' + i + find).css({
                transform: trans,
                width: wid
            });
        }, 500 + i * num);
    }
}
function menu(i, left, num, num2) {
    return function () {
        setTimeout(function () {
            $('.menu__background').find('a.0' + i).css({
                left: left
            })
        }, num + i * num2);
    }
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
function loop() {
    var i;

    setTimeout(function () {
        for (i = 1; i < 4; i++) {
            var askSlide = askBox(i);
            askSlide();
        }
    }, 2800);
}
loop();

function askBox(i) {
    return function () {
        setTimeout(function () {
            $('.askBox').css({
                bottom: (-350 + 150 * i) + 'px'
            });
        }, i * 7000);
        setTimeout(function () {
            $('.askBox__question__0' + i).css({
                opacity: 0
            });
        }, i * 7000);
        setTimeout(function () {
            $('.askBox__question__0' + (i + 1)).css({
                opacity: 1
            });
            if (i == 3) {
                setTimeout(function () {
                    $('.askBox').css({
                        transition: '0s cubic-bezier(0.22, 1, 0.36, 1)',
                        bottom: '-350px'
                    });
                    $('.askBox__question__01').css({
                        opacity: 1
                    });
                    setTimeout(function () {
                        $('.askBox__question__04').css({
                            opacity: 0
                        });
                    }, 500);
                    loop();
                    setTimeout(function () {
                        $('.askBox').css({
                            transition: '1.5s cubic-bezier(0.22, 1, 0.36, 1)'
                        });
                    }, 50); //transition 바꾸는데 깜빡이는 현상 고치고싶은데 고민중
                }, 1500);
            }
        }, i * 7000);
    }
}
