var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = require('./components/app');
var Modal = require('./components/modal').reactClass;

var routes = (
  <Route name="app" path="/" handler={App} ignoreScrollBehavior={ true }>
    <Route name="modal" handler={Modal} ignoreScrollBehavior={ true } />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('main'));
});
