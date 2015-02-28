// ===========================================
// TextAreas.js
// ----
// Demo section for the basic text areas
// ===========================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../../lib/react-with-addons' );

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
      <DemoArea introTitle="Textareas" size="medium" mediaQuery={ this.props.mediaQuery }>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Default</DemoAreaLabel>
          <TextArea placeholder="Placeholder Text" disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Hover</DemoAreaLabel>
          <TextArea hover={ true } disableEvents={ true } mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Active</DemoAreaLabel>
          <TextArea focus={ true } disableEvents={ true } mediaQuery={ this.props.mediaQuery }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit tortor id est porttitor, a viverra quam bibendum. Fusce laoreet metus sit amet.</TextArea>
        </DemoAreaFlex>
        <DemoAreaFlex>
          <DemoAreaLabel mediaQuery={ this.props.mediaQuery }>Disabled</DemoAreaLabel>
          <TextArea disabled={ true } disableEvents={ true } placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit tortor id est porttitor, a viverra quam bibendum. Fusce laoreet metus sit amet." mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
        <DemoAreaSecHeading />
        <DemoAreaFlex>
          <DemoAreaLabel demo={ true } mediaQuery={ this.props.mediaQuery }>Demo</DemoAreaLabel>
          <TextArea placeholder="Placeholder Text" mediaQuery={ this.props.mediaQuery } />
        </DemoAreaFlex>
      </DemoArea>
    )
  }

} );
