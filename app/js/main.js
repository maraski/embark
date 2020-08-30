function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= 200 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const box = document.querySelector('.eb_marker');
const logo = document.getElementById('logos');
const icons = document.querySelectorAll('.nav-link');

document.addEventListener('scroll', function () {
	if (isInViewport(box)) {
		console.log('yaaaaas');
		logo.classList.add("blue_logos");
		for (var i = 0; i < icons.length; i++) {
			icons[i].classList.add('blue_icons');
		}
	} else {
		logo.classList.remove("blue_logos");
		for (var i = 0; i < icons.length; i++) {
			icons[i].classList.remove('blue_icons');
		}
	}

}, {
    passive: true
});