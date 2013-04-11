var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  http.get("http://jsonip.com/", function (ip_resp) {
    var data = "";
    ip_resp.setEncoding('utf8');

    ip_resp.on('data', function (chunk) {
      data += chunk;
    });

    ip_resp.on('end', function(){
      response.end(data)
    });
  });
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
