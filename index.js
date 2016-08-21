'use strict';
var server = require("./server");
var router = require("./router")
var requestHandlers = require("./requestHandlers");

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/file'] = requestHandlers.readFile;

server.start(router.route, handle);