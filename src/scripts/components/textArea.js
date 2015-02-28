// =========================================
// TextArea.js
// ----
// Main textarea component
// =========================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../lib/react-with-addons' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var inputStyles = require( './textInput' ).styles;
var textAreaStyles = {
  mediaQueries: {
    baseMedium: {
      maxWidth: '80%'
    }
  }
};

// ---- React Class ----
var textAreaClass = React.createClass( {

  displayName: 'TextArea',

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
      textAreaStyles.base,
      ( this.state.hover || this.props.hover ) && inputStyles.hover,
      ( this.state.focus || this.props.focus ) && inputStyles.focus,
      this.props.disabled && inputStyles.disabled,
      this.props.mediaQuery !== 'small' && textAreaStyles.mediaQueries.baseMedium
    );

    if ( this.props.disableEvents ) {
      return (
        <textarea style={ styles } rows="3" placeholder={ this.props.placeholder } disabled="disabled">{ this.props.children }</textarea>
      );
    } else {
      return (
        <textarea style={ styles } rows="3" placeholder={ this.props.placeholder } onMouseEnter={ this.handleMouseEnterLeave } onMouseLeave={ this.handleMouseEnterLeave } onFocus={ this.handleFocusBlur } onBlur={ this.handleFocusBlur }>{ this.props.children }</textarea>
      );
    }
  }

} );

// ==== Module Export ====
module.exports = {
  styles: merge( inputStyles, textAreaStyles ),
  reactClass: textAreaClass
};
