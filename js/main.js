$(document).ready(() => {
    console.log('hello, world and jQuery')
    $('.menu-mobile').slideToggle(0)
    $('.loaded-posts').slideToggle(0)

    $('.menu-mobile-btn').click(function () {
        $('body').toggleClass('active')
        $('.menu-mobile').slideToggle('slow')
    })
    $('.view-btn').click(function () {
        $('.loaded-posts').slideToggle('slow')
    })

})