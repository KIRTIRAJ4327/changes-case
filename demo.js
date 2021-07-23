const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const quote = require('inspirational-quotes');
// $.getScript("OnluYou.js",function(){
//
// })
console.log(quote.getQuote());
console.log(quote.getRandomQuote());


app.get("/", function(req, res) {
  res.send(quote.getQuote());
});
app.get("/", function(req, res) {
  res.send(quote.getRandomQuote());
});
// app.get("/home", function(req, res) {
//   res.send("hello Manasvi Hope you are good i just want you to motivate every-day so you too motivate me lool  ");
// });
// app.get("/api", function(req, res) {
//   res.send("index.html");
// });
// app.listen(3000, function(){
//   console.log("Server is running at port 3000...");
// });
// app.listen(3000, function() => console.log(`Example app listening on port ${3000}!`))
