const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
    var opts = {
        maxAge: 9000000
    }
    res.cookie('name', req.cookies.cookieName)
    res.end();
})

app.get('/hello', (req, res) => {

})
let port = 8080
app.listen(port, () => console.log(`Cookie app listening at http://localhost:${port}`));