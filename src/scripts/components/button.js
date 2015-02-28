// =========================================
// Button.js
// ----
// Main button component
// =========================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../lib/react-with-addons' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var projectVars = require( '../vars' );
var buttonStyles = {
  base: {
    display: 'inline-block',
    fontFamily: projectVars.fonts.sans,
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '18px',
    color: '#2E4453',
    textAlign: 'center',
    backgroundColor: '#F3F6F8',
    border: 'solid 1px #C8D7E1',
    borderRadius: 3,
    boxShadow: '0 1px 0 #C8D7E1',
    padding: '10px 34px',
    transition: 'background-color 0.2s ease'
  },
  baseHover: {
    borderColor: '#A8BECE',
    boxShadow: '0 1px 0 #A8BECE'
  },
  baseActive: {
    borderColor: '#A8BECE',
    boxShadow: '0 1px 0 #A8BECE inset'
  },
  baseFocus: {
    borderColor: projectVars.colors.blueMedium,
    boxShadow: '0 1px 0 ' + projectVars.colors.blueMedium + ', 0 0 0 2px #78DCFA'
  },
  baseDisabled: {
    backgroundColor: '#FFFFFF',
    color: '#E9EFF3',
    borderColor: '#E9EFF3',
    boxShadow: '0 1px 0 #E9EFF3'
  },
  primary: {
    color: '#FFFFFF',
    backgroundColor: projectVars.colors.blueMedium,
    borderColor: '#0087BE',
    boxShadow: '0 1px 0 #0087BE'
  },
  primaryHover: {
    borderColor: '#005082',
    boxShadow: '0 1px 0 #005082'
  },
  primaryActive: {
    borderColor: '#005082',
    boxShadow: '0 1px 0 #005082 inset'
  },
  primaryFocus: {
    borderColor: '#005082',
    boxShadow: '0 1px 0 #005082, 0 0 0 2px #78DCFA'
  },
  primaryDisabled: {
    backgroundColor: '#B2EBF9',
    borderColor: '#6AC9D8',
    boxShadow: '0 1px 0 #6AC9D8'
  }
};

// ---- React Class ----
var buttonClass = React.createClass( {

  displayName: 'Button',

  getDefaultProps: function() {
    return {
      type: 'submit'
    }
  },

  getInitialState: function() {
    return {
      active: false
    };
  },

  handleMouseUpDown: function() {
    this.setState( { active: ! this.state.active } );
  },

  handleMouseEnterLeave: function() {
    this.setState( { hover: ! this.state.hover } );
  },

  handleFocusBlur: function() {
    // Turing off focus handler because of odd interaction with active
    // this.setState( { focus: ! this.state.focus } );
  },

  render: function() {
    var styles = merge(
      buttonStyles.base,
      ( this.state.hover || this.props.hover ) && buttonStyles.baseHover,
      ( this.state.focus || this.props.focus ) && buttonStyles.baseFocus,
      ( this.state.active || this.props.active ) && buttonStyles.baseActive,
      this.props.disabled && buttonStyles.baseDisabled,
      this.props.primary && buttonStyles.primary,
      this.props.primary && ( this.state.hover || this.props.hover ) && buttonStyles.primaryHover,
      this.props.primary && ( this.state.focus || this.props.focus ) && buttonStyles.primaryFocus,
      this.props.primary && ( this.state.active || this.props.active ) && buttonStyles.primaryActive,
      this.props.primary && this.props.disabled && buttonStyles.primaryDisabled,
      this.props.style
    );

    if ( this.props.disableEvents ) {
      return (
        <button style={ styles } type={ this.props.type } disabled="disabled">{ this.props.children }</button>
      );
    } else {
      return (
        <button style={ styles } type={ this.props.type } onMouseDown={ this.handleMouseUpDown } onMouseUp={ this.handleMouseUpDown } onMouseEnter={ this.handleMouseEnterLeave } onMouseLeave={ this.handleMouseEnterLeave } onFocus={ this.handleFocusBlur } onBlur={ this.handleFocusBlur } onClick={ this.props.onClick }>{ this.props.children }</button>
      );
    }
  }

} );

// ==== Module Export ====
module.exports = {
  styles: buttonStyles,
  reactClass: buttonClass
};
