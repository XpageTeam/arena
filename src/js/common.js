import $ from "jquery";
// import stringEffect from "./stringAnimate.js"
import {TweenLite} from "gsap/TweenMax"

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
					slidesPerView: 2,
					slidesPerColumn: 2,
					multipleActiveThumbs: false,
					loop: false,
					navigation: {
						nextEl: '.slider-full .swiper-button-next',
						prevEl: '.slider-full .swiper-button-prev',
					},
					

				}
			},

		});

	
	

	});
})


// document.addEventListener("DOMContentLoaded", function(){
// 	const sliderFullMain = document.querySelector('.slider-full__main .swiper-list');
	
// 	if (!sliderFullMain)
// 		return

// 	import("swiper/js/swiper.esm.js").then(function(Module){

// 		const {Swiper, Navigation, EffectFade, Keyboard} = Module;

// 		Swiper.use([Navigation, EffectFade, Keyboard]);



// 		new Swiper(sliderFullMain, {
// 			effect: "fade",
// 			fadeEffect: {
// 				crossFade: true
// 			},
// 			loop: true,

// 			keyboard: {
// 				enabled: true,
// 				onlyInViewport: true
// 			},
// 			navigation: {
// 				nextEl: '.slider-full .swiper-button-next',
// 				prevEl: '.slider-full .swiper-button-prev',
// 			},

// 		});

	
	

// 	});
// })

// document.addEventListener("DOMContentLoaded", function(){
// 	const sliderFullSecond = document.querySelector('.slider-full__nav .swiper-list');
	
// 	if (!sliderFullSecond)
// 		return

// 	import("swiper/js/swiper.esm.js").then(function(Module){

// 		const {Swiper, Navigation, Keyboard} = Module;

// 		Swiper.use([Navigation, Keyboard]);



// 		new Swiper(sliderFullSecond, {
// 			slidesPerView: 2,
// 			slidesPerColumn: 2,
// 			keyboard: {
// 				enabled: true,
// 				onlyInViewport: true
// 			},
// 			navigation: {
// 				nextEl: '.slider-full .swiper-button-next',
// 				prevEl: '.slider-full .swiper-button-prev',
// 			},


// 		});

	
	

// 	});
// })


document.addEventListener("DOMContentLoaded", function(){
	const gallerySlider = document.querySelector('.gallery-slider .swiper-list');
	
	if (!gallerySlider)
		return

	import("swiper/js/swiper.esm.js").then(function(Module){

		const {Swiper, Navigation, Keyboard} = Module;

		Swiper.use([Navigation, Keyboard]);



		new Swiper(gallerySlider, {
			slidesPerView: 4,
			slidesPerColumn: 2,
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			navigation: {
				nextEl: '.gallery-slider .swiper-button-next',
				prevEl: '.gallery-slider .swiper-button-prev',
			},

		});

	
	

	});
})