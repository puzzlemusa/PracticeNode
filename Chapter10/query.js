var mongo = require("mongodb");
var host = '127.0.0.1';
var port = '27017'; 

function getUser(id, callback) {

    var db = new mongo.Db('nodejs-introduction', new mongo.Server(host, port, {}));

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

getUser(1, function(user){
   if(!user){
       console.log('No user Found!');
   }else{
       console.log('User Found!', user);
   }
   
});
getUser(2, function(user){
   if(!user){
       console.log('No user Found!');
   }else{
       console.log('User Found!', user);
   }
   
});
getUser(3, function(user){
   if(!user){
       console.log('No user Found!');
   }else{
       console.log('User Found!', user);
   }
   
});