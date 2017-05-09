/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('360 Research.qvf', config);

	//get objects -- inserted here --
	app.getObject('QV05','e2fd1469-0d49-4763-9348-281fdbc880ce');
	app.getObject('QV06','14a7e8c7-62b4-428d-b529-97855226e752');
	app.getObject('QV01','e2fd1469-0d49-4763-9348-281fdbc880ce');
	app.getObject('QV02','e2fd1469-0d49-4763-9348-281fdbc880ce')
	app.getObject('CurrentSelections','CurrentSelections');
	
	
	//create cubes and lists -- inserted here --

} );
