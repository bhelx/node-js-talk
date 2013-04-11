var http = require('http')
  , url  = require('url')
  ;

function fib (n) {
  return n < 2 ? 1 : fib(n-2) + fib(n-1);
}

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});

  var query = url.parse(request.url, true).query;

  var result = fib(parseInt(query['n'], 10));

  response.end(result.toString());
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
