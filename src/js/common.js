import $ from "jquery"
import { TimelineMax, TweenMax, Linear, TweenLite, TimelineLite } from 'gsap/dist/gsap.js';
import ScrollMagic from 'scrollmagic';

window.jQuery = $
window.$ = $
// window.is = is

window.TweenMax = TweenMax;

require("scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
// require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js");

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

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



	var controller = new ScrollMagic.Controller();


	if($('.services__list').length){

		var servicesItems = document.querySelectorAll(".services__item");

		for (var i=0; i < servicesItems.length; i++) {

		    new ScrollMagic.Scene({
		    				triggerElement: servicesItems[i],
		    				triggerHook: 0.9,
		    				// duration: 500,
		    			})
						.setClassToggle(servicesItems[i], "visible")
		    			.reverse(false)
						.addTo(controller)
						// .setTween(
			   //             	new TimelineLite()
			   //              // .fromTo(servicesItems[i], 1, {y : 30 * i, opacity: 0}, {y : 0,  opacity: 1})
		    //             );

			}


	}

	if($('.main-banner__cont').length){

	    new ScrollMagic.Scene({
	    				triggerElement: ".main-banner",
	    				triggerHook: 0.1,
	    				duration: 500,
	    			})
					.addTo(controller)
					.setTween(
		               	new TimelineLite()
		                .fromTo(".main-banner", 1, {opacity: 0}, {opacity: 1})
	                );

			


	}



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


document.addEventListener("DOMContentLoaded", function(){
	const gallerySlider = document.querySelector('.gallery-slider .swiper-list');
	
	if (!gallerySlider)
		return

	import("swiper/js/swiperNaNesm.js").then(function(Module){

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

$(function(){				
				

		var $parallaxContainer 	  = $("#content"); //our container
		var $parallaxItems		    = $parallaxContainer.find(".parallax");  //elements
		var fixer				          = -0.004;		//experiment with the value
		


		$(document).on("mousemove", function(event){					
					
			var pageX =  event.pageX - ($parallaxContainer.width() * 0.5);  //get the mouseX - negative on left, positive on right
			var pageY =  event.pageY - ($parallaxContainer.height() * 0.5); //same here, get the y. use console.log(pageY) to see the values
			

			$parallaxItems.each(function(){
				
				var item 	= $(this);
				var speedX	= item.data("speed-x");  				
				var speedY	= item.data("speed-y");
			
				TweenLite.to(item, 0.5, {
					x: (item.position().left + pageX * speedX )*fixer,    //calculate the new X based on mouse position * speed 
					y: (item.position().top + pageY * speedY)*fixer
				});
	
	//or use set - not so smooth, but better performance
	/*TweenLite.set(item, {
					x: (item.position().left + pageX * speedX )*fixer,
					y: (item.position().top + pageY * speedY)*fixer
				});*/
				
			});
		});	


	});