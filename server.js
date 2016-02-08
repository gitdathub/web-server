var express = require('express');
var app = express();
var port = 3000;

var middleware = {
    requireAuth: function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
        var curdate = new Date().toString();
        console.log('request: ' +  curdate + req.method + ' ' + req.originalUrl);
        next();
    }
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function(req, res){
   res.send('about us'); 
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('express server started');
    console.log('port number:' + port);
});