// ===========================================
// PrimaryButtons.js
// ----
// Demo section for the primary styled buttons
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

  displayName: 'PrimaryButtonsDemo',

  render: function() {
    return (
      <DemoArea introTitle="Primary Buttons" mediaQuery={ this.props.mediaQuery }>
        <DemoAreaFlex>
          <Button disableEvents={ true } primary={ true }>Label</Button>
          <DemoAreaLabel>Primary Button</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <Button hover={ true } disableEvents={ true } primary={ true }>Label</Button>
          <DemoAreaLabel>Primary Button, Hover</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <Button active={ true } disableEvents={ true } primary={ true }>Label</Button>
          <DemoAreaLabel>Primary Button, Active</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <Button focus={ true } disableEvents={ true } primary={ true }>Label</Button>
          <DemoAreaLabel>Primary Button, Focus</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <Button disabled={ true } disableEvents={ true } primary={ true }>Label</Button>
          <DemoAreaLabel>Primary Button, Disabled</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaSecHeading />
        <DemoAreaFlex>
          <Button primary={ true }>Label</Button>
          <DemoAreaLabel demo={ true }>Demo</DemoAreaLabel>
        </DemoAreaFlex>
      </DemoArea>
    )
  }

} );
