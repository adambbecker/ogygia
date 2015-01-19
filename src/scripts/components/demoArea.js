// =========================================
// DemoArea.js
// ----
// Area designated for a component's demo
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var projectVars = require( '../vars' );
var demoAreaStyles = {
  base: {
    // float: 'left',
    // width: '100%',
    // padding: '0 56px',
    padding: '0 12px',
    flex: '1 0 100%',
    width: '0',
    marginTop: '56px'
  },
  introTitle: {
    color: '#87A6BC',
    fontSize: '21px',
    fontWeight: '300',
    lineHeight: '28px',
    marginBottom: '22px'
  },
  small: {
    // maxWidth: 408
    flexBasis: '50%'
  },
  medium: {
    // maxWidth: 408 * 2
  },
  large: {
    // maxWidth: 408 * 3
  },
  xLarge: {
    // maxWidth: 408 * 4
  },
  mediaQueries: {
    baseMedium: {
      padding: '0 24px'
    }
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'DemoArea',

  getDefaultProps: function() {
    return {
      size: 'small'
    };
  },

  getBaseStyles: function() {
    var windowWidth = window.innerWidth;

    if ( windowWidth <= projectVars.mediaQueries.medium ) {
      return merge(
        demoAreaStyles.base,
        demoAreaStyles.mediaQueries.baseMedium,
        this.props.size === 'small' && demoAreaStyles.small
      );
    } else {
      return demoAreaStyles.base;
    }
  },

  render: function() {
    return (
      <section style={ this.getBaseStyles() }>
        <h2 style={ demoAreaStyles.introTitle }>{ this.props.introTitle }</h2>
        { this.props.children }
      </section>
    );
  }

} );
