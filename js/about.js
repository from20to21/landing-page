import * as all from './common.js';

$(function () {
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        all.start(); //시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
    }, 500)
    setInterval(function () {
        askBox();
    }, 10000);
});


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

