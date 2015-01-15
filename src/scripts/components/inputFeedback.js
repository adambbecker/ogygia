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
    transformOrigin: 'top'
  },
  error: {
    color: '#FFFFFF',
    backgroundColor: projectVars.colors.error
  },
  success: {
    color: projectVars.colors.success
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
      animationPhase: 'enter'
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
