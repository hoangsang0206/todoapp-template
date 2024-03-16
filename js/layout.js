$(window).on('load', () => {
    $('.page-loader').removeClass('show');
})

$('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})

$('.toggle-nav').click(() => {
    $('.navigation').toggleClass('close');
    setMainWidth();
})

$('.add-new-task').click(() => {
    $('.task-infomation-wrapper').removeClass('close');
    setMainWidth();
})

$('.toggle-task-info').click(() => {
    $('.task-infomation-wrapper').toggleClass('close');
    setMainWidth();
})

function setMainWidth() {
    let main = $('main');
    let taskInf = $('.task-infomation-wrapper');
    let nav = $('.navigation');

    if(!taskInf.hasClass('close') && !nav.hasClass('close')) {  
        main.css('width', 'calc(100% - 570px)');
    } else if(!nav.hasClass('close') && taskInf.hasClass('close')) {
        main.css('width', 'calc(100% - 270px)');
    } else if(nav.hasClass('close') && !taskInf.hasClass('close')) {
        main.css('width', 'calc(100% - 370px)');
    } else {
        main.css('width', 'calc(100% - 70px)');
    }
}