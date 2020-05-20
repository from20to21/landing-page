
$(function () {
    setTimeout(function () {
        start(); //시작이벤트 발동
        $('.menu__button').click(menuToggle); //메뉴 열기&닫기
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

        //menu__background 사라지기
        setTimeout(function () {
            $('.home').css({
                left: '-100%'
            })
        }, 350);
        setTimeout(function () {
            $('.about').css({
                left: '-100%'
            })
        }, 300);
        setTimeout(function () {
            $('.project').css({
                left: '-100%'
            })
        }, 250);
        setTimeout(function () {
            $('.contact').css({
                left: '-100%'
            })
        }, 200);
        setTimeout(function () {
            for (var i = 1; i < 9; i++) {
                var D = reverseDDDG(i, "menu__background");
                D();
            }
        }, 100)
        for (var i = 1; i < 9; i++) {
            var D = DDDG(i, "background");
            D();
        }
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

        //menu title 등장
        $('.menu').find('h3').css({
            top: '-5%'
        });
        //menu title 등장 end

        //menu__background 원래위치로 돌려두기
        setTimeout(function () {
            $('.menu__background').find('.area__wrapper').css({
                transform: 'translateX(0)',
                width: 0
            });
            $('.menu__background').css({
                zIndex: -1
            });
        }, 1600)
        //menu__background 원래위치로 돌려두기;
        setTimeout(function () {
            bln = true;
        }, 2500)
    }
    if (!$('.menu__button').hasClass('open') && bln == true) {
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

        //title 숨기기
        setTimeout(function () {
            $('.title').css({
                display: 'flex',
            })
        }, 300);
        $('.title').css({
            left: '-10%'
        })
        //title 숨기기 end

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
            for (var i = 1; i < 9; i++) {
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
        }, 2100);
        //menu title 등장 end

        //background 원래위치로 돌려두기
        setTimeout(function () {
            $('.background').find('.area__wrapper').css({
                transform: 'translateX(0)',
                width: 0
            })
        }, 1600)
        //background 원래위치로 돌려두기;
        setTimeout(function () {
            bln = false;
        }, 2500)
    }
}

function start() {

    setTimeout(function () {
        $('.background').find('h3').css({
            top: '5%'
        });
    }, 2100);

    setTimeout(function () {
        $('.background').find('.area01').css({
            transition: '.5s',
            width: '87.5%'
        });
    }, 600);

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
function redreverseDDDG(i, dv) {
    return function () {
        setTimeout(function () {
            $('.' + dv + ' .area0' + i).css({
                width: '0'
            });
        }, 500 - i * 50);
    }
}

