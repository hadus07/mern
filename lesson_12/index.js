let o1 = {
    name: 'Ibrohim',
    age: 24,
    address: {
        region: 'A',
        district: 'B'
    },
}

let o2 = deepCopy(o1)

o2.address.region = 'C'

console.log(`o1.address.region: ${o1.address.region}`)
console.log(`o2.address.region: ${o2.address.region}`)

// Hoisting
function deepCopy(obj) {
    let tmp
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            tmp = {...obj}
        } else {
            tmp[key] = deepCopy(obj[key])
        }
    }
    return tmp
}
