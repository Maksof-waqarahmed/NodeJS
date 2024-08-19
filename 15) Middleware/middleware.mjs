import express from 'express';
const app = express();

//Ye kuch function hoty h jo routes k sth use hoty h inke madad sy hum req or res ko acces kr skty h or usko modify kr ksy h.
// const reqFilter = (req, res, next) => {
//     console.log("Filetr");
//     next() // agy jany k lye ye likhna zarori h wrna aagy nh aye ga udr he load hota rahe ga
// }

// useko real life me kesy use kry gy: agr user ke gae 18 sy kam h to vo page ko accesss nh kr paye
const reqFiltered = (req, res, next) => {
    if(!req.query.age){
        res.send("Please Enter Your Age..");
    } else if (req.query.age < 18){
        res.send("You are Adult... You can't Access this page ):");
    } else{
        next() // jb res.send kr dia to us k bd ap direct isko use nh kr ksty..
    }
}
app.use(reqFiltered);

app.get("/" , (req, res) => {
    res.send("Welcome to home page");
})

app.get("/user" , (req, res) => {
    res.send("Welcome to user page");
})

app.listen(3000, () => {
    console.log("Server is listening on 3000 port.. ")
})

//Types of Middleware
// 1) Application-Level middlelevel
// 2) route-Level middlelevel
// 3) Error-Level middlelevel
// 4) Built-in middlelevel
// 5) Third-party middlelevel