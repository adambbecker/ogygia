// ===================================================
// DemoAreaLabel.js
// ----
// Inline labels mean to be paired w/ a demo component
// ===================================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Styles ----
var labelStyles = {
  width: 0,
  flex: '1 0 auto',
  fontSize: '11px',
  fontWeight: '600',
  color: '#87A6BC',
  lineHeight: '1',
  textTransform: 'uppercase',
  marginLeft: '18px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'DemoAreaLabel',

  render: function() {
    return (
      <label style={ labelStyles }>{ this.props.children }</label>
    );
  }

} );
