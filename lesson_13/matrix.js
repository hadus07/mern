const rand = (x = 1) => parseInt(Math.random().toString().slice(2, 2 + x))
const print = arr => {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            str += arr[i][j] + '\t'
        }
        str += '\n'
    }
    console.log(str)
}
// Start
let input = parseInt(prompt('Son: '))
let arr = new Array(input).fill(new Array(input).fill(0))

for (let i = 0; i < arr.length; i++) {
    arr[0][i] = rand()
}

print(arr)