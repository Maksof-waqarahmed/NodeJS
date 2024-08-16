// for making a server import http
const http = require('http');

http.createServer((req, res) => {
    res.write("Waqar Ahmed");
    res.end();
}).listen(3000, () => {
    console.log("Server is Listening on 3000 port");
})

// server ko stop krne k lye ctrl + c press kry terminal par 
// agr ap kuch chnage kry gy to bar bar server ko stop kr k chalan pry ga jbi ap changes dekh skty ho browser par.