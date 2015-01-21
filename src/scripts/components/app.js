// =========================================
// App.js
// ----
// Main app js that gets rendered in main.js
// =========================================

// ---- External Dependencies ----
var React = require('react');
var merge = require( '../lib/merge' );
var debounce = require( 'lodash-node/modern/functions/debounce' );

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

  getInitialState: function() {
    return {
      mediaQuery: this.getCurrentMediaQuery()
    };
  },

  getCurrentMediaQuery: function() {
    var windowWidth = window.innerWidth;

    if ( windowWidth > projectVars.mediaQueries.small && windowWidth <= projectVars.mediaQueries.medium ) {
      return 'medium';
    } else {
      return 'small';
    }
  },

  getDemoStyles: function() {
    if ( this.state.mediaQuery === 'medium' ) {
      return merge(
        demosStyles.base,
        demosStyles.mediaQueries.baseMedium
      );
    } else {
      return demosStyles.base;
    }
  },

  componentDidMount: function() {
    this.debouncedAfterResize = debounce( this.afterResize, 300 );
    window.addEventListener( 'resize', this.debouncedAfterResize );
  },

  componentWillUnmount: function() {
    window.removeEventListener( 'resize', this.debouncedAfterResize );
  },

  afterResize: function() {
    var currentMediaQuery = this.getCurrentMediaQuery();

    if ( this.state.mediaQuery !== currentMediaQuery ) {
      this.setState( {
        mediaQuery: currentMediaQuery
      } );
    }
  },

  render: function() {
    return (
      <div style={ appStyles }>
        <MainHeader mediaQuery={ this.state.mediaQuery } />
        <div style={ this.getDemoStyles() }>
          <TypographyDemo mediaQuery={ this.state.mediaQuery } />
          <MetricsDemo mediaQuery={ this.state.mediaQuery } />
          <TextInputsDemo mediaQuery={ this.state.mediaQuery } />
          <TextAreasDemo mediaQuery={ this.state.mediaQuery } />
          <FormValidationDemo mediaQuery={ this.state.mediaQuery } />
          <StandardButtonsDemo mediaQuery={ this.state.mediaQuery } />
          <PrimaryButtonsDemo mediaQuery={ this.state.mediaQuery } />
        </div>
      </div>
    );
  }

} );
