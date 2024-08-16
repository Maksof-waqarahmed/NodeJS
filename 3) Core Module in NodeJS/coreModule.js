//2 types of modules: function/methods that already define in language.
// 1) Global Module: Does not required a import statement for use some funtion that ae pre-defined in language. ex: console.log
// 2) Non-Global Module: Required a import statement for use some funtion that ae pre-defined in language. ex file system (fs)

console.log("Use File System to create Files..")
const fs = require("fs");
fs.writeFileSync("file1.txt" , "Hello, Everyone! This is me Waqar rana"); // using this we can create a file.

fs.writeFileSync("file.js" , "//Hello, Everyone! This is me Waqar rana");

console.log(__dirname); //to check the location of folder where current executable file is present 
console.log(__filename); // to check current executable file name 

// if you want to execute only specific function from fs.
//const fs = require('fs').writeFileSync;
//fs("file.txt" , "MSG");