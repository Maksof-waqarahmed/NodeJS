const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "file");

//for file create using sync method
// try {
//     fs.writeFileSync(`${dirPath}/waqar.txt`, 'This is Waqar Rana');
//     console.log('File created and content written successfully.');
// } catch (err) {
//     console.error('Error reading the file:', err);
// }

//for file create using async method
// fs.writeFile(`${dirPath}/waqar.txt`, 'This is Waqar Rana', (err) => {
//     if (!err) {
//       console.log('File created and content written successfully.');
//     }
// });
// agr ap isko bar bar chlaty h to bar bar new file nh bany gi same name ki bs ussi file ko rewrite kr dega.

// ======================================================================================

//for file update
// fs.appendFile(`${dirPath}/waqar.txt` , `. I am a computer teacher.` , (err) => {
//     if(!err) console.log("File is Updated");
// });
// agr isko bar bar chalo gy to ye bar bar append kr dega. agr file nh hogi to phely ye file banaye ga then append kry ga.

// ======================================================================================

//for file read sync method
// try {
//     const data = fs.readFileSync(`${dirPath}/waqar.txt`, 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error('Error reading the file:', err);
// }

//for file read async method
// fs.readFile(`${dirPath}/waqar.txt`, 'utf8', (err, data) => {
//     if (!err) {
//       console.log(data);
//     }
// });

// ======================================================================================

// Rename (it is not a part of curd operation);
// fs.rename(`${dirPath}/waqar.txt` , `${dirPath}/rana.txt` , (err) => {
//     if(!err) console.log("File name is Updated");
// })

//======================================================================================

//for delete file sync method
// try{
//     fs.unlinkSync(`${dirPath}/rana.txt`);
//     console.log('File is Deleted');
// } catch(err){
//     console.error('Error Deleting the file:', err)
// }

//for delete file async method
// fs.unlink(`${dirPath}/rana.txt`, (err) => {
//     if(!err) console.log("File is Deleted");
// })

// Buffer in Node.js is a memory area used to store raw binary data. When you create or manipulate files in Node.js, the contents of these files can be stored in a Buffer as binary data. If you want to read the contents of the buffer in a human-readable format, you often need to convert it to a string using an encoding like utf8. 