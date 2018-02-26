$(document).ready(function() {
    var btnTop = $('#back-to-top');
    scrollHundred();

    $(window).scroll(function() {
        scrollHundred();
    });

    $(btnTop).click(function() {
        $('html,body').animate({scrollTop: 0}, 200);
        // snappy UI animations that are still perceived by users should hover between 200ms-250ms
        // http://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/
        // A mild frustration of mine is using websites where you have to scroll and scroll and scroll and scroll to get
        // the page to load the information. Aesthetically pleasing perhaps, but usually infuriating to use.
    });

    // discrete function can be called multiple times, like refreshing page @ bottom, and button isn't there on refresh.
    function scrollHundred(){
        if($(window).scrollTop() > 100){
            btnTop.fadeIn(500);
        }else{
            btnTop.fadeOut(500);
        }
    }
});