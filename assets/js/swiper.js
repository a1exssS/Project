import "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
import 'swiper/swiper-bundle.css';
const swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
	loop: true,
});
const swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
	loop: true,
});
const swiper3 = new Swiper(".mySwiper3", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
	loop: true,
});
const swiper4 = new Swiper(".mySwiper4", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
	loop: true,
});