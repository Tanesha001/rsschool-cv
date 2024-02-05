// For burger-menu

const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.header-burger')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('nav')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.navigation-item').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}