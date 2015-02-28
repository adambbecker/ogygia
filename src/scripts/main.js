// var React = require('react');
// var React = require( './lib/react-with-addons' );
// var Router = require('react-router');
// var Route = Router.Route;
//
// var App = require('./components/app');
// var Modal = require('./components/modal').reactClass;
//
// var routes = (
//   <Route name="app" path="/" handler={App} ignoreScrollBehavior={ true }>
//     <Route name="modal" handler={Modal} ignoreScrollBehavior={ true } />
//   </Route>
// );
//
// Router.run(routes, function(Handler) {
//   React.render(<Handler />, document.getElementById('main'));
// });


var React = require( './lib/react-with-addons' );
var APP = require('./components/app');

React.render( <APP />, document.getElementById('main') );
