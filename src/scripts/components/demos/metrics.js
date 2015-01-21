// ===================================================
// Metrics.js
// ----
// Demo for the different post reader cards
// ===================================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../../lib/merge' );

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
};
var postCardsContainerStyles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  demo: {
    width: 0,
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '100%'
  },
  smallSize: {
    marginTop: '24px'
  },
  mediaQueries: {
    demoXLarge: {
      base: {
        flexBasis: 'auto'
      },
      largeSize: {
        flexGrow: '2'
      },
      smallSize: {
        marginTop: '0',
        marginLeft: '24px'
      },
      smallSecHeading: {
        marginTop: '0'
      }
    }
  }
};

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

  getPostCards: function() {
    if ( this.props.mediaQuery !== 'small' ) {
      var demoContainerStyle = merge(
        postCardsContainerStyles.demo,
        this.props.mediaQuery === 'xLarge' && postCardsContainerStyles.mediaQueries.demoXLarge.base
      );

      var demoLargeContainerStyle = merge(
        demoContainerStyle,
        this.props.mediaQuery === 'xLarge' && postCardsContainerStyles.mediaQueries.demoXLarge.largeSize
      );

      var demoSmallContainerStyle = merge(
        demoContainerStyle,
        postCardsContainerStyles.smallSize,
        this.props.mediaQuery === 'xLarge' && postCardsContainerStyles.mediaQueries.demoXLarge.smallSize
      );

      return (
        <div style={ postCardsContainerStyles.base }>
          <div style={ demoLargeContainerStyle }>
            <DemoAreaSecHeading primaryText="Widest" secondaryText="656px Wide" firstChild={ true } />
            <PostCard ref="largePostCard" mediaQuery={ this.props.mediaQuery } />
          </div>
          <div style={ demoSmallContainerStyle }>
            <DemoAreaSecHeading primaryText="Narrowest" secondaryText="304px Wide" />
            <PostCard ref="smallPostCard" size="small" mediaQuery={ this.props.mediaQuery } />
          </div>
        </div>
      );
    } else {
      return (
        <div style={ postCardsContainerStyles.base }>
          <div style={ postCardsContainerStyles.demo }>
            <DemoAreaSecHeading primaryText="Widest" secondaryText="656px Wide" firstChild={ true } />
            <PostCard ref="smallPostCard" />
          </div>
        </div>
      );
    }
  },

  handleGridClick: function() {
    var animationIn, animationOut, animationInPlayer;

    if ( this.state.animationState === 'playing' ) {
      return;
    }

    if ( ! this.state.gridVisible ) {
      if ( this.props.mediaQuery !== 'small' ) {
        animationIn = new AnimationGroup( [
          this.refs.largePostCard.refs.blueprint.animationIn,
          this.refs.smallPostCard.refs.blueprint.animationIn
        ] );
      } else {
        animationIn = this.refs.smallPostCard.refs.blueprint.animationIn;
      }

      animationInPlayer = document.timeline.play( animationIn );
    } else {
      if ( this.props.mediaQuery !== 'small' ) {
        animationOut = new AnimationGroup( [
          this.refs.largePostCard.refs.blueprint.animationOut,
          this.refs.smallPostCard.refs.blueprint.animationOut
        ] );
      } else {
        animationOut = this.refs.smallPostCard.refs.blueprint.animationOut;
      }

      animationInPlayer = document.timeline.play( animationOut );
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
      <DemoArea introTitle="Metrics" size="large" mediaQuery={ this.props.mediaQuery }>
        <p style={ metricsDemoStyles.introBodyText }>Calypso uses an 8px grid with 2px subdivisions. Each square on the grid is 8px wide by 8px tall. Aligning elements to the grid ensures a harmonious visual result.</p>
        <Button style={ metricsDemoStyles.gridButton } onClick={ this.handleGridClick } disabled={ this.getButtonDisabledStatus() }>{ this.getButtonText() }</Button>
        { this.getPostCards() }
      </DemoArea>
    );
  }

} );
