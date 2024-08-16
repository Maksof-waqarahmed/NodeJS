import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello, This is Home Page..</h1>
        <a href="/about" >Go to About Page</a>    
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <input type="text" placeholder="Enter Your name..." value="${req.query.name}" />
        <button> Click Me</button>  
        <a href="/" >Go to About Page</a>  
    `);
});

app.get('/help', (req, res) => {
    res.send({
        name: "Waqar", 
        age: 22,
        city: "Karachi"
    }); // ek sy zeyada hoga to usko array me pass krdo gy..
});

app.listen(3000, () => {
    console.log('App is listening on port 3000...');
});
