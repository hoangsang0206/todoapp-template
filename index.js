$(document).on('readystatechange', () => {
    if(document.readyState === 'loading') {
        $('.page-loader').addClass('show');
    } else {
        $('.page-loader').removeClass('show');
    }
})