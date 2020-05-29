import * as all from './common.js';

$(function () {
    setTimeout(function () {
        all.startCommon(); //공통시작이벤트 발동
        start();//시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
    }, 100)
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

//원그리기
var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var canvas3 = document.getElementById('canvas3');
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
var gradient1 = ctx1.createLinearGradient(280, 340, 680, 940);
var gradient2 = ctx2.createLinearGradient(880, 340, 1480, 940);
var gradient3 = ctx3.createLinearGradient(1480, 340, 2080, 940);
var num = 360;
g1();
setTimeout(g2, 3000);
setTimeout(g3, 6000);
setTimeout(cancelAnimationFrame(ani01), 3000);
function g1() {
    ctx1.beginPath();
    gradient1.addColorStop("0", "#d70000");
    gradient1.addColorStop("1.0", "#970000");
    ctx1.lineWidth = 90;
    ctx1.strokeStyle = gradient1;
    num -= 10;
    ctx1.arc(480, 540, 300, (Math.PI / 180) * 0, (Math.PI / 180) * num, true);
    ctx1.stroke();
    if (num >= 20) {
        var ani01 = requestAnimationFrame(g1);
    }
    else {
        num = 370;
        ani01 = requestAnimationFrame(g1);
    }
}-

// function g2() {
//     ctx2.beginPath();
//     gradient2.addColorStop("0", "#d70000");
//     gradient2.addColorStop("1.0", "#970000");
//     ctx2.lineWidth = 90;
//     ctx2.strokeStyle = gradient2;
//     ctx2.arc(1080, 540, 300, (Math.PI / 180) * 0, (Math.PI / 180) * num, true);
//     ctx2.stroke();
//     if (num >= 20) {
//         g2ani = requestAnimationFrame(g2);
//     } else {
//         num = 370;
//         g2ani = requestAnimationFrame(g2);
//         cancelAnimationFrame(g2ani);
//     }
// }


// function g3() {
//     ctx3.beginPath();
//     gradient3.addColorStop("0", "#d70000");
//     gradient3.addColorStop("1.0", "#970000");
//     ctx3.lineWidth = 90;
//     ctx3.strokeStyle = gradient3;
//     ctx3.arc(1680, 540, 300, (Math.PI / 180) * 270, (Math.PI / 180) * 90, true);
//     ctx3.stroke();
//     if (num >= 20) {
//         g3ani = requestAnimationFrame(g3);
//     } else {
//         num = 370;
//         g3ani = requestAnimationFrame(g3);
//         cancelAnimationFrame(g3ani);
//     }
// }
// g3();
//원그리기 end





// //메뉴클릭용
// $('canvas').click(function () {
//     if (e.clientX > 1800) {
//         alert('menu')
//     }
// })
// //메뉴클릭용