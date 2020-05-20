
$(function () {
    $('.menu').load("sub/menu.html");
    setTimeout(function () {
        start(); //시작이벤트 발동
        $('.menu').click(menuToggle); //메뉴 열기&닫기
        //메뉴 hover이벤트
        $('.area__wrapper').find('a').mouseenter(function () {
            $('.area__wrapper').find('a').css({
                opacity: 0.6
            });
            $(this).css({
                opacity: 1,
                fontSize: '2rem'
            });
        });
        $('.area__wrapper').find('a').mouseleave(function () {
            $('.area__wrapper').find('a').css({
                opacity: 1,
                fontSize: '1.5rem'
            });
        });
        //메뉴 hover이벤트 end
    }, 10)
});


function menuToggle() {
    //버튼 z-index 증가 및 x모양으로 변형
    if ($('.menu__button').hasClass('open')) {
        $('.menu__button').removeClass('open');
        $('.menu__button').css({
            zIndex: 100
        });
        $('.menu__button').find('span').css({
            width: '18px'
        });
        $('.firstSpan').css({
            transform: 'rotate(0) translateY(0)'
        });
        $('.secondSpan').css({
            width: '30px'
        });
        $('.thirdSpan').css({
            transform: 'rotate(0) translateY(0)'
        });
    }
    else {
        $('.menu__button').addClass('open');
        $('.menu__button').css({
            zIndex: 100
        });
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
        //버튼 z-index 증가 및 x모양으로 변형 end

        //background 등장
        $('.menu__background').css({
            zIndex: 49
        })
        for (var i = 1; i < 9; i++) {
            var D = reverseDDDG(i, "background");
            D();
        }
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                var D = DDDG(i, "menu__background");
                D();
            }
        }, 100);
        setTimeout(function () {
            for (var i = 8; i > 0; i--) {
                var D = redDDDG(i, "area__wrapper");
                D();
            }
        }, 800);
        setTimeout(function () {
            setTimeout(function () {
                $('.area__wrapper').find('a').css({
                    display: 'flex',
                    zIndex: 82
                });
            }, 600);
            setTimeout(function () {
                $('.home').css({
                    left: '50%'
                })
            }, 700);
            setTimeout(function () {
                $('.about').css({
                    left: '50%'
                })
            }, 800);
            setTimeout(function () {
                $('.project').css({
                    left: '50%'
                })
            }, 900);
            setTimeout(function () {
                $('.contact').css({
                    left: '50%'
                })
            }, 1000);
        }, 800);
        //background 등장 end

        //menu title 등장
        setTimeout(function () {
            $('.menu').find('h3').css({
                top: '5%'
            });
        }, 1500);
        //menu title 등장 end
    }
}
function start() {
    //background 등장
    for (var i = 1; i < 9; i++) {
        var D = DDDG(i, "background");
        D();
    }
    //background 등장 end

    //title 등장
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
    //title 등장 end

    //menu button 등장
    setTimeout(function () {
        $('.menu').find('button').css({
            display: 'flex',
        })
    }, 1400);
    setTimeout(function () {
        $('.menu').find('button').css({
            right: '6.25%'
        })
    }, 1500);
    //menu button 등장end

    //footer 등장
    setTimeout(function () {
        $('.footer').css({
            bottom: '40px'
        })
    }, 1600);
}


function DDDG(i, dv) {
    return function () {
        setTimeout(function () {
            $('.' + dv + ' .area0' + i).find('.area__wrapper').css({
                width: '100%'
            });
        }, 500 + i * 100);
    }
}
function redDDDG(i, dv) {
    return function () {
        setTimeout(function () {
            $('.' + dv + ' .area0' + i).css({
                width: '100%'
            });
        }, 500 + i * 100);
    }
}
function reverseDDDG(i, dv) {
    return function () {
        setTimeout(function () {
            $('.' + dv + ' .area0' + i).find('.area__wrapper').css({
                transform: 'translateX(100%)'
            });
        }, 500 + i * 100);
    }
}