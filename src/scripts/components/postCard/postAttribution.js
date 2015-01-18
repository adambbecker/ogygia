// =========================================
// PostAttribution.js
// ----
// Found in header of post card
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../../lib/merge' );

// ---- Internal Dependencies ----
// none

// ---- Styles ----
var projectVars = require( '../../vars' );
var attributionStyles = {
  base: {
    width: '100%',
    fontFamily: projectVars.fonts.sans,
    color: projectVars.colors.textLight,
    fontSize: '14px',
    lineHeight: '24px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginBottom: '11px'
  },
  avatar: {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    backgroundSize: 'cover',
    marginRight: '8px',
    verticalAlign: 'middle'
  },
  name: {
    display: 'inline-block'
  }
};

// ---- React Class ----
var attributionClass = React.createClass( {

  displayName: 'PostAttribution',

  getAvatar: function() {
    var avatarBackground = {
      backgroundImage: 'url(' + this.props.avatarURL + ')'
    };

    var avatarStyles = merge(
      attributionStyles.avatar,
      avatarBackground
    );

    return ( <span style={ avatarStyles }></span> );
  },

  render: function() {
    return (
      <header style={ attributionStyles.base }>
        { this.getAvatar() }
        <span style={ attributionStyles.name }>{ this.props.name }</span>
      </header>
    );
  }

} );

// ==== Module Export ====
module.exports = {
  styles: attributionStyles,
  reactClass: attributionClass
};
