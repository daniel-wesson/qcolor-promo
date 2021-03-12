
import $ from 'jquery'
import AOS from 'aos'
import Slick from 'slick-carousel'

$(document).ready(() => {
	AOS.init({
		once: true,
		duration: 800
	})

	$('#section_projects .slider .slides').slick({
		infinite: true,
		autoplay: false,
		autoplaySpeed: 5000,
		// pauseOnFocus: false,
		// pauseOnHover: true,
		// pauseOnDotsHover: true,
		fade: true,
		// swipe: true,
		// touchMove: true,
		useTransform: false,
		speed: 700,
		// appendArrows: $('#section-welcome .slider-arrows'),
		prevArrow: $('#section_projects .slider .navigation .prev'),
		nextArrow: $('#section_projects .slider .navigation .next'),
		dots: true,
		appendDots: $('#section_projects .slider .dots'),
		// 
		// responsive: [{
		// 	breakpoint: 576,
		// 	settings: {
		// 		swipe: true,
		// 	}
		// }]
	});
})
