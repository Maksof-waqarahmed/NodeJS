import express from 'express';
const app = express();

app.get('/', (req, res) => {
    console.log("data send by browser ==> " , req.query);// agr client sy bheja hwa data dekhna hoto ye use kry gy. ye obj dega 
    res.send(`Hello, ${req.query.name}! This is Home Page..`);
});
//1 parameter me ap bataty ho k routes kia rahe ga agr kuch be nh dety to vo home route hota h.
//2 second me ek call back hota h jisme req pr res parameter hoty h.

app.get('/about', (req, res) => {
    res.send('Hello, This is About page..');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000...');
});
