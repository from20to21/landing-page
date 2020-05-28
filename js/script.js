import * as all from './common.js';

$(function () {
    setTimeout(function () {
        all.startCommon(); //공통시작이벤트 발동
        start();//시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
    }, 500)
});


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
