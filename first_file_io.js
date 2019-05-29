const fs = require('fs');
let result = fs.readFileSync(process.argv[2]).toString().split('\n')
console.log(result.length - 1);