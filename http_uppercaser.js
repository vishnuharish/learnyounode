const http = require('http');
const map = require('through2-map');

let uc = map((stream) => {
    return stream.toString().toUpperCase();
})

http.createServer((req,res) => {
    if(req.method == "POST"){
        req.pipe(uc).pipe(res);
    }
}).listen(process.argv[2]);