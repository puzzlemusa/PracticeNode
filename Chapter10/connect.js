var mongo = require("mongodb");
var host = '127.0.0.1';
var port = '27017'; 

var db = new mongo.Db('nodejs-introduction', new mongo.Server(host, port, {}));

db.open(function(err, dbClient) {
  var collection = dbClient.collection('user');

  collection.remove({})

  collection.insert({
    id: "1",
    name: "Musa",
    twitter: "puzzlemusa",
    email: "puzzlemusa@gmail.com"
  }, function(error) {
    console.log('Successfully inserted Musa');
  });
  collection.insert({
    id: "2",
    name: "Projucti",
    twitter: "tech_war",
    email: "projucti2k9@gmail.com"
  }, function(error) {
    console.log('Successfully inserted Projucti');
    //db.close();
  });
});
