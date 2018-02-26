$(document).ready(function() {
    create_markup();

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

function create_markup(){
    $('.col_expand').each(function(){
        var link_text = $(this).attr('data-link-text');
        var content = $(this).html();

        $(this).html('<div class="expanding_col_container" style="height: 0px;"><div class="expanding_col_content">' + content + '</div></div>');

        $(this).append('<div class="expanding_col_link">' + link_text + "</div>"); 
    });

    activate_col();
}

function activate_col(){
    $('.col_expand .expanding_col_link').on('click', function() {
        var new_height = null;
        var selected_col = $(this).closest('.col_expand');
        var selected_content = selected_col.find('.expanding_col_container');

        selected_col.toggleClass('open');

        if(selected_col.hasClass('open')){
            new_height = selected_col.find('.expanding_col_content').outerHeight(true);
        }else{
            new_height = 0;
        }

        selected_content.animate({'height': new_height + 'px'}, 1000, function() {
            if(new_height != 0){
                $(this).removeAttr('style'); 
            }
        });
    });
}