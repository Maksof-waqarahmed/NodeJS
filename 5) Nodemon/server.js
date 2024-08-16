//phely humny sever ko par par on krna hota tha agr koi changes kri ho but nodemon install krne k bd asa nh krna hoga ye khud sy detect kry ga changes or agr  chnage isko meli to khud refresh kr dega page browser ka.

// nodemon filename: age continuously server ko on rakhna h to.

// NodeJS async language ko support krta h\

//Make Basic API

const http = require('http');
const data = require('./data');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/JSON'});
    // res.write(JSON.stringify({name: "Waqar Ahmed" , age: 22, city: "Karachi"}));
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000, () => {
    console.log("Server is listening on 3000 port");
})