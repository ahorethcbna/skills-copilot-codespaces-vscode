// create web server// npm install express
// npm install body-parser
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// create a comments array
var comments = [];

// get comments
app.get('/comments', function(req, res) {
    res.send(comments);
});

// create a comment
app.post('/comments', function(req, res) {
    comments.push(req.body);
    res.send('Comment added');
});

// start the web server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});