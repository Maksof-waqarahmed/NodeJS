import express from 'express';

const app = express();
app.set('view engine' , 'ejs');
//Common files banay k lye views me ek folder banao common kname sy or usme sari common files bana lo jo ap bar bar use kry gy. in files ko hum just ejs wali files me he use kr skty h.
app.get('/' , (req, res) => {
    res.render(`index`);
})

app.get('/profile' , (req, res) => {
    const user = {
        name: "Waqar",
        email: "waqar@gmail.com",
        age: 22,
        lang: ['C', 'C++', "java" , "javScript", "Python"]
    }
    res.render(`profile`, {user}); //ejs me data ko receive krne k lye <%= name of data%>
})

app.get('/login' , (req, res) => {
    res.render(`login`);
})

app.listen(3000, () => {
    console.log('App is listening on port 3000...');
});


