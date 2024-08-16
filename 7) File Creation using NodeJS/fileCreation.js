//is k lye hame path chahe k kha or kis folder me file banai h agr path nh dengy to vo simple root directory me file bana dega.
const path = require('path');
const fs = require('fs');
const pathDir = path.join(__dirname , "files");
for(let i = 1; i <= 5; i++){
    fs.writeFileSync(`${pathDir}/file${i}.txt`, "msg");
}

// file ko list krwane k lye
fs.readdir(pathDir, (err, files) => {
    files.forEach(file => console.warn("File name is ",file));
})