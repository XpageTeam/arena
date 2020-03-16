import $ from "jquery";

window.jQuery = $
window.$ = $
// window.is = is

require("./jquery.fancybox.js");

document.addEventListener("DOMContentLoaded", function(){
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});


});


document.addEventListener("DOMContentLoaded", function(){
	const photosBuySlider = document.querySelector('.slider-full__main .swiper-list');
	
	if (!photosBuySlider)
		return

	import("swiper/js/swiper.esm.js").then(function(Module){

		const {Swiper, Navigation, EffectFade, Thumbs, Keyboard} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Keyboard]);



		new Swiper(photosBuySlider, {
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			navigation: {
				nextEl: '.slider-full .swiper-button-next',
				prevEl: '.slider-full .swiper-button-prev',
			},
			thumbs: {
				swiper: {
					el: '.slider-full__nav .swiper-list',
					slidesPerView: 1,
					// spaceBetween: 0,
					// watchSlidesVisibility: true,
					// watchSlidesProgress: true,
					multipleActiveThumbs: false,
					loop: false,
					

				}
			},

		});

	
	

	});
})