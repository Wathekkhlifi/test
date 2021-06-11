var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Node.js\n");
  })
  .listen(80, "161.156.160.146");

console.log("Server running at http://161.156.160.146:80/");
