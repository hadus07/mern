class Player {
	constructor(name, age, isLeader, gun) {
		this.name = name
		this.age = age
		this.gun = gun
		this.isActive = true
		this.isLeader = isLeader
	}

	shoot = () => {
		console.log('Shot with ' + this.gun)
	}

	jump() {
		console.log(this.name + (this.isLeader ? ' balandroq' : '') + ' sakradi')
	}

	changeGun(qurol) {
		this.gun = qurol
	}

	static start() {
		console.log('Uyin boshlandi')
	}

	changeAge(age) {
		this.age = age
	}

}

const Tod = new Player('Tod', 23, false, 'Sniper')
const Mich = new Player('Michael', 20, true, 'Pistol')

console.log(Tod.age)
console.log(Mich.age)
Tod.changeAge(10)
console.log(Tod.age)
console.log(Mich.age)
