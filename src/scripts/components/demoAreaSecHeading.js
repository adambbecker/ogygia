// ===================================================
// DemoAreaSecHeading.js
// ----
// Secondary headings to be used inside a demo section
// ===================================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../lib/merge' );

// ---- Styles ----
var headingStyles = {
  base: {
    fontSize: '11px',
    fontWeight: '600',
    lineHeight: '16px',
    textTransform: 'uppercase',
    borderBottom: 'solid 1px #C8D7E1',
    marginBottom: '15px',
    marginTop: '22px'
  },
  main: {
    display: 'inline-block',
    marginRight: '3px',
    color: '#2E4453'
  },
  secondary: {
    display: 'inline-block',
    color: '#87A6BC'
  }
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'DemoAreaSecHeading',

  render: function() {
    var primaryText = ( this.props.primaryText ) ? ( <span style={ headingStyles.main }>{ this.props.primaryText }</span> ) : null,
      secondaryText = ( this.props.secondaryText ) ? ( <span style={ headingStyles.secondary }>{ this.props.secondaryText }</span> ) : null,
      baseStyles = ( this.props.style ) ? merge( headingStyles.base, this.props.style ) : headingStyles.base;

    if ( this.props.firstChild ) {
      baseStyles.marginTop = 0;
    }

    return (
      <h3 style={ baseStyles }>{ primaryText }{ secondaryText }</h3>
    );
  }

} );
