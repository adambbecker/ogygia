// ===========================================
// StandardButtons.js
// ----
// Demo section for the standard styled buttons
// ===========================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');
var DemoAreaFlex = require('../demoAreaFlex');
var DemoAreaLabel = require('../demoAreaLabel');
var Button = require('../button').reactClass;

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'StandardButtonsDemo',

  render: function() {
    return (
      <DemoArea introTitle="Standard Buttons">
        <DemoAreaFlex>
          <Button disableEvents={ true }>Label</Button>
          <DemoAreaLabel>Standard Button</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <Button hover={ true } disableEvents={ true }>Label</Button>
          <DemoAreaLabel>Standard Button, Hover</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <Button active={ true } disableEvents={ true }>Label</Button>
          <DemoAreaLabel>Standard Button, Active</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <Button focus={ true } disableEvents={ true }>Label</Button>
          <DemoAreaLabel>Standard Button, Focus</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <Button disabled={ true } disableEvents={ true }>Label</Button>
          <DemoAreaLabel>Standard Button, Disabled</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaSecHeading />
        <DemoAreaFlex>
          <Button>Label</Button>
          <DemoAreaLabel demo={ true }>Demo</DemoAreaLabel>
        </DemoAreaFlex>
      </DemoArea>
    )
  }

} );
