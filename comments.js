// create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const comments = [
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2020-01-01'
    },
    {
        name: '李四',
        message: '今天天气不错',
        dateTime: '2020-01-01'
    },
    {
        name: '王五',
        message: '今天天气不错',
        dateTime: '2020-01-01'
    },
    {
        name: '赵六',
        message: '今天天气不错',
        dateTime: '2020-01-01'
    }
];
http.createServer((req, res) => {
    const parseObj = url.parse(req.url, true);
    const pathname = parseObj.pathname;
    if (pathname === '/') {
        fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, data) => {
            if (err) {
                return res.end('404 Not Found');
            }
            let htmlStr = '';
            comments.forEach(item => {
                htmlStr += `
                    <li>
                        <p>姓名：${item.name}</p>
                        <p>评论：${item.message}</p>
                        <p>时间：${item.dateTime}</p>
                    </li>
                `;
            });
            data = data.replace('^_^', htmlStr);
            res.end(data);
        });
    } else if (pathname.indexOf('/public/') === 0) {
        fs.readFile(path.join(__dirname, pathname), (err, data) => {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    } else if (pathname === '/post') {
        fs.readFile(path.join(__dirname, 'views', 'post.html'), 'utf8', (err, data) => {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    } else if (pathname === '/pinglun') {
        const comment = parseObj.query;
        comment.dateTime = '2020-01-01';
        comments.unshift(comment);
        res.statusCode = 302;
        res