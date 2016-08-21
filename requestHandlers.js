var querystring = require("querystring"); 
var fs = require('fs');

function start(response, postData, querystringparams) {
    console.log("Reques handler 'start' was called");
     var body = '<html>' + 
     '<head>'+ 
     '<meta http-equiv="Content-Type" content="text/html; '+ 
     'charset=UTF-8" />'+ 
     '</head>'+ 
     '<body>'+
      '<form action="/upload" method="post">'+ 
       '<textarea name="text" rows="20" cols="60"></textarea>'+ 
       '<input type="submit" value="Submit text" />'+ 
       '</form>'+ 
       '</body>'+
     '</html>';
    response.writeHead(200, {"content-Type" : "text\plain"})
    response.write(body);
    response.end();
}

function upload(response, postData, querystringparams) {
    console.log("Reques handler 'upload' was called");
    response.writeHead(200, {"content-Type" : "text\plain"})
     response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
}

function readFile(response, postData, querystringparams){
    // console.log("query string: " + querystringparams)
    var filename = querystring.parse(querystringparams).path
    // console.log(filename)
    if(filename === '' || filename === undefined){
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found file path");
        response.end(); 
    }
    else{

        var stream = fs.createReadStream(filename);
        var content = ''; 

        stream.on('error', function(err) { 
            console.log('Sad panda: ' + err); 11 }); 

        stream.on('data', function(data) { 
            content = content + data; 11 }); 
            console.log("just read more content ...")

        stream.on('end', function() {
            console.log('File content has been retrieved: ' + content);
        });
        
        
        response.writeHead(200, {"content-Type" : "text\plain"})
        response.write("Ready the file: " + filename)
        response.end()
    }
}

exports.start = start;
exports.upload = upload;
exports.readFile = readFile