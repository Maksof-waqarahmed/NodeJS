import express from 'express';
import path from 'path'; //project k folders ko acces krne m emadad deta h 
import { fileURLToPath } from 'url';

const app = express();

// Derive __dirname from import.meta.url.provides the URL of the current module.
const filename = fileURLToPath(import.meta.url); //converts this URL into a file path.
const dirname = path.dirname(filename); //find dir name throught filename 
const publicPath = path.join(dirname, 'public');
// jb hum koi be file index k name sy banaty h to vo root file ban jati h
app.use(express.static(publicPath)); // files ko access krne k lye .use use kra h. 
//static method: static page/content ko load krta h.
//CSS files ko hum static waly folder me directly load nh kr skty

app.listen(3000, () => {
    console.log('App is listening on port 3000...');
});
