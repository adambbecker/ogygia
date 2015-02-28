// ===========================================
// Modal.js
// ----
// Demo modal system
// ===========================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../lib/react-with-addons' );
var Navigation = require('react-router').Navigation;
var merge = require( '../lib/merge' );

// ---- Internal Dependencies ----
var projectVars = require( '../vars' );
var Button = require( './button' ).reactClass;
var ConfettiDemo = require( './confetti' ).reactClass;

// ---- Styles ----
var typographyStyles = require( './demos/typography' ).styles;
var modalStyles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    perspective: '1000px'
  },
  bg: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    backgroundColor: 'rgba(200, 215, 225, 0.35)'
  },
  dialog: {
    base: {
      position: 'relative',
      zIndex: '2',
      width: '100%',
      maxWidth: '472px',
      border: 'solid 1px #C8D7E1',
      borderRadius: '4px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(46, 68, 83, 0.15)',
      transformStyle: 'preserve-3d'
    },
    pane: {
      backfaceVisibility: 'hidden'
    },
    paneBack: {
      textAlign: 'center'
    },
    paneBackText: {
      heading: {
        margin: '12px 0 8px'
      },
      body: {
        marginBottom: '12px'
      }
    },
    topPaneSection: {
      padding: '24px'
    },
    bottomPaneSection: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flee-start',
      padding: '16px 24px',
      borderTop: 'solid 1px #F3F6F8'
    },
    paneHeading: {
      marginBottom: '12px',
      fontSize: '21px',
      fontWeight: '300',
      lineHeight: '24px',
      color: projectVars.colors.textDark
    },
    paneBodyText: {
      fontSize: '14px',
      lineHeight: '24px',
      color: projectVars.colors.textLight
    },
    paneButton: {
      base: {
        flex: '1 0 auto'
      },
      firstChild: {
        marginRight: '4px'
      },
      lastChild: {
        marginLeft: '4px'
      }
    }
  },
  mediaQueries: {
    paneButtonMedium: {
      flex: 'none'
    }
  }
};

// ---- React Class ----
var modalClass = React.createClass( {

  displayName: 'Modal',

  mixins: [ Navigation ],

  statics: {
    willTransitionFrom: function(transition, component) {
      if ( component.state.modalIn || component.state.transitioning ) {
        transition.abort();

        if ( component.state.modalIn ) {
          component.playAnimationCancel();
        } else if ( component.state.transitioning ) {
          component.animInPlayer.reverse();
        }

        component.animInPlayer.onfinish = function() {
          component.setState( {
            transitioning: false,
            modalIn: false
          } );

          transition.retry();
        };
      }
    }
  },

  getInitialState: function() {
    return {
      accepted: false
    };
  },

  componentWillMount: function() {
    this.setState( {
      transitioning: true,
      modalIn: false
    } );
  },

  componentDidMount: function() {
    this.playAnimationIn();
  },

  componentDidUpdate: function( prevProps, prevState ) {
    if ( this.state.accepted && ! prevState.accepted ) {
      this.playAnimationAccept();
    }
  },

  playAnimationIn: function() {
    this.refs.bg.getDOMNode().animate(
      [
        { opacity: '0' },
        { opacity: '1' }
      ], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'both'
      }
    );

    this.animInPlayer = this.refs.dialog.getDOMNode().animate(
      [
        { transform: 'scale(0.3) rotateX(-90deg) translate3d(0, 60px, 0)', opacity: '0' },
        { transform: 'translate3d(0, 0, 0)', opacity: '1' }
      ],
      {
        duration: 400,
        delay: 200,
        easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        fill: 'both'
      }
    );

    this.animInPlayer.onfinish = function() {
      this.setState( {
        transitioning: false,
        modalIn: true
      } );
    }.bind( this );
  },

  playAnimationCancel: function() {
    if ( this.state.accepted ) {
      var animOut = new AnimationGroup( [
        new Animation (
          this.refs.bg.getDOMNode(), [
            { opacity: '1' },
            { opacity: '0' }
          ], {
            duration: 600,
            delay: 200,
            fill: 'both'
          }
        ),
        new Animation (
          this.refs.confetti.getDOMNode(), [
            { opacity: '1' },
            { opacity: '0' }
          ], {
            duration: 800,
            fill: 'both'
          }
        ),
        new Animation (
          this.refs.dialog.getDOMNode(), [
            { transform: 'translate3d(0, 0, 0)', opacity: '1' },
            { transform: 'scale(0.3) rotateX(90deg) translate3d(0, -540px, 0)', opacity: '0' }
          ], {
            duration: 400,
            easing: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            fill: 'both'
          }
        )
      ] );
    } else {
      var animOut = new AnimationGroup( [
        new Animation (
          this.refs.bg.getDOMNode(), [
            { opacity: '1' },
            { opacity: '0' }
          ], {
            duration: 600,
            delay: 200,
            fill: 'both'
          }
        ),
        new Animation (
          this.refs.dialog.getDOMNode(), [
            { transform: 'translate3d(0, 0, 0)', opacity: '1' },
            { transform: 'scale(0.3) rotateX(90deg) translate3d(0, -540px, 0)', opacity: '0' }
          ], {
            duration: 400,
            easing: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            fill: 'both'
          }
        )
      ] );
    }

    this.animInPlayer = document.timeline.play( animOut );
  },

  playAnimationAccept: function() {
    var animPlayer = this.refs.confetti.getDOMNode().animate(
      [
        { opacity: '0' },
        { opacity: '0.45' }
      ],
      {
        duration: 2600,
        easing: 'ease',
        fill: 'both'
      }
    );

    animPlayer.onfinish = function() {
      this.transitionTo('/');
    }.bind( this );
  },

  handleBgClick: function() {
    if ( ! this.state.accepted ) {
      this.transitionTo('/');
    }
  },

  handleCancelClick: function() {
    this.transitionTo('/');
  },

  handleAcceptClick: function() {
    this.setState( {
      accepted: true
    } );
  },

  render: function() {
    var cancelButtonStyles = merge(
        modalStyles.dialog.paneButton.base,
        this.props.mediaQuery !== 'small' && modalStyles.mediaQueries.paneButtonMedium,
        modalStyles.dialog.paneButton.firstChild
      ),
      acceptButtonStyles = merge(
        modalStyles.dialog.paneButton.base,
        this.props.mediaQuery !== 'small' && modalStyles.mediaQueries.paneButtonMedium,
        modalStyles.dialog.paneButton.lastChild
      );

    if ( this.state.accepted ) {
      return (
        <div style={ modalStyles.base }>
          <div ref="bg" style={ modalStyles.bg }></div>
          <div ref="dialog" style={ modalStyles.dialog.base }>
            <div style={ merge( modalStyles.dialog.pane, modalStyles.dialog.paneBack ) }>
              <div style={ modalStyles.dialog.topPaneSection }>
                <h2 style={ merge( typographyStyles.managePostTitle, modalStyles.dialog.paneBackText.heading ) }>Congratulations!</h2>
                <p style={ merge( typographyStyles.caption, modalStyles.dialog.paneBackText.body ) }>Your credit card has been successfully charged $400</p>
              </div>
            </div>
          </div>
          <ConfettiDemo ref="confetti" />
        </div>
      );
    } else {
      return (
        <div style={ modalStyles.base }>
          <div ref="bg" style={ modalStyles.bg } onClick={ this.handleBgClick }></div>
          <div ref="dialog" style={ modalStyles.dialog.base }>
            <div style={ modalStyles.dialog.pane }>
              <div style={ modalStyles.dialog.topPaneSection }>
                <h4 style={ modalStyles.dialog.paneHeading }>Terms of Service</h4>
                <p style={ modalStyles.dialog.paneBodyText }>You are responsible for any clicks clicks made on the buttons present in this modal and for any consequences thereof.</p>
              </div>
              <div style={ modalStyles.dialog.bottomPaneSection }>
                <Button style={ cancelButtonStyles } onClick={ this.handleCancelClick }>Cancel</Button>
                <Button primary={ true } style={ acceptButtonStyles } onClick={ this.handleAcceptClick }>Accept</Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

} );

// ==== Module Export ====
module.exports = {
  styles: modalStyles,
  reactClass: modalClass
};
