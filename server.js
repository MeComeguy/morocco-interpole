const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/wanted', (req, res) => {
    res.render('wanted');
});

app.get('/suspect', (req, res) => {
    const suspectId = req.query.id;
    res.render('suspect', { suspectId });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});