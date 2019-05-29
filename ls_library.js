const fs = require('fs');
const path = require('path')
module.exports = (folderPath, ext, callback) => {
    const extension = "." + ext;
    fs.readdir(path.normalize(folderPath), (err,data) => {
        if (err){ 
            callback(err, null)
        } 
         let list = data.filter((file)=>{ return path.extname(file) === extension})
            callback(null, list)
        }
        })
       
}