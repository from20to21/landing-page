
$(function () {
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        start(); //시작이벤트 발동
        $('.menu__button').click(menuToggle); //메뉴 열기&닫기
        slide(); //슬라이드이벤트 발동
    }, 100);
    $('.leftTab__listBtn').click(function () {
        location.href = 'projectList.html';
    })
});
var bln = true;

//메뉴 열기&닫기
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
            zIndex: 70
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
//메뉴 열기&닫기 end

//시작이벤트
function start() {
    //background 등장
    $('.menu').find('button').css({
        right: '6.25%'
    })
    setTimeout(function () {
        $('.background').find('.area01').css({
            transition: '1s',
            width: '87.5%'
        });
    }, 600);
    setTimeout(function () {
        $('.background').find('h3').css({
            top: '5%'
        });
    }, 1300);
    //background 등장 end

    //컨텐츠 등장
    setTimeout(function () {
        $('.leftTab').css({
            left: 0,
            opacity: 1
        });
    }, 1300);
    setTimeout(function () {
        $('.main').css({
            left: '12.5%',
            opacity: 1
        });
    }, 2000);
    setTimeout(function () {
        $('.main__title').css({
            left: '87%',
            opacity: 1
        });
    }, 2500);
    setTimeout(function () {
        $('.contents').css({
            left: '45%',
            opacity: 1
        });
    }, 3000);
    //컨텐츠 등장 end
}
//시작이벤트 end

//슬라이드 이벤트
function slide() {
    setInterval(function () {
        var a = parseInt($('.leftTab__number').find('.change').text());
        if (a < 3) {
            contentsHide();
            $('.leftTab').find('.text0' + a).removeClass('selected');
            $('.main').find('.img0' + a).removeClass('selected');
            a++;
            setTimeout(function () {
                $('.main__wrapper').css({
                    transition: '1s cubic-bezier(0.22, 1, 0.36, 1)',
                    top: (50 - (75 * (a - 1))) + '%'
                });
            }, 500);
            setTimeout(function () {
                contentsShow();
                $('.main').find('.img0' + a).addClass('selected')
            }, 1300);
            $('.leftTab').find('.text0' + a).addClass('selected');
            numChange('leftTab__number', ' .change', '', a);
            numChange('backNum', '', '0', a);
        }
        else {
            contentsHide();
            $('.leftTab').find('.text0' + a).removeClass('selected');
            $('.main').find('.img0' + a).removeClass('selected');
            a = 1
            $('.main').find('.img0' + a).removeClass('selected');
            setTimeout(function () {
                $('.main__wrapper').css({
                    transition: '1s cubic-bezier(0.22, 1, 0.36, 1)',
                    top: '-175%'
                });
            }, 500);
            setTimeout(function () {
                $('.main__wrapper').css({
                    transition: '0s ease-in',
                    top: '50%'
                });
            }, 1300);
            setTimeout(function () {
                contentsShow();
                $('.main').find('.img0' + a).addClass('selected');
            }, 1300);
            $('.leftTab').find('.text0' + a).addClass('selected');
            numChange('leftTab__number', ' .change', '', a);
            numChange('backNum', '', '0', a);
        }
    }, 10000);
}
//슬라이드 이벤트 end

//컨텐츠 등장
function contentsShow() {
    $('.main__title').css({
        left: '87%',
        opacity: 1
    });
    $('.contents').css({
        left: '45%',
        opacity: 1
    });
}
//컨텐츠 등장 end

//컨텐츠 숨기기
function contentsHide() {
    $('.main__title').css({
        left: '82%',
        opacity: 0
    });
    $('.contents').css({
        left: '40%',
        opacity: 0
    });
}
//컨텐츠 숨기기 end

//번호변경
function numChange(div, find, num, a) {
    $('.' + div + find).css({
        opacity: 0
    });
    setTimeout(function () {
        $('.' + div + find).text(num + a);
    }, 500);
    setTimeout(function () {
        $('.' + div + find).css({
            opacity: 1
        });
    }, 1000);
}
//번호변경 end


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
