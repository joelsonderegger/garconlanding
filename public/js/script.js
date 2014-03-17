$( document ).ready(function() {
	$('.vertraulich').hide();

	$("#email").hover(function () {
            $('.vertraulich').fadeIn('fast');
        }, function () {
        $('.vertraulich').fadeOut('fast');
        });
});