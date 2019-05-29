const fs = require('fs');
const path = require('path')
module.exports = (folderPath, ext, callback) => {
    const extension = "." + ext;
    fs.readdir(path.normalize(folderPath), (err,data) => {
        if (err){ 
            return callback(err, null)
        } 
            let result = data.filter((file) => { if(path.extname(file) === extension){ return file }})
            callback(null, result)
        })
       
}