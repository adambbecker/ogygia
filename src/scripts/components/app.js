// =========================================
// App.js
// ----
// Main app js that gets rendered in main.js
// =========================================

// ---- External Dependencies ----
var React = require('react');

// ---- Internal Dependencies ----
var MainHeader = require('./mainHeader');
var StandardButtonsDemo = require('./demos/standardButtons');
var PrimaryButtonsDemo = require('./demos/primaryButtons');
var TextInputsDemo = require('./demos/textInputs');
var TextAreasDemo = require('./demos/textAreas');
var FormValidationDemo = require('./demos/formValidation');

// ---- Styles ----
var projectVars = require( '../vars' );
var appStyles = {
  fontFamily: projectVars.fonts.sans
};
var demosStyles = {
  padding: '0 56px 56px',
  overflow: 'hidden'
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'App',

  render: function() {
    return (
      <div style={ appStyles }>
        <MainHeader />
        <div style={ demosStyles }>
          <StandardButtonsDemo />
          <PrimaryButtonsDemo />
          <TextInputsDemo />
          <TextAreasDemo />
          <FormValidationDemo />
        </div>
      </div>
    );
  }

} );
