// import {MongoClient} from 'mongodb';
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const database = 'e-commerce';

// //just Db connect k lye ye function banaya h
// async function dbConnect(){
//     let result = await client.connect(); 
//     let db = result.db(database)
//     return db.collection('products'); // promise return kry ga
// }

// //read data from DB through .then
// // dbConnect().then((res) => {
// //     res.find({name: "coreI9"}).toArray().then((data) => {
// //         console.log("Data" , data)
// //     }) // single data k lye ye laga do wrna hata lo
// // });

// //read data from DB through async/await
// const getData = async () => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log("data",data);
// }
// getData()

//alag file sy kesy kry gy

// import {connectDB} from './mongoDBConnect.mjs';
// //read data from DB through async/await
// const getData = async () => {
//     let data = await connectDB();
//     data = await data.find().toArray();
//     console.log("data",data);
// }
// getData()