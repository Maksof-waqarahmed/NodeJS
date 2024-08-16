// module.exports = {
//     name: "Waqar",
//     age: 22,
//     city: "Karachi"
// }

//===============================================================

// how to send multiple data 
// const person = [
//     {
//         name: "Waqar",
//         age: 22,
//         city: "Karachi"
//     },
//     {
//         name: "Ahmed",
//         age: 22,
//         city: "Lahore"
//     },
//     {
//         name: "Arsalan",
//         age: 22,
//         city: "Karachi"
//     },
//     {
//         name: "Naveed",
//         age: 22,
//         city: "Karachi"
//     }
// ]
// module.exports = [person];

//===============================================================

// const person1 = {
//     name: "Waqar",
//     age: 22,
//     city: "Karachi"
// }

// const person2 = {
//     name: "Waqar",
//     age: 22,
//     city: "Karachi"
// }

// const person3 = {
//     name: "Waqar",
//     age: 22,
//     city: "Karachi"
// }
// module.exports = [person1, person2, person3];

//===============================================================
function Person(n, age, city, des){
    this.name = n;
    this.age = age;
    this.city = city;
    this.designation = des
}
const person1 = new Person("waqar" , 22, "karachi" , "fullStack developer");
const person2 = new Person("waqar" , 22, "karachi" , "fullStack developer");
const person3 = new Person("waqar" , 22, "karachi" , "fullStack developer");
module.exports = [person1, person2, person3];