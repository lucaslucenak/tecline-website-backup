//Express import
const express = require('express');
const app = express();
//EJS import
const ejs = require('ejs');

//Config
    //View Engine
    app.set('view engine', 'ejs');
    app.use(express.static('public')); //Aceita arquivos estáticos


app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.get('/requestService', (req, res) => {
    res.render('requestService.ejs');
});

app.get('/services', (req, res) => {
    res.render('services.ejs');
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.listen(9000, function(err) {
    if(err) {
        console.error(err);
    }
    else {
        console.log("Rodando em http://localhost:9000")
    }
});