import * as all from './common.js';

// var xhr = new XMLHttpRequest();

// xhr.addEventListener('load', function () {
//     responseObject = JSON.parse(xhr.responseText);
var st;
$(function () {
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        all.startCommon(); //공통시작이벤트 발동
        start();//시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
        slideInterval(); //슬라이드 인터벌 이벤트 발동
        Btn(); //상하버튼 이벤트 발동
    }, 500);
    $('.leftTab__listBtn').click(function () {
        location.href = 'projectList.html';
    })
});
$('.up, .down').on({
    mouseenter: function () {
        clearInterval(st);
    },
    mouseleave: slideInterval
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
            left: '12.5%',
            opacity: 1
        });
    }, 2000);
    setTimeout(function () {
        $('.main__title').css({
            left: '87%',
            opacity: 1
        });
        numChange('leftTab__number', ' .change', '', 1);
        numChange('backNum', '', '0', 1);
    }, 2500);
    setTimeout(function () {
        $('.contents').css({
            left: '45%',
            opacity: 1
        });
        $('.up, .down').css({
            right: '15%',
            opacity: 1
        });
    }, 3000);
    //컨텐츠 등장 end
}
//시작이벤트 end

//사이트 바로가기
$('.contents a').click(function () {
    if (a == 1) {
        window.open("http://lsh58.github.io/ZARA", "Popup", "width=500,height=800,resizable=no,menubar=no");
    }
    if (a == 2) {
        window.open("http://lsh58.github.io/BML", "Popup", "");
    }
    if (a == 3) {
        window.open("http://lsh58.github.io/tour", "Popup", "");
    }
});
//사이트 바로가기 end

//슬라이드 오토
function slideInterval() {
    st = setInterval(function () {
        slide();
    }, 5000)
}
//슬라이드 오토 end

//슬라이드이벤트
var a = parseInt($('.leftTab__number').find('.change').text());

function slide() {
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
}
//슬라이드이벤트 end
var blnBtn = true;
//상하버튼 클릭이벤트
function Btn() {
    $('.up').click(function () {
        if (a == 1) {
            a = 2;
            slide();
        }
        else {
            a--;
            slide();
        }
    });
    $('.down').click(function () {
        if (blnBtn == true) {
            blnBtn = false;
            slide();
            setTimeout(function () {
                blnBtn = true
            }, 2000);
        }
    });
}
//상하버튼 클릭이벤트end


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
// });

// xhr.open('GET', 'data.json', true);        // Prepare the request
// xhr.send(null);                                 // Send the request


