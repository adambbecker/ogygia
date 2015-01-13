// ========================================================
// FormValidation.js
// ----
// Demo section for error/success cases for form submission
// ========================================================

// ---- External Dependencies ----
var React = require( 'react' );

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
  maxWidth: '304px',
  width: '304px'
};
var demoSubmitStyle = {
  marginLeft: '18px'
}

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'FormValidationDemo',

  render: function() {
    return (
      <DemoArea introTitle="Form Validation" size="medium">
        <DemoAreaFlex>
          <TextInput value="Text Input" error="Your password must be at least 8 characters." containerStyle={ demoContainerStyles } disableEvents={ true } />
          <DemoAreaLabel>Error</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <TextInput value="Text Input" error="Your password is too weak. You can improve it by adding additional uppercase letters, lowercase letters, or numbers." containerStyle={ demoContainerStyles } disableEvents={ true } />
          <DemoAreaLabel>Multi-Line Error</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <TextInput value="Text Input" success="Your password can be saved." containerStyle={ demoContainerStyles } disableEvents={ true } />
          <DemoAreaLabel>Success</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaSecHeading />
        <form>
          <Label required={ true }>Email Address</Label>
          <DemoAreaFlex>
            <TextInput containerStyle={ demoContainerStyles } />
            <Button primary={ true } style={ demoSubmitStyle }>Submit</Button>
          </DemoAreaFlex>
        </form>
      </DemoArea>
    );
  }

} );
