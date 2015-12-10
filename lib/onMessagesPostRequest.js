var rp        = require('request-promise');
var stripData = require('./stripData');
var config    = require('../config');

module.exports = function ( request, response ) {
	var body = request.body;
	var data;
	var options;

	data = stripData( body );
	if ( request.file ) {
		data.originalname = request.file.originalname;
		data.filename     = request.file.filename;
		data.mimeType     = request.mimetype;
	}

	options =
	{ method : 'POST'
	, uri    : config.onEmailUrl
	, body   : data
	, json   : true
	};

	if ( !!data.recipient ) {
		rp( options )
		.then( function ( response ) {

			console.log( 'response', response );
		} )
		.catch( function ( error ) {

			console.error( error, error.stack );
		} );
	}

	response.status( 200 ).end();
};