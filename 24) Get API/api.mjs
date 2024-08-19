import { connectDB } from "./mongoDBConnect.mjs";
import express from 'express'
const app = express();

app.get('/', async (req, res) => {
    let data = await connectDB();
    data =await data.find().toArray();
    res.send(data)

})

app.listen(3000, () => {
    console.log("local Host connect with 3000");
})

//get ke API ke kabi be body pass nh kr skty. query params bhj skty hen