//Process: ye ek onj h isme almost sb h NodeJS sy related.

//to get input: process.argv ==> Argument Vector
//by default isme 2 value hpti h ek NodeJS jaha install h udr ke location or 2nd file jo run kr rhy ho uski location. us k bd ap jo be input dengy vo isme chale jaye ga or ye array ke trh behave krta h.

// console.log(process.argv);

// iska use kr k hum usefull chz banaty h 
const fs = require('fs');
let input = process.argv;
if(input[2] === 'add'){
    fs.writeFileSync(input[3] , input[4]);
} else if(input[2] === 'remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log("Invalid Input");
}