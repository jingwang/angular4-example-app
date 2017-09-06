// app require
var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var logger = require('winston');

// local require
var config = require('../config.js')();
var api = require('../routes/api.js');



var initApp = function(app){

    app.set('port', process.env.PORT || config.expressHttpPort);

    app.use(methodOverride());
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(morgan('combined', {
        skip: function (req, res) { return res.statusCode < 400 }
    }));

    // development env
    if (app.get('env') === 'development') {
        logger.level = 'debug';
        logger.debug('running in development env');
        app.use(errorHandler({ dumpExceptions: true, showStack: true }));
    };

    // production only
    if (app.get('env') === 'production') {
        logger.debug('running in production env');
        app.use(errorHandler());
    };

    // --JSON API--

    // dummy
    app.get('/api/dummy/:id', api.dummy);
};


var onAppStart = function(){
    // express server
    var app = express();

    initApp(app);

    var server = http.Server(app);
    var httpsServer = https.createServer(sslOptions, app);


    // start server
    server.listen(app.get('port'), function(){
        logger.info('Express server listening on port ' + app.get('port') + ' @' + app.get('env'));
    });
    // start ssl server
    httpsServer.listen(config.expressHttpsPort, function(){
        logger.info('Express https server listening on port ' + config.expressHttpsPort + ' @' + app.get('env'));
    });
};

exports.onAppStart = onAppStart;



