// ===================================================
// DemoAreaFlex.js
// ----
// Flexbox container for a component demo
// ===================================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Styles ----
var flexStyles = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  marginBottom: '14px'
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'DemoAreaFlex',

  render: function() {
    return (
      <div style={ flexStyles }>{ this.props.children }</div>
    );
  }

} );
