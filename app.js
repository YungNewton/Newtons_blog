const express = require('express');
const port = 8080;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
const homeContent = "This is the home page";
const contactContent = "Contact me at newton Dev"
const about = "I am newton";
let postArray = [];

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index', {place: 'Home', ItemsList: postArray});
})
app.get('/about', (req, res)=>{
    res.render('about', {place: 'About'});
})
app.get('/contactUs', (req, res)=>{
    res.render('contact', {place: 'ContactUs'});
})
app.get('/compose', (req, res)=>{
    res.render('compose', {place: 'Compose'});
})

app.post("/",(req, res)=>{
    let newPost = {
        Title: req.body.title,
        Post: req.body.post
    }
    postArray.push(newPost);
    res.redirect("/");
})

app.get("/post/:postName",(req, res)=>{
    console.log(req.params.postName);
})
app.listen(port, ()=>{
    console.log("server running on port "+port);
})