'use strict';
var server = require("./server");
var router = require("./router");
var mysql = require("mysql");

var requestHandlers = require("./requestHandlers");

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/file'] = requestHandlers.readFile;

server.start(router.route, handle);

//mysql
var connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "node"
    }
);

var query = connection.query('SELECT id, content from test');

 query.on('error', function(err) { 
      console.log('A database error occured:');
       console.log(err); 
     }); 

 query.on('fields', function(fields) {
      console.log('Received fields information.'); 
     }); 

 query.on('result', function(result) { 
     console.log('Received result:'); 
     console.log(result); 
     }); 

 query.on('end', function() { 
      console.log('Query execution has finished.');
       connection.end(); 
    });