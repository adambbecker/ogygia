// =========================================
// MainHeader.js
// ----
// Header on top
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Styles ----
var projectVars = require( '../vars' );
var mainHeaderStyles = {
  base: {
    width: '100%',
    padding: '30px 112px',
    backgroundColor: projectVars.colors.blueWordPress,
    overflow: 'hidden'
  },
  h1: {
    float: 'left',
    fontSize: '36px',
    fontWeight: '300',
    color: 'white'
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'MainHeader',

  render: function() {
    return (
      <header style={ mainHeaderStyles.base }>
        <h1 style={ mainHeaderStyles.h1 }>Calypso Patterns</h1>
      </header>
    );
  }

} );
