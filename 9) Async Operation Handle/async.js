var a = 10
var b = 0;
// setTimeout(() => {
//     b = n;
//     callBack()
// }, 2000)
// console.log(a + b);

//isko hum phely callback k zareye handle krty thy
// function updatevalue(n , callBack){
//     setTimeout(() => {
//         b = n;
//         callBack()
//     }, 2000)
// }
// updatevalue(5, () => {
//     console.log(a + b);
// })

//isko hum promise k zareye handle kry gy
// let updateValue = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(30);
//     }, 2000);
// });
// updateValue.then((data) => {
//     console.log(a + data);
// }).catch(e => {
//     console.error("Error to fetch data", e);
// });

// async / await sy asy kry gy
// async function updateValue() {
//     return 4;
// }
// const result = await updateValue();
// console.log(result + a);