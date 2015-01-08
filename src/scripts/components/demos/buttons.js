// =========================================
// App.js
// ----
// Main app js that gets rendered in main.js
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');
var DemoAreaFlex = require('../demoAreaFlex');
var DemoAreaLabel = require('../demoAreaLabel');
var Button = require('../button');

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'ButtonsDemo',

  render: function() {
    return (
      <DemoArea introTitle="Buttons">
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
          <Button disabled={ true } disableEvents={ true }>Label</Button>
          <DemoAreaLabel>Standard Button, Disabled</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaSecHeading primaryText="Demo" secondaryText="Fully enabled example" />
        <Button>Label</Button>
      </DemoArea>
    )
  }

} );
