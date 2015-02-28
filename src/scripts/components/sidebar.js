// =========================================
// Sidebar.js
// ----
// Sidebar Demo
// =========================================

// ---- External Dependencies ----
var React = require( '../lib/react-with-addons' );
var ReactStyleTransitionGroup = React.addons.StyleTransitionGroup;
// var React = require( 'react' );
// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var merge = require( '../lib/merge' );

// ---- Internal Dependencies ----
var SidebarItem = require( './sidebarItem' );

// ---- Styles ----
var projectVars = require( '../vars' );
var sidebarStyles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    padding: 48,
    // backgroundColor: 'rgba(200, 215, 225, 0.85)',
    backgroundColor: projectVars.colors.blueWordPress,
    transition: 'opacity 0.3s ease-in-out',
    opacity: '0',
    pointerEvents: 'none'
  },
  open: {
    // transform: 'translateX(0)'
    opacity: '1',
    pointerEvents: 'auto'
  },
  list: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

// ---- React Class ----
var sidebarClass = React.createClass( {

  getDefaultProps: function() {
    return {
      navItems: [
        'Home',
        'About',
        'Blog',
        'Projects',
        'Settings',
        'Terms'
      ]
    }
  },

  render: function() {
    var navItems = this.props.navItems.map( function( navItem, index ) {
      var transitionTiming = ( ( index + 1 ) * 200 ) + 'ms';
      var transitionStyles = {
        enter: {
          transition: 'transform ' + transitionTiming + ' ease, opacity ' + transitionTiming + ' ease',
          transform: 'translateY(-' + ( ( index + 1 ) * 100 ) + '%)',
          opacity: '0'
        },
        enterActive: {
          transform: 'translateX(0)',
          opacity: '1'
        },
        leave: {
          transition: 'opacity 0.3s ease',
          opacity: '1'
        },
        leaveActive: {
          opacity: '0'
        }
      };

      return (
        <SidebarItem transitionStyles={ transitionStyles }>{ navItem }</SidebarItem>
      );
    }, this );

    var baseStyles = merge(
      sidebarStyles.base,
      this.props.open && sidebarStyles.open
    );

    return (
      <div style={ baseStyles } onClick={ this.props.onClick }>
        <ReactStyleTransitionGroup component="ul" style={ sidebarStyles.list }>
          { ( this.props.open ) ?
            navItems
          : null }
        </ReactStyleTransitionGroup>
      </div>
    );
  }

} );

// ==== Module Export ====
module.exports = sidebarClass;
