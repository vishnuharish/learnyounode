let fs = require('fs');
let path = require('path')
const folder = process.argv[2];
const ext = process.argv[3]


fs = fs.readdir(folder, (err,data) => {
    if(err) throw err;
    data.forEach((file) => {
        if(path.extname(file) === ext){
            console.log(file);
        }
    })
})