// =========================================
// TextInput.js
// ----
// Main input (type text for now) component
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var projectVars = require( '../vars' );
var inputStyles = {
  base: {
    width: '100%',
    maxWidth: '200px',
    fontFamily: projectVars.fonts.sans,
    fontSize: '16px',
    lineHeight: '24px',
    color: projectVars.colors.textDark,
    padding: '7px 15px',
    backgroundColor: '#F3F6F8',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#C8D7E1'
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
  }
};

// ---- React Class ----
var inputClass = React.createClass( {

  displayName: 'TextInput',

  getInitialState: function() {
    return {
      hover: false,
      focus: false
    };
  },

  handleMouseEnterLeave: function() {
    this.setState( { hover: ! this.state.hover } );
  },

  handleFocusBlur: function() {
    this.setState( { focus: ! this.state.focus } );
  },

  render: function() {
    var styles = merge(
      inputStyles.base,
      ( this.state.hover || this.props.hover ) && inputStyles.hover,
      ( this.state.focus || this.props.focus ) && inputStyles.focus,
      this.props.disabled && inputStyles.disabled
    );

    if ( this.props.disableEvents ) {
      return (
        <input style={ styles } type="text" value={ this.props.value } placeholder={ this.props.placeholder } disabled="disabled" />
      );
    } else {
      return (
        <input style={ styles } type="text" value={ this.props.value } placeholder={ this.props.placeholder } onMouseEnter={ this.handleMouseEnterLeave } onMouseLeave={ this.handleMouseEnterLeave } onFocus={ this.handleFocusBlur } onBlur={ this.handleFocusBlur } />
      );
    }
  }

} );

// ==== Module Export ====
module.exports = {
  styles: inputStyles,
  reactClass: inputClass
};
