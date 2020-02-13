let popup = document.getElementById('popup')

function follow(event) {

	let { x, y } = event
	let { innerWidth: w, innerHeight: h } = window

	let rotateX = -((y/h * 50) - 25)
    let rotateY = x/w * 50 - 25

	let rotation = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    popup.style.transform = rotation
	
}

window.addEventListener('mousemove', follow)