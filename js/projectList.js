import * as all from './common.js';

$(function () {
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        all.startCommon(); //공통시작이벤트 발동
        start();//시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
        $('.git').click(function(){
            var openNewWindow = window.open("about:blank");
            openNewWindow.location.href="http://github.com/lsh58"
        }); //깃허브사이트 새창열기
    }, 500);
    $('.filter__category li').find('button').click(function(){
        $('.filter__category li').find('button').removeClass('checked');
        $(this).toggleClass('checked');
    });
    //검색구현해야
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

//사이트 바로가기
$('.contents01 button').click(function () {
    window.open("http://lsh58.github.io/ZARA", "Popup", "width=500,height=800,resizable=no,menubar=no");
});
$('.contents02 button').click(function () {
    window.open("http://tmdgus508.dothome.co.kr/", "Popup", "");
});
$('.contents03 button').click(function () {
    window.open("http://lsh58.github.io/tour", "Popup", "");
});
$('.contents04 button').click(function () {
    window.open("http://lsh58.github.io/landing-page", "Popup", "");
});
//사이트 바로가기 end

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
