let http = require('http');

http.get(process.argv[2], (res)=>{
    let result = "";
    res.on("data", (data) => {
        result += data;
    });
    res.on("end", () => {
        console.log(result.length);
        console.log(result);
    });
});