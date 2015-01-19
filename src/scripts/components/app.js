// =========================================
// App.js
// ----
// Main app js that gets rendered in main.js
// =========================================

// ---- External Dependencies ----
var React = require('react');
var merge = require( '../lib/merge' );

// ---- Internal Dependencies ----
var MainHeader = require('./mainHeader');
var TypographyDemo = require('./demos/typography').reactClass;
var MetricsDemo = require('./demos/metrics');
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
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 12px 24px',
    overflow: 'hidden'
  },
  mediaQueries: {
    baseMedium: {
      padding: '0 24px 48px'
    }
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'App',

  getDemoStyles: function() {
    var windowWidth = window.innerWidth;

    if ( windowWidth <= projectVars.mediaQueries.medium ) {
      return merge(
        demosStyles.base,
        demosStyles.mediaQueries.baseMedium
      );
    } else {
      return demosStyles.base;
    }
  },

  render: function() {
    return (
      <div style={ appStyles }>
        <MainHeader />
        <div style={ this.getDemoStyles() }>
          <TypographyDemo />
          <MetricsDemo />
          <TextInputsDemo />
          <TextAreasDemo />
          <FormValidationDemo />
          <StandardButtonsDemo />
          <PrimaryButtonsDemo />
        </div>
      </div>
    );
  }

} );
