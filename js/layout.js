function setMainWidth() {
    if(window.innerWidth >= 1024) {
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
}

function showOverlay() {
    if(window.innerWidth < 1024) {
        $('.overlay').show();
    } else {
        $('.overlay').hide();
    }
}

function hideOverlay() {
    $('.overlay').hide();
}

function showContentLoading() {
    $('.loading').css('display', 'grid');
}

function hideContentLoading() {
    $('.loading').hide();
}

$(window).on('load', () => {
    $('.page-loader').removeClass('show');
})

$(window).resize(() => {
    if(window.innerWidth < 768) {
        $('.navigation').removeClass('close');
    }
})

$('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})

$('.toggle-nav').click(() => {
    if(window.innerWidth < 768) {
        $('.navigation').removeClass('show');
        hideOverlay();
    } else {
        $('.navigation').toggleClass('close');
        setMainWidth();
    }
})

$('.add-new-task').click(() => {
    $('.task-infomation-wrapper').removeClass('close');
    setMainWidth();
    showOverlay();
})

$('.close-task-info').click(() => {
    $('.task-infomation-wrapper').toggleClass('close');
    setMainWidth();
    hideOverlay();
})

$('.overlay').click(() => {
    $('.navigation').removeClass('show');
    $('.task-infomation-wrapper').addClass('close');
    hideOverlay();
})

//Click to show navigation (mobile)
$('.show-nav-action').click(() => {
    $('.navigation').addClass('show');
    showOverlay();
})