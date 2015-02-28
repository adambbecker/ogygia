// ===================================================
// DemoAreaLabel.js
// ----
// Inline labels mean to be paired w/ a demo component
// ===================================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../lib/react-with-addons' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var projectVars = require( '../vars' );
var labelStyles = {
  base: {
    width: 0,
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '100%',
    fontSize: '11px',
    fontWeight: '600',
    color: projectVars.colors.textLight,
    lineHeight: '1',
    textTransform: 'uppercase',
    marginBottom: '6px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  demo: {
    color: projectVars.colors.textDark
  },
  mediaQueries: {
    baseMedium: {
      flexBasis: 'auto',
      order: '2',
      marginLeft: '18px',
      marginBottom: '0'
    }
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'DemoAreaLabel',

  render: function() {
    var renderedStyles = merge(
      labelStyles.base,
      this.props.demo && labelStyles.demo,
      this.props.mediaQuery !== 'small' && labelStyles.mediaQueries.baseMedium
    );

    return (
      <label style={ renderedStyles }>{ this.props.children }</label>
    );
  }

} );
