const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
const input = document.querySelector('input')
const addBtn = document.querySelectorAll('button')[0]
const clearBtn = document.querySelectorAll('button')[1]


function clearInput() {
	ul.innerHTML = ''
}

function nimadir(e) {
	e.keyCode === 13 && addLi()
}

function deleteSelf(event) {
	event.target.parentNode.remove()
}

function checkSelf(event) {
	let parent = event.target.parentNode
	if (parent.className === '') {
		parent.className = 'done'
	} else {
		parent.className = ''
	}
}

function addLi() {
	if (input.value !== '') {
		let li = document.createElement('li')
		let btn = document.createElement('button')
		let check = document.createElement('input')

		check.type = 'checkbox'
		check.addEventListener('click', checkSelf)
		btn.innerHTML = 'Delete'
		btn.addEventListener('click', deleteSelf)
		li.innerHTML = input.value
		li.appendChild(check)
		li.appendChild(btn)
		ul.appendChild(li)
		input.value = ''
	}
}

addBtn.addEventListener('click', addLi)
input.addEventListener('keydown', nimadir)
clearBtn.addEventListener('click', clearInput)