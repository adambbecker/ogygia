// =========================================
// DemoArea.js
// ----
// Area designated for a component's demo
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var demoAreaStyles = {
  base: {
    float: 'left',
    width: '100%',
    padding: '0 56px',
    marginTop: '92px'
  },
  introTitle: {
    color: '#87A6BC',
    fontSize: '21px',
    fontWeight: '300',
    lineHeight: '28px',
    marginBottom: '22px'
  },
  small: {
    maxWidth: 408
  },
  medium: {
    maxWidth: 408 * 2
  },
  large: {
    maxWidth: 408 * 3
  },
  xLarge: {
    maxWidth: 408 * 4
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

  render: function() {
    return (
      <section style={ merge( demoAreaStyles.base, demoAreaStyles[ this.props.size ] ) }>
        <h2 style={ demoAreaStyles.introTitle }>{ this.props.introTitle }</h2>
        { this.props.children }
      </section>
    );
  }

} );
