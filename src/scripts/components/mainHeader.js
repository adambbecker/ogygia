// =========================================
// MainHeader.js
// ----
// Header on top
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var projectVars = require( '../vars' );
var mainHeaderStyles = {
  base: {
    width: '100%',
    // padding: '30px 112px',
    padding: '24px',
    backgroundColor: projectVars.colors.blueWordPress,
    overflow: 'hidden'
  },
  h1: {
    float: 'left',
    fontSize: '36px',
    fontWeight: '300',
    color: 'white'
  },
  mediaQueries: {
    baseMedium: {
      padding: '48px'
    }
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'MainHeader',

  getHeaderStyles: function() {
    if ( this.props.mediaQuery === 'medium' ) {
      return merge(
        mainHeaderStyles.base,
        mainHeaderStyles.mediaQueries.baseMedium
      );
    } else {
      return mainHeaderStyles.base;
    }
  },

  render: function() {
    return (
      <header style={ this.getHeaderStyles() }>
        <h1 style={ mainHeaderStyles.h1 }>Calypso Patterns</h1>
      </header>
    );
  }

} );
