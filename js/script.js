

$(function () {
    $('.play').click(start);

    $('.menu').click(menuOpen);

})
function menuOpen() {
    $('.title').css({
        left: '-10%'
    });
    $('.menu').css({
        right: '15%'
    });
    $('.menuOpen').css({
        display : 'block'
    })
    setTimeout(function(){
        $('.menuOpen__home').css({
             left: '25%',
        })
    },500)
    setTimeout(function(){
        $('.menuOpen__about').css({
             left: '37.5%',
        })
    },800)
    setTimeout(function(){
        $('.menuOpen__project').css({
             left: '50%',
        })
    },1100)
    setTimeout(function(){
        $('.menuOpen__contact').css({
             left: '62.5%',
        })
    },1400)
}
function start() {
    $(this).fadeOut();
    $('.area').animate({
        height : '100vh'
    },500);
    setTimeout(function(){
        $('.area01').find('.area__wrapper').css({
            width : '100%'
        })
    },1000);
    setTimeout(function(){
        $('.area02').find('.area__wrapper').css({
            width : '100%'
        })
    },1300);
    setTimeout(function(){
        $('.area03').find('.area__wrapper').css({
            width : '100%'
        })
    },1600);
    setTimeout(function(){
        $('.area04').find('.area__wrapper').css({
            width : '100%'
        })
    },1900);
    setTimeout(function(){
        $('.area05').find('.area__wrapper').css({
            width : '100%'
        })
    },2200);
    setTimeout(function(){
        $('.area06').find('.area__wrapper').css({
            width : '100%'
        })
    },2500);
    setTimeout(function(){
        $('.area07').find('.area__wrapper').css({
            width : '100%'
        })
    },2800);
    setTimeout(function(){
        $('.area08').find('.area__wrapper').css({
            width : '100%'
        })
    },3100);
    setTimeout(function(){
        $('.title').css({
            display:'flex',
        })
    },1300);
    setTimeout(function(){
        $('.title').css({
            left: '15%'
        })
    },3400);
    setTimeout(function(){
        $('.menu').css({
            display:'flex',
        })
    },3100);
    setTimeout(function(){
        $('.menu').css({
            right: '5%'
        })
    },4000);
    // setTimeout(function(){
    //     $('.circle01').css({
    //         border : '80px solid #ed924e'
    //     })
    // },4800);
    // setTimeout(function(){
    //     $('.circle02').css({
    //         border : '80px solid #ed924e'
    //     })
    // },4800);
}