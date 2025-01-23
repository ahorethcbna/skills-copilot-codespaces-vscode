// create web server
// 1. import http module
// 2. create a server
// 3. listen to a port
const http = require('http');

// 2. create a server
const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        res.write('Comments page');
        res.end();
    } else if (req.url === '/posts') {
        res.write('Posts page');
        res.end();
    } else {
        res.write('Home page');
        res.end();
    }
});

// 3. listen to a port
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// node comments.js
// localhost:3000
// localhost:3000/comments
// localhost:3000/posts
// localhost:3000/anything
// ctrl + c to stop the server