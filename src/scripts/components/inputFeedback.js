// =========================================
// InputFeedback.js
// ----
// Messages displayed just below input,
// usually error or success messages
// =========================================

// ---- External Dependencies ----
var React = require( 'react/addons' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var projectVars = require( '../vars' );
var feedbackStyles = {
  base: {
    width: '100%',
    fontSize: '11px',
    lineHeight: '14px',
    padding: '10px 15px',
    transition: 'background-color 0.2s cubic-bezier(.22,.67,.52,.92)',
    transformOrigin: 'top'
  },
  error: {
    color: '#FFFFFF',
    backgroundColor: projectVars.colors.error
  },
  success: {
    color: projectVars.colors.success,
    backgroundColor: 'transparent'
  },
  icon: {
    float: 'left',
    fontSize: '14px'
  },
  message: {
    paddingLeft: '18px'
  }
};

// ---- React Class ----
var feedbackClass = React.createClass( {

  displayName: 'InputFeedback',

  getDefaultProps: function() {
    return {
      animate: true
    }
  },

  getInitialState: function() {
    return {
      error: false,
      visible: true
    }
  },

  componentDidMount: function() {
    if ( this.props.animate ) {
      var bgAnimationIn = new Animation(
        this.getDOMNode(),
        [
          { opacity: 0, transform: 'scaleY(0)' },
          { opacity: 1, transform: 'scaleY(1)' }
        ],
        {
          duration: 200,
          easing: 'cubic-bezier(.22,.67,.52,.92)',
          fill: 'both'
        }
      );

      var messageAnimationIn = new Animation(
        this.refs.message.getDOMNode(),
        [
          { opacity: 0, transform: 'translateX(18px)' },
          { opacity: 1, transform: 'translateX(0)' }
        ],
        {
          duration: 200,
          delay: 100,
          easing: 'cubic-bezier(.22,.67,.52,.92)',
          fill: 'both'
        }
      );

      var iconAnimationIn = new Animation(
        this.refs.icon.getDOMNode(),
        [
          { opacity: 0, transform: 'scale(0)' },
          { opacity: 1, transform: 'scale(1)' }
        ],
        {
          duration: 300,
          delay: 50,
          easing: 'cubic-bezier(0.190, 0.915, 0.490, 1.210)',
          fill: 'both'
        }
      );

      this.animationIn = new AnimationGroup( [ bgAnimationIn, messageAnimationIn, iconAnimationIn ] );
      document.timeline.play( this.animationIn );
    }
  },

  componentWillUpdate: function( nextProps, nextState ) {
    // If animation out is playing:
    //
    // at the end visible state will be set to false,
    // so animation should play in
    if ( this.state.visible && ! nextState.visible ) {
      var messageAnimationIn = new Animation(
        this.refs.message.getDOMNode(),
        [
          { opacity: 0, transform: 'translateX(18px)' },
          { opacity: 1, transform: 'translateX(0)' }
        ],
        {
          duration: 200,
          delay: 50,
          easing: 'cubic-bezier(.22,.67,.52,.92)',
          fill: 'both'
        }
      );

      var iconAnimationIn = new Animation(
        this.refs.icon.getDOMNode(),
        [
          { opacity: 0, transform: 'scale(0)' },
          { opacity: 1, transform: 'scale(1)' }
        ],
        {
          duration: 300,
          delay: 0,
          easing: 'cubic-bezier(0.190, 0.915, 0.490, 1.210)',
          fill: 'both'
        }
      );

      var feedbackTypeAnimationIn = document.timeline.play( new AnimationGroup( [ messageAnimationIn, iconAnimationIn ] ) );
      feedbackTypeAnimationIn.onfinish = function() {
        this.setState( {
          visible: true
        } );
      }.bind( this );
    }
  },

  animateMessageOut: function() {
    var messageAnimationOut = new Animation(
      this.refs.message.getDOMNode(),
      [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(18px)' }
      ],
      {
        duration: 200,
        delay: 0,
        easing: 'cubic-bezier(.22,.67,.52,.92)',
        fill: 'both'
      }
    );

    var iconAnimationOut = new Animation(
      this.refs.icon.getDOMNode(),
      [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0)' }
      ],
      {
        duration: 200,
        delay: 0,
        easing: 'ease-out',
        fill: 'both'
      }
    );

    var feedbackTypeAnimationOut = document.timeline.play( new AnimationGroup( [ messageAnimationOut, iconAnimationOut ] ) );
    feedbackTypeAnimationOut.onfinish = function() {
      this.setState( {
        visible: false
      } );
    }.bind( this );
  },

  shouldComponentUpdate: function( nextProps, nextState ) {
    if ( this.props.error === nextProps.error || this.props.success === nextProps.success ) {
      if ( this.state.visible === nextState.visible ) {
        return false;
      } else {
        return true;
      }
    } else {
      if ( this.state.visible ) {
        this.animateMessageOut();
        return false;
      } else {
        return true;
      }
    }
  },

  getIcon: function() {
    var genericonClass = React.addons.classSet( {
      'genericon': true,
      'genericon-spam': this.state.error || this.props.error,
      'genericon-checkmark': this.state.success || this.props.success
    } );

    return ( <span className={ genericonClass } style={ feedbackStyles.icon } ref="icon"></span> );
  },

  render: function() {
    var renderedStyles = merge(
      feedbackStyles.base,
      ( this.state.error || this.props.error ) && feedbackStyles.error,
      ( this.state.success || this.props.success ) && feedbackStyles.success
    );

    return (
      <div style={ renderedStyles }>
        { this.getIcon() }
        <p style={ feedbackStyles.message } ref="message">{ this.props.children }</p>
      </div>
    )
  }

} );

// ==== Module Export ====
module.exports = {
  styles: feedbackStyles,
  reactClass: feedbackClass
};
