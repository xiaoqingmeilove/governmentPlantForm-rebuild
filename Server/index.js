var express = require('express');
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
var port = appEnv.port;




$config=require('./config');
var ParseServer =require('./server/Parse_Server');
var ParseDashboard = require('./server/Parse_Dashboard');
var ParseServerLive =require('parse-server').ParseServer;
var Parse = require('parse/node');
Parse.User.enableUnsafeCurrentUser()


var SERVER_PORT = port;


var server = express();

// 把 Parse Server 挂载在 /parse
server.use('/parse', ParseServer);

// 把 Parse Dashboard 挂载在 /dashboard
server.use('/dashboard', ParseDashboard);


server.get("/signUp",function(req,res){
    var user = new Parse.User();
    user.set("username", "xzq123");
    user.set("password", "123");
    user.set("email", "email@example123.com");
    // other fields can be set just like with Parse.Object
    user.set("phone", "415-556-9900");

    user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
            res.send(user)
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            // alert("Error: " + error.code + " " + error.message);
            res.send(error)
        }
    });
})


server.get("/signUp",function(req,res){
    var user = new Parse.User();
    user.set("username", "xzq");
    user.set("password", "123");
    user.set("email", "email@example.com");
    user.set("phone", "415-392-0202");

    user.signUp(null, {
        success: function(user) {
            res.send(user)
        },
        error: function(user, error) {
            res.send(error)
        }
    });
})



server.get("/LoggingIn",function(req,res){
    Parse.User.logIn("xzq", "123", {
        success: function(user) {
            res.send(user)
        },
        error: function(user, error) {
            res.send(error)
        }
      });
})

server.get("/LoggingIn1",function(req,res){
    Parse.User.logIn("xzq123", "123", {
        success: function(user) {
            res.send(user)
        },
        error: function(user, error) {
            res.send(error)
        }
      });
})


server.get("/CurrentUser",function(req,res){
    var currentUser = Parse.User.current();
    if (currentUser) {
       res.send(currentUser)
    } else {
        res.send(currentUser)
    }
})


server.get("/SecurityForOtherObjects",function(req,res){
    var Note = Parse.Object.extend("Note");
    var privateNote = new Note();
    var postACL = new Parse.ACL();
    postACL.setRoleWriteAccess("wuhan", true);
    postACL.setRoleReadAccess("wuhan", true);
    privateNote.set("content", "This note is note!");
    privateNote.setACL(postACL);
    privateNote.save().then((result)=>{res.send(result)});
})


server.get("/query",function(req,res){
    var Note = Parse.Object.extend("Note");
    var query = new Parse.Query(Note);
    query.find({
      success: function(women) {
        res.send(women)
      }
    });
})

server.get("/oneToMany",function(req,res){
    var game = new Parse.Object("Game");
    game.set("name", "game");
    game.set("createdBy", Parse.User.current());
    game.save()
})

server.get("/oneToMany_serch",function(req,res){
    var Note = Parse.Object.extend("Game");
    var query = new Parse.Query(Note);
    query.find({
      success: function(women) {

        res.send(women[0].get("createdBy"))
      }
    });
})


server.get("/ManyToMany",function(req,res){
    var book = new Parse.Object("Book");
    var Note = Parse.Object.extend("User");
    var query = new Parse.Query(Note);
    query.find().then(function(result){
        console.log(result)
        book.set("name", "人员列表");
        var relation = book.relation("authors");
        relation.add(result)
        book.save()
    })
})


server.get("/ManyToMany",function(req,res){
    var book = new Parse.Object("Book");
    var Note = Parse.Object.extend("User");
    var query = new Parse.Query(Note);
    query.find().then(function(result){
        console.log(result)
        book.set("name", "人员列表");
        var relation = book.relation("authors");
        relation.add(result)
        book.save()
    })
})

server.get("/ManyToManySearch",function(req,res){
    var book = new Parse.Object("Book");
    var query = new Parse.Query(book);
    query.find().then(function(result){
        console.log(result)
        result[0].relation("authors").query().find().then(function(ccc){
            res.send(ccc)
        })
        
    })
})





var httpServer = require('http').createServer(server);
httpServer.listen(SERVER_PORT, () => console.log(
    `Server is now running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${SERVER_PORT}`
  ));

var parseLiveQueryServer = ParseServerLive.createLiveQueryServer(httpServer);