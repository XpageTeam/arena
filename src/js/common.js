import $ from "jquery";
import { TimelineMax, TweenMax, Linear, TweenLite, TimelineLite } from 'gsap/all';
import ScrollMagic from 'scrollmagic';
import IMask from 'imask';
import "./_mobile-menu.js";


window.jQuery = $
window.$ = $
// window.is = is
window.IMask = IMask

window.TweenMax = TweenMax
window.TweenLite = TweenLite
window.TimelineMax = TimelineMax




require("./animation.gsap.js");
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

	if($('body').hasClass('loading'))
		$('body').removeClass('loading');
		$('body').addClass('loaded');

	if($('.main-banner__cont').length && $('body').hasClass('loaded')){

	    new ScrollMagic.Scene({
			triggerElement: ".main-banner-bg",
			triggerHook: 0,
			duration: 1000,
		})
		.setTween(
           	new TimelineMax()
            .fromTo(".main-banner-bg", .0001, {scale: 1}, {scale: 1.1})
            .seek(15)
            // TweenLite.to(".main-banner__cont .box", .1, {
            // 	scale: 1.1,
            // 	autoKill: true,
            //     overwrite: 5,
            // })
        )
		.addTo(controller);

		var tween = TweenMax.fromTo(".main-banner", 1, {y: 0}, {y: -100});

		var mainTitle = new ScrollMagic.Scene({
			triggerElement: '.areas',
			trigerHook: .3,
			duration: 1000,
		})
		.setTween(tween)
        .addTo(controller)

			


		var blurElement = {a: 0};
		var scene = new ScrollMagic.Scene({
			triggerElement: '.main-banner-bg',
			duration: 600,
			triggerHook: 'onLeave'
		})
		.setTween(blurElement, 1, {a: 5, onUpdate: applyBlur}) 
		.addTo(controller);
		  

		function applyBlur(){
			TweenMax.set(['.main-banner-bg'], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});  
		};
	}

	if($(window).width() < 667){
		$('body').on('click', '.br-item__name', function(){
			$(this).closest('.br-item__top').toggleClass('js__open');
			$(this).closest('.br-item__top').siblings('.br-item__rows').slideToggle();
		})

	}


});



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
			breakpoints: {
				1000: {
					slidesPerView: 4,
					slidesPerColumn: 2,
						
			    },
				660: {
					slidesPerView: 2,
					slidesPerColumn: 2,
						
			    },
			    320: {
					slidesPerView: 1,
					slidesPerColumn: 1,	
			    }
			}

		});

	});

})


document.addEventListener("DOMContentLoaded", function(){
	const zoneSlider = document.querySelector('.zone-slider .swiper-list');
	
	if (!zoneSlider)
		return

	import("swiper/js/swiper.esm.js").then(function(Module){
		const {Swiper, Navigation, Keyboard, Lazy} = Module;
		Swiper.use([Navigation, Keyboard, Lazy]);

		new Swiper(zoneSlider, {
			slidesPerView: 4,
			spaceBetween: 25,
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			lazy: {
				// loadPrevNext: 1,
				loadPrevNextAmount: 1,
			},
			navigation: {
				nextEl: '.zone-slider .swiper-button-next',
				prevEl: '.zone-slider .swiper-button-prev',
			},
			breakpoints: {
				1000: {
					slidesPerView: 4,
			    },
				660: {
					slidesPerView: 2,
			    },
			    320: {
					slidesPerView: 1,
			    }
			}

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


			
		});
	});	


});