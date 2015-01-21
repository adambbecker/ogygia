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

// ---- Styles ----
var demoHeadingStyles = {
  marginTop: '14px'
}

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'TextInputsDemo',

  render: function() {
    return (
      <DemoArea introTitle="Text Inputs" mediaQuery={ this.props.mediaQuery }>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Default</DemoAreaLabel>
          <TextInput placeholder="Placeholder Text" disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Hover</DemoAreaLabel>
          <TextInput hover={ true } disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Active</DemoAreaLabel>
          <TextInput focus={ true } value="Text Input" disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Disabled</DemoAreaLabel>
          <TextInput disabled={ true } disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <Label required={ true }>Label Text</Label>
        <TextInput placeholder="Placeholder Text" disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        <DemoAreaSecHeading style={ demoHeadingStyles } />
        <DemoAreaFlex>
          <DemoAreaLabel demo={ true } mediaQuery={ this.props.mediaQuery }>Demo</DemoAreaLabel>
          <TextInput placeholder="Placeholder Text" mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
      </DemoArea>
    )
  }

} );
