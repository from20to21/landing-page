import * as all from './common.js';

$(function () {
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        all.startCommon(); //공통시작이벤트 발동
        start();//시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
    }, 500);
    $('.main__contact__name').find('.selected').focus();

});

//시작이벤트
function start() {
    //background 등장
    setTimeout(function () {
        $('.background').find('.area01').css({
            transition: '1s',
            width: '87.5%'
        });
    }, 600);
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
            left: '25%',
            opacity: 1
        });
    }, 2000);
    //컨텐츠 등장 end
}
//시작이벤트 end


function inputClick() {
    $('.main__contact div').find('input, textarea').click(function () {
        $('.main__contact div').find('span').removeClass('selected');
        $(this).parent().find('span').toggleClass('selected');
    })

}
inputClick();