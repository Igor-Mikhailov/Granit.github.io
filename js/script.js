$(document).ready(function(){
	$('.js-nav-menu-toggle').on('click', function() {
    	$(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
  	});
  
  	$('html').on('click', function(e) {
    	if(!$(e.target).closest('.js-nav-menu').length &&
      		($('.js-nav-menu').hasClass('navigation-menu--open'))) {
        	$('.js-nav-menu').removeClass('navigation-menu--open');
    	}
  	});
	$("#mobile-navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	$("#navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


});