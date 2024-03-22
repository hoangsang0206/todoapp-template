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

function closeTaskList(taskList) {
    let height = taskList.height();
    let targetHeight = 0;
    let duration = 300; //0.3s

    taskList.data('box-height', height);

    taskList.animate({
        height: targetHeight
    }, duration)

    return height;
}

function showTaskList(taskList, height) {
    let duration = 300; //0.3s

    taskList.animate({
        height: height
    }, duration)
}

//------------------------------------------

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


$('.task-box').click(function() {
    $('.task-box').removeClass('active');
    $(this).addClass('active');
    $('.task-infomation-wrapper').removeClass('close');
    setMainWidth();
    showOverlay();
})

$('.toggle-task-list').click(function() {
    let taskList = $(this).parent().next('.task-list');

    if(!taskList.hasClass('close')) {
        taskList.addClass('close');
        closeTaskList(taskList);
    } else {
        taskList.removeClass('close');
        
        let height = taskList.data('box-height');

        showTaskList(taskList, height);
    }
})

$('.edit-sub-task-btn').click(function() {
    $(this).parent().find('.edit-sub-task').addClass('show');
    $(this).parent().find('.edit-sub-task input').focus();
    $(this).parent().find('.edit-sub-task input').val($(this).parent().find('.sub-task-label span').text())
})

$('.edit-sub-task-submit').click(function() {
    $(this).closest('.edit-sub-task').removeClass('show');
})

$('.add-new-task, .add-task-floating').click(() => {
    $('.create-task').addClass('show');
})

$('.cancle-create-task').click(() => {
    $('.create-task').removeClass('show');
})
