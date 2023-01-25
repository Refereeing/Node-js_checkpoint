// Create a server
// Import Node.js core module
var http = require("http"); 

// creating server
http.createServer(function(req, res){ 

//handle incomming requests here..
//req: set of data attached to the server
//res: allows to interact with the server

    res.writeHead(200,{'Content-Type': 'text/html'});  
    res.write('<h1> Hi there node !!!! </h1>\n');
    
// Send the response body 

    res.end()

}).listen(3000);    //listen for any incoming requests
console.log('Node.js web server at port 3000 is running...')

