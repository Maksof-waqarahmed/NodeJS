import {MongoClient} from 'mongodb'; //mongoDB sy connect k lye
const url = 'mongodb://localhost:27017'; // Url jaha hara local server chale ag 
const client = new MongoClient(url); // is sy pta chale ga k data kha sy lana h

const database = 'e-commerce'; // db name ye recommended h
async function getdata(){
    let result = await client.connect(); //connect k function sy humary pas data a jaye ga mongoDb sy or ye promise return krta h

    // let db = result.db("e-commerce");
    let db = result.db(database) // asy be kr skty h;
    let collection = db.collection('products'); 
    let res = await collection.find({}).toArray() // toarray structure form me data deta h or promise return krta h
    console.log(res);
    // agr collection me sy kese ek obj ko dhundna tha to ap   let res = await collection.find({name dedo (name: 'iphone')}).toArray()
}
getdata();