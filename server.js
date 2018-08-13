const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const express = require('express');
const app = express();

const apiRouter = require('./router/api_v1');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bgiraldov:21jejAlo@cluster-9bifi.mongodb.net/store?retryWrites=true', {
    useNewUrlParser: true
});

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/api', apiRouter);

// static files
app.use(express.static(path.join(__dirname, 'public/dist/store-app')));

app.listen(3000, () => {
    console.log('server on port 3000');
});