let fs = require('fs');
let path = require('path')
const folder = process.argv[2];
const ext = process.argv[3]


fs = fs.readdir(folder, (err,data) => {
    let extension = "." + ext
    if(err) throw err;
    data.forEach((file) => {
        if(path.extname(file) === extension){
            console.log(file);
        }
    })
})