const express = require('express');
const port = 8080;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
const homeContent = "This is the home page";
const contactContent = "Contact me at newton Dev"
const about = "I am newton";

app.get('/', (req, res)=>{
    res.render('index',{home: homeContent, aboutMe: about, contact: contactContent});
})

app.listen(port, ()=>{
    console.log("server running on port "+port);
})