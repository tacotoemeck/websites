
const navSlide = () => {
const hamburger = document.querySelector('.hamburger');
const nav = document = document.querySelector('.nav-links')

const listLinks = document.querySelectorAll('li');

for ( let i = 0; i < listLinks.length; i++) {
	listLinks[i].addEventListener('click', () => {
	nav.classList.toggle('nav-active');

	hamburger.classList.toggle('toggle')
})
}

hamburger.addEventListener('click', () => {
	nav.classList.toggle('nav-active');

	hamburger.classList.toggle('toggle')
})

// burger animation


}
navSlide()