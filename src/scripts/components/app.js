// =========================================
// App.js
// ----
// Main app js that gets rendered in main.js
// =========================================

// ---- External Dependencies ----
var React = require('react');

// ---- Internal Dependencies ----
var MainHeader = require('./mainHeader');
var StandardButtonsDemo = require('./demos/standardButtons');

// ---- Styles ----
var projectVars = require( '../vars' );
var appStyles = {
  fontFamily: projectVars.fonts.sans
};
var demosStyles = {
  padding: '0 56px'
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'App',

  render: function() {
    return (
      <div style={ appStyles }>
        <MainHeader />
        <div style={ demosStyles }>
          <StandardButtonsDemo />
        </div>
      </div>
    );
  }

} );
