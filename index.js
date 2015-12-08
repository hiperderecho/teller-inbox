var express     = require('express');
var compression = require('compression');
var bodyParser  = require('body-parser');
require('console-stamp')(console);

var app = express();

app.use( bodyParser.json({limit: '50mb'}) );
app.use( bodyParser.urlencoded({extended: true}) );
app.use( compression() );

var onMessagesPostRequest = require('./lib/onMessagesPostRequest');

app.post( '/inbox', onMessagesPostRequest );

var listeningPort = process.env.PORT || 5000;
app.listen( listeningPort, function () {
	console.log( 'listening on ' + listeningPort );
} );