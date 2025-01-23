// create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the folder for the views
app.set('views', path.join(__dirname, 'views'));

// set the folder for the static files
app.use(express.static(path.join(__dirname, 'public')));

// set the home page
app.get('/', function(req, res) {
    res.render('index');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {
    res.render('comments');
});

// set the comments page
app.get('/comments', function(req, res) {