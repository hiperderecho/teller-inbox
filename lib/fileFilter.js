module.exports = function ( req, file, cb ) {

	if ( file.mimetype === 'application/x-msdownload' ||
	     file.mimetype === 'application/x-msdos-program' ||
	     file.mimetype === 'application/x-msdos-windows' ||
	     file.mimetype === 'application/x-download' ||
	     file.mimetype === 'application/bat' ||
	     file.mimetype === 'application/x-bat' ||
	     file.mimetype === 'application/com' ||
	     file.mimetype === 'application/x-com' ||
	     file.mimetype === 'application/exe' ||
	     file.mimetype === 'application/x-exe' ||
	     file.mimetype === 'application/x-winexe' ||
	     file.mimetype === 'application/x-winhlp' ||
	     file.mimetype === 'application/x-winhelp' ||
	     file.mimetype === 'application/x-javascript' ||
	     file.mimetype === 'application/hta' ||
	     file.mimetype === 'application/x-ms-shortcut' ||
	     file.mimetype === 'application/octet-stream' ||
	     file.mimetype === 'vms/exe' ||
	     file.mimetype === 'text/javascript' ||
	     file.mimetype === 'text/scriptlet' ) {
		cb( null, false );
	}

	cb( null, true );
};