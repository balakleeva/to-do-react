import routes from './routes'

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://localhost/application');

routes(app);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3001, () => {
    console.log('Server starts!')
});