const express = 'express';
const path = 'path';
const serverless = 'serverless-http';

const app = express();

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

const handler = ServerlessHttp(app);

module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}