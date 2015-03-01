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
      <DemoArea introTitle="Standard Buttons" mediaQuery={ this.props.mediaQuery }>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Standard Button</DemoAreaLabel>
          <Button disableEvents={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Standard Button, Hover</DemoAreaLabel>
          <Button hover={ true } disableEvents={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Standard Button, Active</DemoAreaLabel>
          <Button active={ true } disableEvents={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Standard Button, Focus</DemoAreaLabel>
          <Button focus={ true } disableEvents={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Standard Button, Disabled</DemoAreaLabel>
          <Button disabled={ true } disableEvents={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaSecHeading />
        <DemoAreaFlex>
          <DemoAreaLabel demo={ true } mediaQuery={ this.props.mediaQuery }>Demo</DemoAreaLabel>
          <Button>Label</Button>
        </DemoAreaFlex>
      </DemoArea>
    )
  }

} );
