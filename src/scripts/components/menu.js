// =========================================
// Menu.js
// ----
// Menu Overlay Demo
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
var ReactStyleTransitionGroup = require( 'react-style-transition-group' );
var merge = require( '../lib/merge' );

// ---- Internal Dependencies ----
var MenuItem = require( './menuItem' );

// ---- Styles ----
var projectVars = require( '../vars' );
var menuStyles = {
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
    pointerEvents: 'none',
    overflow: 'hidden'
  },
  bg: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    backgroundColor: projectVars.colors.blueWordPress,
    transform: 'translate3d(0, 0, 0) scaleY(0)',
    transformOrigin: 'top'
  },
  open: {
    base: {
      pointerEvents: 'auto'
    },
    bg: {
      transform: 'translate3d(0, 0, 0) scaleY(1)'
    }
  },
  list: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    overflow: 'hidden'
  }
};
var transitionEasing = 'cubic-bezier(0.215, 0.61, 0.355, 1)';

// ---- React Class ----
var menuClass = React.createClass( {

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
          transition: 'transform ' + transitionTiming + ' ' + transitionEasing + ', opacity ' + transitionTiming + ' ' + transitionEasing,
          transform: 'translate3d(0, -' + ( ( index + 1 ) * 100 ) + '%, 0)',
          opacity: '0'
        },
        enterActive: {
          transform: 'translate3d(0, 0, 0)',
          opacity: '1'
        },
        leave: {
          transition: 'opacity 0.2s ' + transitionEasing,
          opacity: '1'
        },
        leaveActive: {
          opacity: '0'
        }
      };

      return (
        <MenuItem key={ 'menuItem-' + index } transitionStyles={ transitionStyles }>{ navItem }</MenuItem>
      );
    }, this );

    var baseStyles = merge(
      menuStyles.base,
      this.props.open && menuStyles.open.base
    );

    var bgTransitionStyles = {
      transition: 'transform ' + (( this.props.navItems.length - 1 ) * 250 ) + 'ms ' + transitionEasing
    };
    var bgStyles = merge(
      menuStyles.bg,
      bgTransitionStyles,
      this.props.open && menuStyles.open.bg
    );

    return (
      <div style={ baseStyles } onClick={ this.props.onClick }>
        <div style={ bgStyles }></div>
        <ReactStyleTransitionGroup component="ul" style={ menuStyles.list }>
          { ( this.props.open ) ?
            navItems
          : null }
        </ReactStyleTransitionGroup>
      </div>
    );
  }

} );

// ==== Module Export ====
module.exports = menuClass;
