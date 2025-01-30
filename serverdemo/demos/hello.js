const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
    //HTTP methods -  get - only header
    // post - header and body
    //
    res.writeHead(200);
    res.end("My first server");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
