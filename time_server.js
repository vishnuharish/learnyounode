const net = require('net')

pad = (n) => {
    if(n < 10){
        return "0" + n;
    } else {
        return n;
    }
}

net.createServer((socket) => {
    let date = new Date();
    let dateString = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}\n`;
    socket.end(dateString);                  
}).listen(Number(process.argv[2]));