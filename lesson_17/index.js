const menu = document.getElementById('menu')
const ham = document.getElementById('hamburgerCont')
const closer = document.querySelectorAll('#menu div')[1]

ham.addEventListener('click', () => {
	menu.style.transform = `translateX(0%)`
})

closer.addEventListener('click', () => {
	menu.style.transform = `translateX(-100%)`
})
