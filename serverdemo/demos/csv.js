const http = require("http");

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition","attachment; filename = output.csv");

    const csvData = "Name, Age, Country \nJohn Doe, 30, USA \nJane Doe, 25, UK";
    res.writeHead(200);
    res.end(csvData)

};

const server = http.createServer(requestListener);
server.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
