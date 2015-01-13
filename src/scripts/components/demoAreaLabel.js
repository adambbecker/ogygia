// ===================================================
// DemoAreaLabel.js
// ----
// Inline labels mean to be paired w/ a demo component
// ===================================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var projectVars = require( '../vars' );
var labelStyles = {
  base: {
    width: 0,
    flex: '1 0 auto',
    fontSize: '11px',
    fontWeight: '600',
    color: projectVars.colors.textLight,
    lineHeight: '1',
    textTransform: 'uppercase',
    marginLeft: '18px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  demo: {
    color: projectVars.colors.textDark
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'DemoAreaLabel',

  render: function() {
    var styles = ( this.props.demo ) ? merge( labelStyles.base, labelStyles.demo ) : labelStyles.base;

    return (
      <label style={ styles }>{ this.props.children }</label>
    );
  }

} );
