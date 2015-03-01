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
    padding: '24px',
    backgroundColor: projectVars.colors.blueWordPress,
    overflow: 'hidden',
    cursor: 'pointer'
  },
  h1: {
    float: 'left',
    fontSize: '36px',
    fontWeight: '300',
    color: 'white'
  },
  icon: {
    fontSize: 'inherit',
    margin: '-6px 16px 0 0',
    verticalAlign: 'middle'
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
    if ( this.props.mediaQuery !== 'small' ) {
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
      <header style={ this.getHeaderStyles() } onClick={ this.props.onClick }>
        <h1 style={ mainHeaderStyles.h1 }><span className="noticon noticon-menu" style={ mainHeaderStyles.icon }></span>UI Patterns</h1>
      </header>
    );
  }

} );
