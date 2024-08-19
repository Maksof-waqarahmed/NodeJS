// import {connectDB} from './mongoDBConnect.mjs'
// const insertData = async () => {
//     let db = await connectDB();
//     // const result = await db.insertOne(
//     //     {
//     //         name: "Waqar",
//     //         age: 22,
//     //         email: "waqar@gmail.com",
//     //         des: "Developer"
//     //     }
//     // );

//     const result = await db.insertMany(
//         [
//             {
//                 name: "Waqar",
//                 age: 22,
//                 email: "waqar@gmail.com",
//                 des: "Developer"
//             },
//             {
//                 name: "Ahad",
//                 age: 22,
//                 email: "ahad@gmail.com",
//                 des: "Developer"
//             },
//             {
//                 name: "Ahmed",
//                 age: 22,
//                 email: "ahmed@gmail.com",
//                 des: "Developer"
//             },
            
//         ]
//     );
//     if(result.acknowledged) console.log("Insert", result);
// }
// insertData()