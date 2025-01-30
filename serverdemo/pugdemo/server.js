const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'Welcome', message: 'Hello from pug'});
});

app.listen(3000, () => {
    console.log('Serer is running on http://localhost:3000');
});