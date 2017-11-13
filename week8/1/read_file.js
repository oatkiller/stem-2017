const fs = require('fs')
const file = fs.readFileSync('hi.txt', 'utf-8')
console.log(file)
