// ===========================================
// Label.js
// ----
// Standard labels above text inputs/textareas
// ===========================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../lib/react-with-addons' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var projectVars = require( '../vars' );
var labelStyles = {
  base: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '24px',
    color: projectVars.colors.textDark,
    marginBottom: '6px'
  },
  required: {
    display: 'inline-block',
    fontSize: '11px',
    color: '#EF811D',
    textTransform: 'uppercase',
    verticalAlign: 'baseline',
    marginLeft: '6px'
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'Label',

  render: function() {
    return (
      <label style={ labelStyles.base }>
        { this.props.children }
        { this.props.required ? <span style={ labelStyles.required }>Required</span> : null }
      </label>
    );
  }

} );
