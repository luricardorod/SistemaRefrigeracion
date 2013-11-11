/*
 * Module dependencies.
 */

var express     = require('express')
    http        = require('http'),
    path        = require('path'),
    routes      = require('./routes');

var app = express();

/*
 * Mongo queries and management is on mongo-queries.js
 */

// all environments
app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'jade' );
app.locals.pretty = true;
//app.locals.pretty = false; //production mode.
app.use( express.logger('dev') );
//app.use( express.bodyParser() ); bodyParser deprecated, now json && urlenconded
app.use( express.json() );
app.use( express.urlencoded() );
app.use( express.cookieParser() );
app.use( express.methodOverride() );
app.use( app.router );
  app.use( require('less-middleware')
    ( { src: __dirname + '/public' } ) );
app.use( express.static( path.join( __dirname, 'public') ) );

// development only
if ( 'development' == app.get('env') ) {
  app.use( express.errorHandler() );
}

app.get( '/', routes.index );

http.createServer( app ).listen( 3000, function () {
    console.log( 'Express server listening on port 3000'  );
});