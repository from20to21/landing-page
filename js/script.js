
$(function () {
    setTimeout(function () {
        start(); //시작이벤트 발동
        $('.menu__button').click(menuToggle); //메뉴 열기&닫기
        // //메뉴 hover이벤트
        // $('.area__wrapper').find('a').mouseenter(function () {
        //     $('.area__wrapper').find('a').css({
        //         opacity: 0.6
        //     });
        //     $(this).css({
        //         opacity: 1,
        //         fontSize: '2rem'
        //     });
        // });
        // $('.area__wrapper').find('a').mouseleave(function () {
        //     $('.area__wrapper').find('a').css({
        //         opacity: 1,
        //         fontSize: '1.5rem'
        //     });
        // });
        // //메뉴 hover이벤트 end
    }, 100)
});
var bln = true;


function menuToggle() {
    if ($('.menu__button').hasClass('open') && bln == false) {
        //버튼 z-index 감소 및 원래모양으로 변형
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
        //버튼 z-index 감소 및 원래모양으로 변형 end

        //menu__background 사라지기
        for (var i = 1; i < 5; i++) {
            var D = titleOut(i);
            D();
        }
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                var D = reverseDDDG(i, "menu__background");
                D();
            }
        }, 100)
        for (var i = 1; i < 9; i++) {
            var D = redreverseDDDG(i, "area__wrapper");
            D();
        }
        setTimeout(function () {
            $('.area__wrapper').find('a').css({
                display: 'none',
            });
        }, 600);
        //menu__background 사라지기 end

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
        }, 2500)
        //연속실행 방지 end
    }
    if (!$('.menu__button').hasClass('open') && bln == true) {
        $('.menu__button').addClass('open');
        $('.menu__button').css({
            zIndex: 100
        });
        //버튼 x모양으로 변형 
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
        //버튼 x모양으로 변형 end

        //background 등장
        $('.menu__background').css({
            zIndex: 49
        })
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                var D = DDDG(i, "menu__background");
                D();
            }
        }, 100);
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                var D = redDDDG(i, "area__wrapper");
                D();
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
                var D = titleShow(i);
                D();
            }
        }, 800);
        //background 등장 end

        //menu title 등장
        setTimeout(function () {
            $('.menu').find('h3').css({
                top: '5%'
            });
        }, 2100);
        //menu title 등장 end

        //연속실행 방지
        setTimeout(function () {
            bln = false;
        }, 2500)
        //연속실행 방지 end
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
            left: '15%'
        })
    }, 1300);
    //title 등장 end

    //menu button 등장
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
    //footer 등장 end
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
                transform: 'translateX(100%)',
                width: 0
            });
        }, 500 + i * 100);
    }
}
function redreverseDDDG(i, dv) {
    return function () {
        setTimeout(function () {
            $('.' + dv + ' .area0' + i).css({
                width: '0'
            });
        }, 500 - i * 50);
    }
}
function titleShow(i) {
    return function () {
        setTimeout(function () {
            $('.menu__background').find('a.0' + i).css({
                left: '50%'
            })
        }, 600 + i * 100);
    }
}
function titleOut(i) {
    return function () {
        setTimeout(function () {
            $('.menu__background').find('a.0' + i).css({
                left: '-100%'
            })
        }, 400 - i * 50);
    }
}