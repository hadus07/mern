function devide(a, b) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			let res = a / b
			if (res === Infinity) {
				reject(`Error: ${a}:${b}`)
			} else {
				resolve(res)
			}
		}, 2000)
	})
}

devide(8, 2)
	.then(res => devide(res, 3))
	.then(res => devide(res, 5))
	.then(res => console.log(res))
	.catch(err => console.log(err))

// devide(8, 2, err => console.log(err), res => {
// 	devide(res, 3, err => console.log(err), res2 => {
// 		devide(res2,5, err => console.log(err), res3 => {
// 			console.log(res3)
// 		})	
// 	})
// })