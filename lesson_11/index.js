let start = new Date().valueOf()

let arr = new Array(10000).fill(0)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + i)
}

let end = new Date().valueOf()

console.log(end - start)