
$(function () {
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
        }, 2000)
        //연속실행 방지 end
    }
}


function start() {
    //background 등장
    for (var i = 1; i < 9; i++) {
        var BgShow = bgShow(i, "background", " .area__wrapper", 0, '100%', 100);
        BgShow();
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
