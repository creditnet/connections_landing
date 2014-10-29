$(function(){
    $('#order-form').submit(function(e) {
        e.preventDefault();

        //
        $('#promo-view').fadeOut(250, function(){
            $('#after-submit-view').fadeIn(250);
        });
    });
});
