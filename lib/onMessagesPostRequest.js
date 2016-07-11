var rp        = require('request-promise');
var stripData = require('./stripData');
var config    = require('../config');

var manageAttachment = function ( files, fileProp ) {
	var attachment = {};

	attachment.originalname = files[ fileProp ][0].originalname;
	attachment.filename     = files[ fileProp ][0].filename;
	attachment.mimeType     = files[ fileProp ][0].mimetype;
	attachment.size         = files[ fileProp ][0].size;
	return attachment;
}

module.exports = function ( request, response ) {
	var body = request.body;
	var data;
	var options;

	data = stripData( body );

	// Because mailgun
	if ( request.files ) {
		data.attachments = [];
		for ( var fileProp in request.files ) {
			// if ( request.files.hasOwnProperty( fileProp ) ) {
				data.attachments.push( manageAttachment( request.files, fileProp ) );
			// }
		}
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

			console.log( '[API response]', response );
		} )
		.catch( function ( error ) {

			console.error( '[API error]', error, error.stack );
		} );
	}

	response.status( 200 ).end();
};