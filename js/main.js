// 메뉴 토글 버튼
var toggle = false;

$('.gnb_toggle_btn').click(function (e) {
    toggle = !toggle

    e.preventDefault();

    if (toggle) {
        $('.m_menu').slideDown();
        $('.gnb_toggle_btn span').addClass('selected');
        $('body').addClass('none_scroll');
    } else {
        $('.m_menu').slideUp();
        $('.gnb_toggle_btn span').removeClass('selected');
        $('body').removeClass('none_scroll');
    }
});

$('.m_menu_list li').click(function(){
        $('.m_menu').slideUp();
        $('.gnb_toggle_btn span').removeClass('selected');
        $('body').removeClass('none_scroll');
})

// Works Scroll
var workListNum = $('.box_list').children().size();
var skillListNum = $('.skill_list').children().size();

$(window).load(function () {

    inEvent();

    function inEvent() {
        $(window).on('scroll', scrollAni);
    }

    function scrollAni() {
        var scrollTop = $(this).scrollTop();

        for (i = 0; i < workListNum; i++) {
            if (scrollTop >= $('.box_list').children().eq(i).offset().top - 500) {
                $('.box_list').children().eq(i).children().first().animate({
                    'opacity': 1,
                    'left': 0
                }, 2000, "easeOutCubic");
                $('.box_list').children().eq(i).children().last().animate({
                    'opacity': 1,
                    'right': 0
                }, 2000, "easeOutCubic");
            }
        }
    }
});

// 모바일_메뉴
$('.m_more').click(function(){
    $('.dimmed').show();
    $('.modal').show();
    $('body').addClass('none_scroll');
});

// 디자인
var w = ($(window).width()/2)-($('.design_modal').width()/2);
var h = ($(window).height()/2)-($('.design_modal').height()/2);

$('.design_modal').css({
    left: w,
    top: h
})

$('.design_area').click(function(){
    $('.dimmed').fadeIn(0);
})

$('.dalkomm_area').click(function(){
//    $('.dimmed').show();
    $('.design_modal').show();
    $('.dalkomm_book').show();
    $('.illust_book').hide();
    $('.figma_btn').show();
    $('body').addClass('none_scroll');
})

$('.illust_area').click(function(){
//    $('.dimmed').show();
    $('.design_modal').show();
    $('.illust_book').show();
    $('.dalkomm_book').hide();
    $('.figma_btn').hide();
    $('body').addClass('none_scroll');
})

$('.dimmed').click(function(){
    $('.dimmed').fadeOut();
    $('.design_modal').hide();
    $('body').removeClass('none_scroll');
})
