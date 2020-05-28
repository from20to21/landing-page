import * as all from './common.js';

$(function () {
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        all.startCommon(); //공통시작이벤트 발동
        start();//시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
    }, 500);

});

//시작이벤트
function start() {
    //background 등장
    setTimeout(function () {
        $('.background').find('.area02').css({
            transition: '1s',
            width: '75%'
        });
    }, 600);
    //background 등장 end

    //컨텐츠 등장
    setTimeout(function () {
        $('.filter__search').css({
            opacity: 1,
            transform: 'translateY(0)'
        });
        $('.filter__title').css({
            opacity: 1,
        });
    }, 1300);
    setTimeout(function () {
        for (var i = 0; i < 7; i++) {
            var filter = filterShow(i, 'filter__category li', '20%');
            filter();
        }
    }, 2000);
    setTimeout(function () {
        for (var i = 0; i < 9; i++) {
            var filter = filterShow(i, 'project__contents', '0');
            filter();
        }
    }, 3000);
    //컨텐츠 등장 end
}
//시작이벤트 end

function filterShow(i, div, num) {
    return function () {
        setTimeout(function () {
            $('.' + div).eq(i).css({
                marginLeft: num,
                opacity: 1
            });
        }, i * 200);
    }
}
