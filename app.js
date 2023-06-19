const express = require('express');
const port = 8080;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
const homeContent = "This is the home page";
const contactContent = "Contact me at newton Dev"
const about = "I am newton";

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index', {place: 'Home'});
    res.send();
})
app.get('/about', (req, res)=>{
    res.render('about', {place: 'About'});
    res.send();
})
app.get('/contactUs', (req, res)=>{
    res.render('contact', {place: 'ContactUs'});
    res.send();
})

app.listen(port, ()=>{
    console.log("server running on port "+port);
})