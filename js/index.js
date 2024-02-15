$(document).on('readystatechange', () => {
    if(document.readyState === 'complete') {
        $('.page-loader').removeClass('show');
    }
})

$('.login-form').submit(() => {
    console.log('submitted')
})