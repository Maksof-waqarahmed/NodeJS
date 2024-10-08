import { MongoClient } from "mongodb";
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-commerce';
export const connectDB = async () => {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
};