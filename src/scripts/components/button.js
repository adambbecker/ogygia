// =========================================
// App.js
// ----
// Main app js that gets rendered in main.js
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
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
    padding: '10px 34px'
  },
  baseHover: {
    borderColor: '#A8BECE',
    boxShadow: '0 1px 0 #A8BECE'
  },
  baseActive: {
    borderColor: '#A8BECE',
    boxShadow: '0 1px 0 #A8BECE inset'
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
    borderColor: '#0087BE'
  },
  primaryHover: {
    borderColor: '#005082',
    boxShadow: '0 1px 0 #005082'
  },
  primaryActive: {
    borderColor: '#005082',
    boxShadow: '0 1px 0 #005082 inset'
  },
  primaryDisabled: {
    backgroundColor: '#B2EBF9',
    borderColor: '#6AC9D8',
    boxShadow: '0 1px 0 #6AC9D8'
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'Button',

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

  render: function() {
    var styles = merge(
      buttonStyles.base,
      ( this.state.hover || this.props.hover ) && buttonStyles.baseHover,
      ( this.state.active || this.props.active ) && buttonStyles.baseActive,
      this.props.disabled && buttonStyles.baseDisabled,
      this.props.primary && buttonStyles.primary,
      this.props.primary && ( this.state.hover || this.props.hover ) && buttonStyles.primaryHover,
      this.props.primary && ( this.state.active || this.props.active ) && buttonStyles.primaryActive,
      this.props.primary && this.props.disabled && buttonStyles.primaryDisabled
    );

    if ( this.props.disableEvents ) {
      return (
        <button style={ styles }>{ this.props.children }</button>
      );
    } else {
      return (
        <button style={ styles } onMouseDown={ this.handleMouseUpDown } onMouseUp={ this.handleMouseUpDown } onMouseEnter={ this.handleMouseEnterLeave } onMouseLeave={ this.handleMouseEnterLeave }>{ this.props.children }</button>
      );
    }
  }

} );
