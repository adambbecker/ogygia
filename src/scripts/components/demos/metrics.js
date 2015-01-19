// ===================================================
// Metrics.js
// ----
// Demo for the different post reader cards
// ===================================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');
var PostCard = require( '../postCard' ).reactClass;
var Button = require( '../button' ).reactClass;

// ---- Styles ----
var projectVars = require( '../../vars' );
var metricsDemoStyles = {
  introBodyText: {
    fontSize: '16px',
    lineHeight: '24px',
    color: projectVars.colors.textDark,
    maxWidth: '712px',
    marginBottom: '24px'
  },
  gridButton: {
    marginBottom: '52px'
  }
}

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'MetricsDemo',

  getInitialState: function() {
    return {
      gridVisible: false,
      animationState: null
    }
  },

  getButtonDisabledStatus: function() {
    return ( this.state.animationState === 'playing' ) ? true : false;
  },

  getButtonText: function() {
    var iconClass = 'noticon noticon-',
      iconStyle = {
        marginRight: '8px'
      },
      buttonText;

    if ( this.state.animationState === 'playing' ) {
      iconClass += 'ellipsis';
      buttonText = 'Animating Grid...';
    } else if ( this.state.gridVisible ) {
      iconClass += 'hide';
      buttonText = 'Hide Grid';
    } else {
      iconClass += 'show';
      buttonText = 'Show Grid';
    }

    return ( <span><span className={ iconClass } style={ iconStyle }></span><span>{ buttonText }</span></span> );
  },

  handleGridClick: function() {
    if ( this.state.animationState === 'playing' ) {
      return;
    }

    if ( ! this.state.gridVisible ) {
      var animationInPlayer = document.timeline.play( this.refs.smallPostCard.refs.blueprint.animationIn );
    } else {
      var animationInPlayer = document.timeline.play( this.refs.smallPostCard.refs.blueprint.animationOut );
    }

    animationInPlayer.onfinish = function() {
      this.setState( {
        animationState: 'finished'
      } );
    }.bind( this );

    this.setState( {
      gridVisible: ! this.state.gridVisible,
      animationState: 'playing'
    } );
  },

  render: function() {
    return (
      <DemoArea introTitle="Metrics" size="large">
        <p style={ metricsDemoStyles.introBodyText }>Calypso uses an 8px grid with 2px subdivisions. Each square on the grid is 8px wide by 8px tall. Aligning elements to the grid ensures a harmonious visual result.</p>
        <Button style={ metricsDemoStyles.gridButton } onClick={ this.handleGridClick } disabled={ this.getButtonDisabledStatus() }>{ this.getButtonText() }</Button>
        <DemoAreaSecHeading primaryText="Widest" secondaryText="656px Wide" firstChild={ true } />
        <PostCard size="small" ref="smallPostCard" />
      </DemoArea>
    );
  }

} );