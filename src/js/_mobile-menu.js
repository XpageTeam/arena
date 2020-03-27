import $ from "jquery"

document.addEventListener("DOMContentLoaded", function(){

	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})

	var menu = $('.h-menu__list').clone();
	var btn = $('.head .head-btn').clone();

	$('.mobile-menu').append(menu);
	$('.mobile-menu').append(btn);





	
})