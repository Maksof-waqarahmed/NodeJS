import express from 'express';

const app = express();

//Template Engine: Dynamic pages banay k lye kam aty h isko install krna hota h.
// Static file/page: Jo data humny khud sy likh dia or vo hamesha he asa he rahe ga jb tk hum chnage na kry 
// Dynamic Page: asy pages jo khud sy chnage ho skty user k input k mutabik data chnage kr sky.
// why use ejs: vo sb sy zeyada use hota h template engine k lye 

//ejs use k lye hame batana hoga NODE ko
//app.set('view engine' , 'ejs');

//make view folder: jb be dynamicall route kro gy to viesfolder lazmi banaa h 
app.set('view engine' , 'ejs');

app.get('/' , (req, res) => {
    res.render(`index`);
})

app.get('/profile' , (req, res) => {
    const user = {
        name: "Waqar",
        email: "waqar@gmail.com",
        age: 22
    }
    res.render(`profile`, {user}); //ejs me data ko receive krne k lye <%= name of data%>
})


app.listen(3000, () => {
    console.log('App is listening on port 3000...');
});


