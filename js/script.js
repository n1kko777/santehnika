window.addEventListener('DOMContentLoaded', function () {
	let menu = document.getElementById('main-menu'),
			nav_hamburger = document.getElementById('nav-hamburger'),
			hamburger = document.getElementById('hamburger'),
			sidebar = document.querySelectorAll('.sidebar-menu_item'),
			searchBlock = document.querySelector('.search-block'),
			closeSearchBlock = document.querySelector('.search-block_form-input_close');

	searchBlock.style.display = 'none';

	window.addEventListener("orientationchange", function() {
			if ( menu.classList.length != 1 ) {
				menu.classList.toggle('open');
				document.body.classList.toggle('modal-open');
				if ( screen.orientation.angle == 0 ) {
					for (var i = 0; i < hamburger.getElementsByTagName('span').length; i++) {
						hamburger.getElementsByTagName('span')[i].classList.toggle('close');
					}
				}
				if ( screen.orientation.angle == 90 ) {
					for (var i = 0; i < nav_hamburger.getElementsByTagName('span').length; i++) {
						nav_hamburger.getElementsByTagName('span')[i].classList.toggle('close');
					}
				}
			}
	});

	hamburger.addEventListener('click', () => {
		menu.classList.toggle('open');
		document.body.classList.toggle('modal-open');
		for (var i = 0; i < hamburger.getElementsByTagName('span').length; i++) {
			hamburger.getElementsByTagName('span')[i].classList.toggle('close');
		}
	});
	hamburger.addEventListener('mouseenter', () => {
		for (var i = 0; i < hamburger.getElementsByTagName('span').length; i++) {
			hamburger.getElementsByTagName('span')[i].style.backgroundColor = '#f9c263';
		}
	});
	hamburger.addEventListener('mouseleave', () => {
		for (var i = 0; i < hamburger.getElementsByTagName('span').length; i++) {
			hamburger.getElementsByTagName('span')[i].style.backgroundColor = '#ccc';
		}
	});
	sidebar[2].addEventListener('click', (event) => {
		document.body.classList.toggle('modal-open');
		hamburger.classList.toggle('d-n');
		if ( menu.classList.length != 1 ) {
			menu.classList.toggle('open');
			document.body.classList.toggle('modal-open');
			for (var i = 0; i < nav_hamburger.getElementsByTagName('span').length; i++) {
				hamburger.getElementsByTagName('span')[i].classList.toggle('close');
			}
		}
		if (searchBlock.style.display == 'none') {
			searchBlock.style.display = 'block';
		} else {
				searchBlock.style.transition = 'all 0.5s ease';		
				searchBlock.style.opacity = '0';
				setTimeout(() => {
					searchBlock.style.display = 'none';
					searchBlock.style.opacity = '1';	
				}, 500);
		}
	});


	nav_hamburger.addEventListener('click', () => {
		menu.classList.toggle('open');
		document.body.classList.toggle('modal-open');
		for (var i = 0; i < nav_hamburger.getElementsByTagName('span').length; i++) {
			nav_hamburger.getElementsByTagName('span')[i].classList.toggle('close');
		}
	});
	sidebar[5].addEventListener('click', (event) => {
		document.body.classList.toggle('modal-open');
		hamburger.classList.toggle('d-n');
		menu.classList.toggle('open');
		document.body.classList.toggle('modal-open');
		for (var i = 0; i < nav_hamburger.getElementsByTagName('span').length; i++) {
			nav_hamburger.getElementsByTagName('span')[i].classList.toggle('close');
		}
		if (searchBlock.style.display == 'none') {
			searchBlock.style.display = 'block';
		} else {
				searchBlock.style.transition = 'all 0.5s ease';		
				searchBlock.style.opacity = '0';
				setTimeout(() => {
					searchBlock.style.display = 'none';
					searchBlock.style.opacity = '1';	
				}, 500);
		}
	});
	
	closeSearchBlock.addEventListener('click', () => {
		document.body.classList.toggle('modal-open');
		hamburger.classList.toggle('d-n');
		if (searchBlock.style.display == 'none') {
			searchBlock.style.display = 'block';
		} else {
				searchBlock.style.transition = 'all 0.5s ease';		
				searchBlock.style.opacity = '0';
				setTimeout(() => {
					searchBlock.style.display = 'none';
					searchBlock.style.opacity = '1';	
				}, 500);
		}
	});


});