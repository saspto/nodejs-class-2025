const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathname = parseUrl.pathname;

    res.setHeader('Content-Type', 'text/plain');

    if (pathname === '/' && req.method === 'GET') {
        res.end('Welcome to the home page');
    } else if (pathname === '/about' && req.method === 'GET') {
        res.end('Welcome to about page');
    } else if (pathname === '/contact' && req.method === 'GET') {
        res.end('Welcome to contact page');
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});