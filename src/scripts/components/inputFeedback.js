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
    padding: '10px 15px'
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

  getInitialState: function() {
    return {
      error: false
    }
  },

  getIcon: function() {
    var genericonClass = React.addons.classSet( {
      'genericon': true,
      'genericon-spam': this.state.error || this.props.error,
      'genericon-checkmark': this.state.success || this.props.success
    } );

    return ( <span className={ genericonClass } style={ feedbackStyles.icon }></span> );
  },

  render: function() {
    var styles = merge(
      feedbackStyles.base,
      ( this.state.error || this.props.error ) && feedbackStyles.error,
      ( this.state.success || this.props.success ) && feedbackStyles.success
    );

    return (
      <div style={ styles }>
        { this.getIcon() }
        <p style={ feedbackStyles.message }>{ this.props.children }</p>
      </div>
    )
  }

} );

// ==== Module Export ====
module.exports = {
  styles: feedbackStyles,
  reactClass: feedbackClass
};
