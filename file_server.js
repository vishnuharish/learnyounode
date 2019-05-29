const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.normalize(process.argv[3]);

http.createServer((req,res) => {
    fs.createReadStream(filePath).pipe(res)
}).listen(process.argv[2])