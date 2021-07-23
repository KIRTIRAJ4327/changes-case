
var http = require('http');
var fs = require('fs');


function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', null, function(error, data) {
      if (error) {
          response.writeHead(404);
          response.write('File not found!');
      } else {
          response.write(data);
      }
      response.end();
  });
}
eval(fs.readFileSync('demo.js')+'');

// require('./demo.js',function(){
//
// })

// fs.readFile("./demo.js", "utf8", function(err, data){
//     if(err) throw err;
//      else(data)
//     // var resultArray = //do operation on data that generates say resultArray;
//
//     response.send(quote.getQuote());
//     response.send(quote.getRandomQuote());
// });
http.createServer(onRequest).listen(3000);
