// ===================================================
// Metrics.js
// ----
// Demo for the different post reader cards
// ===================================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');
var PostCard = require( '../postCard' ).reactClass;

// ---- Styles ----
var projectVars = require( '../../vars' );

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'MetricsDemo',

  render: function() {
    return (
      <DemoArea introTitle="Metrics" size="large">
        <DemoAreaSecHeading primaryText="Widest" secondaryText="656px Wide" firstChild={ true } />
        <PostCard />
      </DemoArea>
    );
  }

} );
