const express = require('express');
const macchine = require('./macchine.json'); //Copia il file people.json dentro la variabile people
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    res.render('index', {
    title: 'Homepage',
    macchine: macchine['Auto Compatte'] //Passa il vettore profiles alla pagina index.pug
    });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
