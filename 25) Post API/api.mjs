import { connectDB } from "./mongoDBConnect.mjs";
import express from 'express'
const app = express();
app.use(express.json()) // data ko receive krne k lye postMan sy 
//get ke API ke kabi be body pass nh kr skty. query params bhj skty hen
//api k through data ko read krna hota h to phr hum get method use krty h
app.get('/', async (req, res) => {
    let data = await connectDB();
    data =await data.find().toArray();
    res.send(data)
})

//api k through data ko insert krna hota h to phr hum post method use krty h.
//postman k throught data ko kesy receicve kry gy: open post man select raw option ===> select JSON data ==> write dummy data
//data ko NODEjs me receoive krne k lye ek code likhna hota h app.use(express.json())
app.post('/', async (req, res) => {
    let data = await connectDB();
    let result = await data.insertOne(req.body);
    res.send(req.body);
})
app.listen(4000, () => {
    console.log("local Host connect with 3000");
})

