const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
    var opts = {
        maxAge: 9000000
    }
    let newUser = req.body
    if(
        newUser.name
    ){
        res.cookie('name', newUser.name, opts )
    }
    res.redirect('/hello')
})

app.get('/hello', (req, res) => {

    res.json(`Welcome ${req.cookies.name}!`)

})

let port = 8080
app.listen(port, () => console.log(`Cookie app listening at http://localhost:${port}`));