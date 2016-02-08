module.exports = {
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