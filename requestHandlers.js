 var querystring = require("querystring"); 

function start(response, postData) {
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

function upload(response, postData) {
    console.log("Reques handler 'upload' was called");
    response.writeHead(200, {"content-Type" : "text\plain"})
     response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;