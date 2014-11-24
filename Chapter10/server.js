var http = require("http");
var express = require("express");
var mongo = require("mongodb");
var dbHost = '127.0.0.1';
var dbPort = '27017'; 

var app = express();

app.get("/", function(request, response){
    response.send("Hello!");
});

app.get('/user/:id', function(request, response) {
    getUser(request.params.id, function(user){
        if(!user){
            response.send('User not exits', 404);
        }else{
            response.send("<a href='http://twitter.com/" + user.twitter + "'> Follow " + user.name + "on twitter</a>");
        }
    })
});

app.get('*', function(request, response) {
    response.send('Oh no!', 404);
})
//http.createServer(app).listen(port, host);
http.createServer(app).listen(process.env.PORT, process.env.IP);

function getUser(id, callback) {

    var db = new mongo.Db('nodejs-introduction', new mongo.Server(dbHost, dbPort, {}));

    db.open(function(err, dbClient) {
        var collection = dbClient.collection('user');

        collection.find({
            id: id.toString()
        }, function(error, cursor) {
            cursor.toArray(function(error, users) {
                if (users.length === 0) {
                    callback(false);
                }
                else {
                    callback(users[0]);
                }
                //db.close();
            })
        });
    });
}