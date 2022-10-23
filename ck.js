$('.h_menu > li').mouseenter(function () {
    let menu_i = $(this).index();

    if (menu_i < 7) {

        $('.menu_pan').css({
            display: 'none'
        }).eq($(this).index()).css({
            display: 'block'
        })
    }
});
$('.h_menu > li').mouseleave(function () {
    let menu_i = $(this).index();

    if (menu_i < 7) {

        $('.menu_pan').eq($(this).index()).css({
            display: 'none'

        })
    }
})

$('.menu_pan').mouseenter(function () {
    $('.menu_pan').eq($(this).index()).css({
        display: 'block'
    })
})
$('.menu_pan').mouseleave(function () {
    $('.menu_pan').eq($(this).index()).css({
        display: 'none'

    })
})

