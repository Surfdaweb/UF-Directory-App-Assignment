var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function (request, response) {
    var parsedUrl = url.parse(request.url);

    //if we're on the listings page, then display the info
    if (request.method == 'GET' && parsedUrl.path == '/listings') {
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.write(listingData);
        response.end();
    }

    //otherwise display a 404 error
    else {
        response.writeHead(404, { 'Content-type': 'text/html' });
        response.end('Bad gateway error');
    }
};



fs.readFile('listings.json', 'utf8', function(err, data) {

    if (err) {
        return console.log('ERROR TEXT DISPLAYED HERE');
    }

    listingData = data;

    //Starts the server
    http.createServer(requestHandler).listen(8080);

});
