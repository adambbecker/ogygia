// ===========================================
// TextAreas.js
// ----
// Demo section for the basic text areas
// ===========================================

// ---- External Dependencies ----
var React = require( 'react' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');
var DemoAreaFlex = require('../demoAreaFlex');
var DemoAreaLabel = require('../demoAreaLabel');
var TextArea = require('../textArea').reactClass;

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'TextAreasDemo',

  render: function() {
    return (
      <DemoArea introTitle="Textareas" size="medium">
        <DemoAreaFlex>
          <TextArea placeholder="Placeholder Text" disableEvents={ true } />
          <DemoAreaLabel>Default</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <TextArea hover={ true } disableEvents={ true } />
          <DemoAreaLabel>Hover</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <TextArea focus={ true } disableEvents={ true }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit tortor id est porttitor, a viverra quam bibendum. Fusce laoreet metus sit amet.</TextArea>
          <DemoAreaLabel>Active</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <TextArea disabled={ true } disableEvents={ true } placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit tortor id est porttitor, a viverra quam bibendum. Fusce laoreet metus sit amet." />
          <DemoAreaLabel>Disabled</DemoAreaLabel>
        </DemoAreaFlex>
        <DemoAreaSecHeading />
        <DemoAreaFlex>
          <TextArea placeholder="Placeholder Text" />
          <DemoAreaLabel demo={ true }>Demo</DemoAreaLabel>
        </DemoAreaFlex>
      </DemoArea>
    )
  }

} );
