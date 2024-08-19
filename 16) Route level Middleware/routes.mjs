// import express from 'express';
// const app = express();

// const reqFiltered = (req, res, next) => {
//     if(!req.query.age){
//         res.send("Please Enter Your Age..");
//     } else if (req.query.age < 18){
//         res.send("You are Adult... You can't Access this page ):");
//     } else{
//         next()
//     }
// }
// app.get("/" , (req, res) => {
//     res.send("Welcome to home page");
// })
// app.get("/user" , reqFiltered , (req, res) => { // single routes asy apply kr ksty h jis par chiaye us route par laga do
//     res.send("Welcome to user page");
// })
// app.get("/about" , reqFiltered , (req, res) => { // single routes asy apply kr ksty h jis par chiaye us route par laga do
//     res.send("Welcome to About page");
// })
// app.get("/help" , (req, res) => {
//     res.send("Welcome to Help page");
// })

// app.listen(3000, () => {
//     console.log("Server is listening on 3000 port.. ")
// })

// agr ap alag file bana kr middleware ko use krna chaty ho to phr apny routes meek file banani h middleware.js extenshion k sth.
// import express from 'express';
// import {reqFiltered} from'./middleware.mjs';
// const app = express();

// app.get("/" ,  (req, res) => {
//     res.send("Welcome to home page");
// })
// app.get("/user" , reqFiltered , (req, res) => { 
//     res.send("Welcome to user page");
// })
// app.get("/about" , reqFiltered , (req, res) => { 
//     res.send("Welcome to About page");
// })
// app.get("/help" , (req, res) => {
//     res.send("Welcome to Help page");
// })

// app.listen(3000, () => {
//     console.log("Server is listening on 3000 port.. ")
// })

// ab hamry pas bht sary routes h or usme sy zeyada tar par lagana h to is k lye alag alag likhna better nh h ab ap route ka ek instance import kro gy express sy then us k ader ap us middle wager ka name dal do k 
import express from 'express';
import {reqFiltered} from'./middleware.mjs';
const app = express();
const route = express.Router();

route.use(reqFiltered);

app.get("/" ,  (req, res) => {
        res.send("Welcome to home page");
})
route.get("/user" , (req, res) => { 
        res.send("Welcome to user page");
})
route.get("/about" , (req, res) => { 
        res.send("Welcome to About page");
})
app.get("/help" , (req, res) => {
        res.send("Welcome to Help page");
})

app.use('/' , route); // '/' is sy hum route define kr rhy h k kha sy acces h ye age/api krty to ye /api/route asy accesable hoti

app.listen(3000, () => {
    console.log("Server is listening on 3000 port.. ")
})