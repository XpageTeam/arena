import $ from "jquery"

document.addEventListener("DOMContentLoaded", function(){

	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})

	var menu = $('.h-menu__list').clone();
	var btn = $('.head .head-btn').clone();

	$('.mobile-menu .mobile-menu__links').append(menu);
	$('.mobile-menu .mobile-menu__links').append(btn)

})