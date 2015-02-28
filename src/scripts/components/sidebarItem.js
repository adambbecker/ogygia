// =========================================
// SidebarItem.js
// ----
// Sidebar Item
// =========================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../lib/react-with-addons' );

// ---- Styles ----
var projectVars = require( '../vars' );
var sidebarItemStyles = {
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
var sidebarItemClass = React.createClass( {

  render: function() {
    return (
      <li style={ sidebarItemStyles }><span>{ this.props.children }</span></li>
    );
  }

} );

// ==== Module Export ====
module.exports = sidebarItemClass;
