import express from 'express';
import path from 'path'; 
import { fileURLToPath } from 'url';

const app = express();
// const publicPath = path.join(__dirname , 'public'); // ye commonJS me use hota h 
const filename = fileURLToPath(import.meta.url); 
const dirname = path.dirname(filename); 
const publicPath = path.join(dirname, 'public');

app.get('' , (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
}) //without extension k lye URL mesy remove k lye use hota h

app.get('/home' , (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
}) 

app.get('/aboutme' , (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('*' , (req, res) => {
    res.sendFile(`${publicPath}/pageNotFound.html`)
}) // 404 page ko load k lye use hota h k agr uupper meys ki match na ho to * laga do k ye load kr dey

app.listen(3000, () => {
    console.log('App is listening on port 3000...');
});
