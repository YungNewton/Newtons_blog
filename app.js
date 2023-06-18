const express = require('express');
const port = 8080;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send("<h1>Home<h1/>");
})

app.listen(port, ()=>{
    console.log("server running on port "+port);
})