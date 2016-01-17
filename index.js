console.log( 'hello' );

// var express = require( 'express' );
// var bodyParser = require( 'body-parser' );
// // cores is a module that blacklists and whitelists certain methods
// var session = require( 'express-session' );
// var usersCtrl = require( './controllers/users_controller' );
// console.log( 'hello' );
// var app = express();
//
// app.use( session( { //checks for current session, or creates a new one.
//   secret: '6Fsc24Mk8672NNnytWpZZkxXm', // don't commit this to github. This generates our algorythm
//   saveUninitialized: true, //tells session to save a new key/value pair for every request that comes back, that doesn't already have a key/value pair
//   resave: true //don't worry yet, it saves the session before..... it's important if you have a ehavy server load
//     // cookie: { secure: true } we're not going to worry about this yet, let's not confuse ourselves this early
// } ) );
//
//
//
// app.use( express.static( __dirname + '/public' ) ); // gives us the directory of the current location of this file
// // only serves it if it needs it.
// app.use( bodyParser.json() );
// app.use( function( req, res, next ) {
//   console.log( req.session );
//   next(); //postman will stall if we don't use a next after the console.log
// } );
//
// // ------------------ENDPOINTS-------------------- \\
//
// app.post( '/cart', function( req, res, next ) {
//   // you could add items direectly to req.sessions, but it's probably best to have a cart attribute, so that it's more dynamic based on the users
//   if ( !req.sessions.cart ) {
//     req.sessions.cart = []; //creates an empty array
//   }
//   req.session.cart.push( req.body ); // add an item to the cart... could push something on an empty cart if the front end isn't sending good data
//   res.status( 200 ).json( req.sessions.cart ); //it's decent practice to put a status code ...
// } );
//
//
//
// app.get( '/users', usersCtrl.index );
// app.get( '/users/:id', usersCtrl.show );
// app.post( '/users', usersCtrl.create );
// app.put( '/users/:id', usersCtrl.update );
// app.delete( '/users/:id', usersCtrl.destroy );
//
// var port = 3000;
// app.listen( port, function() {
//   console.log( 'listening to port ', port );
// } );