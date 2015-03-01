// =========================================
// MenuItem.js
// ----
// Menu Items live inside Menu
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Styles ----
var projectVars = require( '../vars' );
var menuItemStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 0 auto',
  fontSize: 37,
  fontWeight: '300',
  textAlign: 'center',
  color: 'white'
};

// ---- React Class ----
var menuItemClass = React.createClass( {

  render: function() {
    return (
      <li style={ menuItemStyles }><span>{ this.props.children }</span></li>
    );
  }

} );

// ==== Module Export ====
module.exports = menuItemClass;
