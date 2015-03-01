// ================================================
// PostBlueprint.js
// ----
// Hover blueprint styles (makes grid on post card)
// ================================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../../lib/merge' );

// ---- Internal Dependencies ----
// none

// ---- Styles ----
var projectVars = require( '../../vars' );
var lineStyles = {
  base: {
    position: 'absolute',
    backgroundColor: '#F3F6F8'
  },
  horizonal: {
    left: 0,
    right: 0,
    top: '50%',
    height: 1,
    transform: 'scaleX(0)',
    opacity: '0'
  },
  vertical: {
    top: 0,
    bottom: 0,
    left: '50%',
    width: 1,
    transform: 'scaleY(0)',
    opacity: '0'
  },
  emphasis: {
    backgroundColor: projectVars.colors.error
  }
};

// ---- React Class ----
var blueprintLineClass = React.createClass( {

  displayName: 'PostBlueprintLine',

  render: function() {
    var renderedLineStyles = merge(
      lineStyles.base,
      this.props.direction === 'horizonal' && lineStyles.horizonal,
      this.props.direction === 'vertical' && lineStyles.vertical,
      this.props.emphasis && lineStyles.emphasis
    );

    return (
      <div style={ renderedLineStyles }></div>
    );
  }

} );

// ==== Module Export ====
module.exports = blueprintLineClass;
