// ========================================================
// FormValidation.js
// ----
// Demo section for error/success cases for form submission
// ========================================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../../lib/merge' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');
var DemoAreaFlex = require('../demoAreaFlex');
var DemoAreaLabel = require('../demoAreaLabel');
var TextInput = require('../textInput').reactClass;
var Button = require('../button').reactClass;
var Label = require('../label');

// ---- Styles ----
var demoContainerStyles = {
  display: 'inline-block',
  maxWidth: '304px',
  width: '304px'
};
var demoSubmitStyles = {
  base: {
    display: 'inline-block',
    marginTop: '6px',
    verticalAlign: 'top'
  },
  mediaQueries: {
    baseMedium: {
      marginTop: '0',
      marginLeft: '18px'
    }
  }
}

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'FormValidationDemo',

  getDefaultProps: function() {
    return {
      errorMessage: 'Invalid email address.',
      successMessage: 'Your email has been updated.'
    }
  },

  handleSubmit: function( e ) {
    e.preventDefault();

    var isValidEmail = this.validateEmail( this.refs.emailTextContainer.state.value );

    this.refs.emailTextContainer.setState( {
      error: ( ! isValidEmail ) ? this.props.errorMessage : null,
      success: ( isValidEmail ) ? this.props.successMessage : null
    } );
  },

  validateEmail: function( email ) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( email );
  },

  render: function() {
    var renderedDemoSubmitStyles = merge(
      demoSubmitStyles.base,
      this.props.mediaQuery !== 'small' && demoSubmitStyles.mediaQueries.baseMedium
    );

    return (
      <DemoArea introTitle="Form Validation" size="medium" mediaQuery={ this.props.mediaQuery }>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Error</DemoAreaLabel>
          <TextInput value="Text Input" error="Your password must be at least 8 characters." containerStyle={ demoContainerStyles } disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Multi-Line Error</DemoAreaLabel>
          <TextInput value="Text Input" error="Your password is too weak. You can improve it by adding additional uppercase letters, lowercase letters, or numbers." containerStyle={ demoContainerStyles } disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Success</DemoAreaLabel>
          <TextInput value="Text Input" success="Your password can be saved." containerStyle={ demoContainerStyles } disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaSecHeading />
        <form onSubmit={ this.handleSubmit }>
          <Label required={ true }>Email Address</Label>
          <TextInput containerStyle={ demoContainerStyles } ref="emailTextContainer" mediaQuery={ this.props.mediaQuery } />
          <Button primary={ true } style={ renderedDemoSubmitStyles }>Submit</Button>
        </form>
      </DemoArea>
    );
  }

} );
