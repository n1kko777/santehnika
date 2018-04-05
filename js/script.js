window.addEventListener('DOMContentLoaded', function () {
	let menu = document.getElementById('main-menu'),
			hamburger = document.getElementById('hamburger'),
			sidebar = document.querySelectorAll('.sidebar-menu_item'),
			searchBlock = document.querySelector('.search-block'),
			closeSearchBlock = document.querySelector('.search-block_form-input_close');

	searchBlock.style.display = 'none';

	function stopScroll() {
		document.body.classList.toggle('modal-open');
	}


	hamburger.addEventListener('click', () => {
		stopScroll();
		menu.classList.toggle('open');
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

	menu.addEventListener('mouseleave', () => {
		stopScroll();
		menu.classList.toggle('open');
		for (var i = 0; i < hamburger.getElementsByTagName('span').length; i++) {
			hamburger.getElementsByTagName('span')[i].classList.toggle('close');
		}
	});

	sidebar[2].addEventListener('click', (event) => {
		stopScroll();
		hamburger.classList.toggle('d-n');
		if (searchBlock.style.display == 'none') {
			searchBlock.style.display = 'block';
		} else {searchBlock.style.display = 'none';}
			
	});
	
	closeSearchBlock.addEventListener('click', () => {
		stopScroll();
		hamburger.classList.toggle('d-n');
		if (searchBlock.style.display == 'none') {
			searchBlock.style.display = 'block';
		} else {searchBlock.style.display = 'none';}
			
	});


});