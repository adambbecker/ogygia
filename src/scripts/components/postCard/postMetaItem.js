// ===========================================
// PostMetaItem.js
// ----
// Clickable meta item (reblog, comment, like)
// ===========================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../../lib/merge' );

// ---- Internal Dependencies ----
// none

// ---- Styles ----
var projectVars = require( '../../vars' );
var metaItemStyles = {
  icon: {
    display: 'inline-block',
    fontSize: '30px',
    color: projectVars.colors.blueMedium,
    marginRight: '8px'
  },
  number: {
    display: 'inline-block',
    fontSize: '14px',
    lineHeight: '30px',
    color: projectVars.colors.textLight
  }
};

// ---- React Class ----
var metaItemClass = React.createClass( {

  displayName: 'PostMetaItem',

  getInitialState: function() {
    return {
      number: this.props.number,
      active: this.props.active
    };
  },

  getIcon: function() {
    var iconClass = React.addons.classSet( {
      'noticon': true,
      'noticon-reblog': this.props.type === 'reblog',
      'noticon-comment': this.props.type === 'comment',
      'noticon-star': this.props.type === 'like'
    } );

    return ( <span className={ iconClass } style={ metaItemStyles.icon }></span> );
  },

  render: function() {
    return (
      <li style={ this.props.style }>
        { this.getIcon() }
        <span style={ metaItemStyles.number }>{ this.state.number }</span>
      </li>
    );
  }

} );

// ==== Module Export ====
module.exports = {
  styles: metaItemStyles,
  reactClass: metaItemClass
};
