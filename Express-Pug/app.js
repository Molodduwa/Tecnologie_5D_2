const express = require('express');
const Acomp = require('./json/ACompatte.json'); //Copia il file people.json dentro la variabile people
const ASuv = require('./json/ASuv.json');
const ASpor= require('./json/ASportive.json');
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    compatte: Acomp['Auto Compatte'], //Passa il vettore 
    suvs: ASuv['Auto SUV'],
    sportive: ASpor['Auto Sportive']

    });
});

app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    compatte: Acomp['Auto Compatte'], //Passa il vettore 
    suvs: ASuv['Auto SUV'],
    sportive: ASpor['Auto Sportive']

    });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
