import {connectDB} from './mongoDBConnect.mjs'

const deleteData = async () => {
    let data = await connectDB();
    // let res = data.deleteOne({name: "intell 404"});
    let res = data.deleteMany({des: "Developer"});
    console.log("Delete ==>" , await res);
}

deleteData()
// delete count k check kr k bta skty h k data db me tha ya nh