const burgerMenu = document.querySelector('.navigation__offcanvas-body')
const backgourndOpacity = document.querySelector('.background-opacity')

document.addEventListener("click", (e) => {
	const isDropdownButton = e.target.matches("[data-offcanvas-button]");
	if (!isDropdownButton && e.target.closest("[data-offcanvas]") != null) return;
	let currentDropdown;
	if (isDropdownButton) {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
		currentDropdown = e.target.closest("[data-offcanvas]");
		currentDropdown.classList.toggle("active");
		backgourndOpacity.classList.toggle("active");
		if (burgerMenu.classList.value.match(/active/gm) == 'active') {
			document.querySelector('body').style.overflow = "hidden"
			document.querySelector('body').style.opacity = "1"
		} else {
			document.querySelector('body').style.overflow = "auto"
		}
	}
	document.querySelectorAll("[data-offcanvas].active").forEach((offcanvas) => {
		if (offcanvas === currentDropdown) return;
		offcanvas.classList.remove("active");
		backgourndOpacity.classList.remove("active");
		if (burgerMenu.classList.value.match(/navigation__offcanvas-body/gm) == 'navigation__offcanvas-body') {
			document.querySelector('body').style.overflow = "auto"
		}
	});
	document.querySelector('.header__offcanvas-btn').addEventListener('click', () => {
		document.querySelectorAll("[data-offcanvas].active").forEach((offcanvas) => {
			offcanvas.classList.remove("active");
			backgourndOpacity.classList.remove("active");
			if (burgerMenu.classList.value.match(/navigation__offcanvas-body/gm) == 'navigation__offcanvas-body') {
				document.querySelector('body').style.overflow = "auto"
			}
		});
	});
	if (window.innerWidth >= 768) {
		document.querySelectorAll("[data-offcanvas].active").forEach((offcanvas) => {
			offcanvas.classList.remove("active");
			backgourndOpacity.classList.remove("active");
			if (burgerMenu.classList.value.match(/navigation__offcanvas-body/gm) == 'navigation__offcanvas-body') {
				document.querySelector('body').style.overflow = "auto"
			}
		});
	}
	window.addEventListener('resize', function (event) {
		if (window.innerWidth >= 768) {
			document.querySelectorAll("[data-offcanvas].active").forEach((offcanvas) => {
				offcanvas.classList.remove("active");
				backgourndOpacity.classList.remove("active");
				if (burgerMenu.classList.value.match(/navigation__offcanvas-body/gm) == 'navigation__offcanvas-body') {
					document.querySelector('body').style.overflow = "auto"
				}
			});
		}
	}, true);
});

if (window.innerWidth >= 768) {
	document.querySelectorAll('.header__box')[0].append(document.querySelector('.header__location'))
}
if (window.innerWidth <= 768) {
	document.querySelectorAll('.header__box')[1].prepend(document.querySelector('.header__location'))
}
window.addEventListener('resize', function (event) {
	if (window.innerWidth <= 768) {
		document.querySelectorAll('.header__box')[1].prepend(document.querySelector('.header__location'))
	}
	if (window.innerWidth >= 768) {
		document.querySelectorAll('.header__box')[0].append(document.querySelector('.header__location'))
	}
}, true);