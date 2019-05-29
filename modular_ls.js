let filterLs = require('./ls_library.js');
let folderPath = process.argv[2];
let ext = process.argv[3];

filterLs(folderPath,ext, (err, data) => {
    if (err) throw err;
    data.forEach((file) => { 
        console.log(file)
    })
})