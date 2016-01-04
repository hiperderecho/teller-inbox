var express     = require('express');
var compression = require('compression');
var bodyParser  = require('body-parser');
var multer      = require('multer');
require('console-stamp')(console);

var config = require('./config');

var app        = express();
var fileFilter = require('./lib/fileFilter');
var upload     = multer({ dest: config.attachmentsPath, fileFilter: fileFilter, limits: { fileSize: config.maxFileSize } });

app.use( bodyParser.json({limit: '50mb'}) );
app.use( bodyParser.urlencoded({extended: true}) );
app.use( compression() );

var onMessagesPostRequest = require('./lib/onMessagesPostRequest');
// Mailgun attachment convention
var cpUpload = upload.fields(
[ { name: 'attachment-1', maxCount: 1 }
, { name: 'attachment-2', maxCount: 1 }
, { name: 'attachment-3', maxCount: 1 }
, { name: 'attachment-4', maxCount: 1 }
, { name: 'attachment-5', maxCount: 1 }
] );

app.post( '/', cpUpload, onMessagesPostRequest );

var listeningPort = process.env.PORT || 5000;
app.listen( listeningPort, function () {

	console.log( 'listening on ' + listeningPort );
} );