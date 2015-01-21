// =========================================
// TextInput.js
// ----
// Main input (type text for now) component
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../lib/merge' );

// ---- Internal Dependencies ----
var InputFeedback = require( './inputFeedback' ).reactClass;

// ---- Styles ----
var projectVars = require( '../vars' );
var inputStyles = {
  base: {
    width: '100%',
    fontFamily: projectVars.fonts.sans,
    fontSize: '16px',
    lineHeight: '24px',
    color: projectVars.colors.textDark,
    padding: '7px 15px',
    backgroundColor: '#F3F6F8',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#C8D7E1',
    transition: 'border-color 0.2s cubic-bezier(.22,.67,.52,.92)'
  },
  hover: {
    borderColor: '#A8BECE'
  },
  focus: {
    borderColor: '#78DCFA'
  },
  disabled: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E9EFF3',
    color: '#E9EFF3'
  },
  error: {
    borderColor: projectVars.colors.error
  }
};
var demoContainerStyles = {
  base: {
    width: '100%'
  },
  mediaQueries: {
    baseMedium: {
      maxWidth: '200px'
    }
  }
};

// ---- React Class ----
var inputClass = React.createClass( {

  displayName: 'TextInput',

  getDefaultProps: function() {
    return {
      disableEvents: false
    };
  },

  getInitialState: function() {
    return {
      hover: false,
      focus: false,
      error: this.props.error,
      success: this.props.success,
      value: this.props.value
    };
  },

  getFeedback: function() {
    if ( this.state.error ) {
      return ( <InputFeedback error={ this.state.error } animate={ ! this.props.disableEvents }>{ this.state.error }</InputFeedback> );
    } else if ( this.state.success ) {
      return ( <InputFeedback success={ this.state.success } animate={ ! this.props.disableEvents }>{ this.state.success }</InputFeedback> );
    }
  },

  handleMouseEnterLeave: function() {
    this.setState( { hover: ! this.state.hover } );
  },

  handleFocusBlur: function() {
    this.setState( { focus: ! this.state.focus } );
  },

  handleChange: function( e ) {
    this.setState( { value: e.target.value } );
  },

  render: function() {
    var value = this.state.value;
    var renderedInputStyles = merge(
      inputStyles.base,
      ( this.state.hover || this.props.hover ) && inputStyles.hover,
      ( this.state.focus || this.props.focus ) && inputStyles.focus,
      this.props.disabled && inputStyles.disabled,
      ( this.state.error || this.props.error ) && inputStyles.error
    );
    var renderedContainerStyles = merge(
      demoContainerStyles.base,
      this.props.mediaQuery !== 'small' && demoContainerStyles.mediaQueries.baseMedium,
      this.props.containerStyle
    );

    if ( this.props.disableEvents ) {
      return (
        <div style={ renderedContainerStyles }>
          <input style={ renderedInputStyles } type="text" value={ value } placeholder={ this.props.placeholder } disabled="disabled" />
          { this.getFeedback() }
        </div>
      );
    } else {
      return (
        <div style={ renderedContainerStyles }>
          <input style={ renderedInputStyles } ref="textInput" type="text" value={ value } placeholder={ this.props.placeholder } onChange={ this.handleChange } onMouseEnter={ this.handleMouseEnterLeave } onMouseLeave={ this.handleMouseEnterLeave } onFocus={ this.handleFocusBlur } onBlur={ this.handleFocusBlur } />
          { this.getFeedback() }
        </div>
      );
    }
  }

} );

// ==== Module Export ====
module.exports = {
  styles: inputStyles,
  reactClass: inputClass
};
