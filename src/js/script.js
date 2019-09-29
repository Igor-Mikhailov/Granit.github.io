$(document).ready(function(){
	var link = $('.navbar-burger');
	var link_active = $('.navbar-burger_active');
	var menu = $('.mobile-navigation');
	var nav_link = $('.mobile-navigation a');

	link.click(function(){
		link.toggleClass('navbar-burger_active');
		menu.toggleClass('mobile-navigation__active')
	});
	nav_link.click(function(){
		link.toggleClass('navbar-burger_active');
		menu.toggleClass('mobile-navigation__active');
	});


});