$(window).on('load', () => {
    $('.page-loader').removeClass('show');
})

$('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})

$('.toggle-nav').click(() => {
    $('.navigation').toggleClass('close');
})