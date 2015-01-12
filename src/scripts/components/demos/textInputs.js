// ===========================================
// TextInputs.js
// ----
// Demo section for the basic text inputs
// ===========================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');
var DemoAreaFlex = require('../demoAreaFlex');
var DemoAreaLabel = require('../demoAreaLabel');
var TextInput = require('../textInput').reactClass;
var Label = require('../label');

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'TextInputsDemo',

  render: function() {
    return (
      <DemoArea introTitle="Text Inputs">
        <DemoAreaFlex>
          <TextInput placeholder="Placeholder Text" disableEvents={ true } />
          <DemoAreaLabel>Default</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <TextInput hover={ true } disableEvents={ true } />
          <DemoAreaLabel>Hover</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <TextInput focus={ true } value="Text Input" disableEvents={ true } />
          <DemoAreaLabel>Active</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <TextInput disabled={ true } disableEvents={ true } />
          <DemoAreaLabel>Disabled</DemoAreaLabel>
        </DemoAreaFlex>
        <Label required={ true }>Label Text</Label>
        <TextInput placeholder="Placeholder Text" disableEvents={ true } />
        <DemoAreaSecHeading primaryText="Demo" secondaryText="Fully enabled example" />
        <TextInput placeholder="Placeholder Text" />
      </DemoArea>
    )
  }

} );
