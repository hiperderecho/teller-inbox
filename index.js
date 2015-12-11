var express     = require('express');
var compression = require('compression');
var bodyParser  = require('body-parser');
var multer      = require('multer');
require('console-stamp')(console);

var config = require('./config');

var app    = express();
var upload = multer({ dest: config.attachmentsPath });

app.use( bodyParser.json({limit: '50mb'}) );
app.use( bodyParser.urlencoded({extended: true}) );
app.use( compression() );


var onMessagesPostRequest = require('./lib/onMessagesPostRequest');

app.post( '/', upload.single( 'attachment-1' ), onMessagesPostRequest );

var listeningPort = process.env.PORT || 5000;
app.listen( listeningPort, function () {

	console.log( 'listening on ' + listeningPort );
} );