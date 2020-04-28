const config = require('./config');
const mongoose = require('mongoose');

const databaseParameters = config.database;
var dbconnection = "mongodb://";

if (databaseParameters.username && databaseParameters.password && databaseParameters.username.length>0 && databaseParameters.password.length>0){
    dbconnection += databaseParameters.username + ":" + databaseParameters.password + "@";
}
dbconnection += databaseParameters.host + ":" + databaseParameters.port + "/" +databaseParameters.collection;

module.exports = function(callback){
    mongoose.connect(dbconnection);
    var db = mongoose.connection;

    db.on('connected',function(){
        console.log('Mongoose connected');
    });

    db.on("error",function(err){
        console.log("Mongoose error"+err);
        process.exit(1);
    });

    db.on("disconnected",function(){
        console.log("Mongoose Disconnected");
        process.exit(1);
    });

    db.on('open',function(){
        callback(mongoose);
    })

}