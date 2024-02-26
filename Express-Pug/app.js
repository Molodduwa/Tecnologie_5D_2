const express = require('express');
const Acomp = require('./json/ACompatte.json'); //Copia il file people.json dentro la variabile people
const ASuv = require('./json/ASuv.json');
const ASpor= require('./json/ASportive.json');
const ATutte= require('./json/ATutte.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    compatte: Acomp['Auto Compatte'], //Passa il vettore 
    suvs: ASuv['Auto SUV'],
    sportive: ASpor['Auto Sportive']

    });
});

app.get('/suv', (req, res) => {
    res.render('macchine', {
    title: 'LE NOSTRE AUTO SUV',
    mac: ASuv['Auto SUV'],
    variabile: "suv"
    });
});

app.get('/compatte', (req, res) => {

    res.render('macchine', {
    title: 'LE NOSTRE AUTO COMPATTE',
    mac: Acomp['Auto Compatte'],
    variabile: "compatte"
    });
});
app.get('/sportive', (req, res) => {

    res.render('macchine', {
    title: 'LE NOSTRE AUTO SPORTIVE',
    mac: ASpor['Auto Sportive'],
    variabile: "sportive"
    
    });
});

app.get('/profile', (req, res) => {
    const mid = ATutte.Auto.find((m) => m.id == req.query.id);
    const variabile= req.query.page;
    res.render('info', {
        title: `About ${mid.nome}`, 
        mid,
        variabile
    });
});


app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
