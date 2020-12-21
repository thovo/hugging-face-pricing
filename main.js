(function () {
	const nav = document.querySelector('nav');
	const burgerMenu = document.querySelector('.burger-menu');
	burgerMenu.addEventListener('click', (event) => {
		nav.classList.toggle('visible');
	});
	console.log(nav);
})();
