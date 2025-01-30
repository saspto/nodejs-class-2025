const express = require('express');
const morgan = require('morgan');

const app = express();

//app.use(morgan('dev'));
app.use(morgan('combined'));
//app.use(morgan('short'));
//app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('server running');
});