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
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Primary Button</DemoAreaLabel>
          <Button disableEvents={ true } primary={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Primary Button, Hover</DemoAreaLabel>
          <Button hover={ true } disableEvents={ true } primary={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Primary Button, Active</DemoAreaLabel>
          <Button active={ true } disableEvents={ true } primary={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Primary Button, Focus</DemoAreaLabel>
          <Button focus={ true } disableEvents={ true } primary={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Primary Button, Disabled</DemoAreaLabel>
          <Button disabled={ true } disableEvents={ true } primary={ true }>Label</Button>
        </DemoAreaFlex>
        <DemoAreaSecHeading />
        <DemoAreaFlex>
          <DemoAreaLabel demo={ true } mediaQuery={ this.props.mediaQuery }>Demo</DemoAreaLabel>
          <Button primary={ true }>Label</Button>
        </DemoAreaFlex>
      </DemoArea>
    )
  }

} );
