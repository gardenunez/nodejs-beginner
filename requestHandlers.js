var exec = require("child_process").exec;


function start(response) {
    console.log("Reques handler 'start' was called");
    var content = "empty";

    exec("ls -lah", function(error, stdout, stderr)
    {
        response.writeHead(200, {"content-Type" : "text\plain"})
        response.write(stdout);
        response.end();
    });

    return content;
    // return "Hello start";
}

function upload(response) {
    console.log("Reques handler 'upload' was called");
    response.writeHead(200, {"content-Type" : "text\plain"})
    response.write("Hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;