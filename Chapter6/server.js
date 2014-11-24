var fs = require("fs");
var http = require("http");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var express = require("express");

var app = express();

app.get("/", function(request, response){
    response.send("Hello!");
});

//http.createServer(app).listen(port, host);
http.createServer(app).listen(process.env.PORT, process.env.IP);