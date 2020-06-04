import * as all from './common.js';

var xhr = new XMLHttpRequest();
xhr.onload = function () {
    var responseObject = JSON.parse(xhr.responseText);
    $('.menu').load("menu.html"); // menu html 삽입
    setTimeout(function () {
        all.startCommon(); //공통시작이벤트 발동
        start();//시작이벤트 발동
        $('.menu__button').click(all.menuToggle); //메뉴 열기&닫기
    }, 500);
    $('.leftTab__listBtn').click(function () {
        location.href = 'projectList.html';
    });//프로젝트리스트로 이동
    $('.git').click(function () {
        var openNewWindow = window.open("about:blank");
        openNewWindow.location.href = "http://github.com/lsh58"
    }); //깃허브사이트 새창열기
    $('.prev').click(function () {
        window.location.href = "about.html";
    });//이전페이지로 이동
    $('.next').click(function () {
        window.location.href = "contact.php";
    });//다음페이지로 이동
    $(window).on('mousewheel', function () {
        slideScroll();
    });//스크롤로 슬라이드 발동
    $(window).on('touchend', function () {
        slideScroll();
    });
    $('.leftTab__text').click(btnClick);//좌측단 이름 클릭시 슬라이드 발동
    //사이트 바로가기
    $('.contents button').click(function () {
        if (a == 1) {
            window.open("http://lsh58.github.io/ZARA", "Popup", "width=500,height=800,resizable=no,menubar=no");
        }
        if (a == 2) {
            window.open("http://tmdgus508.dothome.co.kr/", "Popup", "");
        }
        if (a == 3) {
            window.open("http://lsh58.github.io/tour", "Popup", "");
        }
    });
    //사이트 바로가기 end
    var bgRight = 100 - parseInt($('.background').find('.area').css('width')) / parseInt($('body').css('width')) * 100;

    //시작이벤트
    function start() {

        if (parseInt($('.contents').css('zIndex')) == 70) {
            $('.main').addClass('tablet');
        }
        setTimeout(function () {
            $('.background').find('.area01').css({
                transition: '1s',
                width: bgRight + '%'
            });
        }, 600); //background 등장

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
            if ($('.main').hasClass('tablet')) {
                contentsShowTablet();
            }
            else {
                contentsShowPc();
            }

            numChange('leftTab__number', ' .change', '', 1);
            numChange('backNum', '', '0', 1);
        }, 2500);
        setTimeout(function () {
            $('.scroll').css({
                opacity: 1
            });
        }, 3000);
        //컨텐츠 등장 end
    }
    //시작이벤트 end

    //버튼클릭 이벤트
    var clickBln = true;

    function btnClick() {
        if (clickBln == true) {
            clickBln = false;
            $('.leftTab__text').removeClass('selected');
            $(this).addClass('selected');
            a = $('.leftTab').find($('.selected')).data().num - 1;
            slideScroll();
        }
        setTimeout(function () {
            clickBln = true;
        }, 2000);
    }
    //버튼클릭 이벤트 end


    //스크롤 슬라이드 이벤트
    var scrollBln = true;
    var num;

    function slideScroll() {
        if (scrollBln == true) {
            if ($('.main').hasClass('tablet')) {
                slideTablet();
            }
            else {
                slidePc();
            }
            setTimeout(function () {
                num = $('.leftTab').find($('.selected')).data().num - 1;
                $('.main__title').html(responseObject[num].title);
                $('.contents__sub').html(responseObject[num].sub);
                $('.contents__date').html(responseObject[num].date);
                $('.contents__text').html(responseObject[num].text);
                $('.contents__func').html(responseObject[num].func);
                $('.contents__cross').html(responseObject[num].cross);
                $('.contents__skill').html(responseObject[num].skill);
                $('.contents__link').html(responseObject[num].link);
            }, 1000);
            scrollBln = false;
            setTimeout(function () {
                scrollBln = true;
            }, 2000);
        }
    }
    //스크롤 슬라이드 이벤트 end


    //슬라이드이벤트
    var a = parseInt($('.leftTab__number').find('.change').text());

    function slidePc() {
        if (a < 3) {
            contentsHidePc();
            $('.leftTab__text').removeClass('selected');
            $('.main__img').removeClass('selected');
            a++;
            setTimeout(function () {
                $('.main__wrapper').css({
                    transition: '1s cubic-bezier(0.22, 1, 0.36, 1)',
                    top: (50 - (75 * (a - 1))) + '%'
                });
            }, 500);
            setTimeout(function () {
                contentsShowPc();
                $('.main').find('.img0' + a).addClass('selected')
            }, 1300);
            $('.leftTab').find('.text0' + a).addClass('selected');
            setTimeout(function () {
                $('.leftTab__number .change').text(a);
            }, 500);
            numChange('backNum', '', '0', a);
        }
        else {
            contentsHidePc();
            $('.leftTab__text').removeClass('selected');
            $('.main__img').removeClass('selected');
            a = 1;
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
                contentsShowPc();
                $('.main').find('.img0' + a).addClass('selected');
            }, 1300);
            $('.leftTab').find('.text0' + a).addClass('selected');
            setTimeout(function () {
                $('.leftTab__number .change').text(a);
            }, 500);
            numChange('backNum', '', '0', a);
        }
    }

    function slideTablet() {
        if (a < 3) {
            contentsHideTablet();
            $('.leftTab__text').removeClass('selected');
            $('.main__img').removeClass('selected');
            a++;
            setTimeout(function () {
                $('.main__wrapper').css({
                    transition: '1s cubic-bezier(0.22, 1, 0.36, 1)',
                    top: (25 - (75 * (a - 1))) + '%'
                });
            }, 500);
            setTimeout(function () {
                contentsShowTablet();
                $('.main').find('.img0' + a).addClass('selected')
            }, 1300);
            $('.leftTab').find('.text0' + a).addClass('selected');
            setTimeout(function () {
                $('.leftTab__number .change').text(a);
            }, 500);
            numChange('backNum', '', '0', a);
        }
        else {
            contentsHideTablet();
            $('.leftTab__text').removeClass('selected');
            $('.main__img').removeClass('selected');
            a = 1;
            setTimeout(function () {
                $('.main__wrapper').css({
                    transition: '1s cubic-bezier(0.22, 1, 0.36, 1)',
                    top: '-200%'
                });
            }, 500);
            setTimeout(function () {
                $('.main__wrapper').css({
                    transition: '0s ease-in',
                    top: '50%'
                });
            }, 1300);
            setTimeout(function () {
                contentsShowTablet();
                $('.main').find('.img0' + a).addClass('selected');
            }, 1300);
            $('.leftTab').find('.text0' + a).addClass('selected');
            setTimeout(function () {
                $('.leftTab__number .change').text(a);
            }, 500);
            numChange('backNum', '', '0', a);
        }
    }


    //컨텐츠 등장
    function contentsShowPc() {
        $('.main__title').css({
            left: '87%',
            opacity: 1
        });
        $('.contents').css({
            left: '45%',
            opacity: 1
        });
    }
    function contentsShowTablet() {
        $('.main__title').css({
            left: '10%',
            opacity: 1
        });
        $('.contents').css({
            left: '20%',
            opacity: 1
        });
    }
    //컨텐츠 등장 end

    //컨텐츠 숨기기
    function contentsHidePc() {
        $('.main__title').css({
            left: '82%',
            opacity: 0
        });
        $('.contents').css({
            left: '40%',
            opacity: 0
        });
    }
    function contentsHideTablet() {
        $('.main__title').css({
            left: '5%',
            opacity: 0
        });
        $('.contents').css({
            left: '15%',
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
}

xhr.open('GET', '../js/data.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request


