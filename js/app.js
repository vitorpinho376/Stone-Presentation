// Sticky Header

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.main-header').addClass('fix-header');
        $('.logo-holder').removeClass('hidden');
    }
    else {
        $('.main-header').removeClass('fix-header');
        $('.logo-holder').addClass('hidden');
    }
});
