let n = 'Ibrohim'

console.log(n.slice(2, 6))

function slice(str, start, end) {
    let tmp = ''
    for (let i = start; i < end; i++) {
        tmp += str[i]
    }
    return tmp
}

console.log(slice('Ibrohim', 2, 6))