const express = require('express');
const app = express();
const nameRoutes = require('./routes/name');
const mongoose = require('mongoose');

const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/Lab-8?retryWrites=true&w=majority');

app.use('/name', nameRoutes);

app.listen(port, function(req, res) {
    console.log('listen to on port 3000')
})