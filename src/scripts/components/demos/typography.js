// =============================================
// Typography.js
// ----
// Demo section for different typography options
// =============================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../../lib/react-with-addons' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');

// ---- Styles ----
var projectVars = require( '../../vars' );
var typographyStyles = {
  readerPostTitle: {
    fontFamily: projectVars.fonts.serif,
    color: projectVars.colors.textDark,
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '40px',
    marginBottom: '34px'
  },
  managePostTitle: {
    fontFamily: projectVars.fonts.serif,
    color: projectVars.colors.textDark,
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '32px',
    marginBottom: '36px'
  },
  headers: {
    fontFamily: projectVars.fonts.sans,
    color: projectVars.colors.textLight,
    fontWeight: '300',
    fontSize: '21px',
    lineHeight: '24px',
    marginBottom: '40px'
  },
  body: {
    fontFamily: projectVars.fonts.sans,
    color: projectVars.colors.textDark,
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '40px'
  },
  label: {
    fontFamily: projectVars.fonts.sans,
    color: projectVars.colors.textDark,
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    marginBottom: '40px'
  },
  caption: {
    fontFamily: projectVars.fonts.sans,
    color: projectVars.colors.textLight,
    fontWeight: '600',
    fontSize: '11px',
    lineHeight: '16px',
    marginBottom: '40px',
    textTransform: 'uppercase'
  }
};

// ---- React Class ----
var typographyClass = React.createClass( {

  displayName: 'TypographyDemo',

  render: function() {
    return (
      <DemoArea introTitle="Typography" size="medium" mediaQuery={ this.props.mediaQuery }>
        <DemoAreaSecHeading primaryText="Reader Post Titles" secondaryText="32PX/40PX MERRIWEATHER SEMIBOLD" firstChild={ true } />
        <h1 style={ typographyStyles.readerPostTitle }>The quick brown fox jumps over a lazy dog</h1>
        <DemoAreaSecHeading primaryText="Manage Post Titles" secondaryText="24PX/32PX MERRIWEATHER SEMIBOLD" />
        <h2 style={ typographyStyles.managePostTitle }>Pack my box with five dozen liquor jugs</h2>
        <DemoAreaSecHeading primaryText="Headers" secondaryText="21PX/24PX OPEN SANS LIGHT" />
        <h3 style={ typographyStyles.headers }>Posts and Pages</h3>
        <DemoAreaSecHeading primaryText="Body Text" secondaryText="16PX/24PX OPEN SANS REGULAR" />
        <p style={ typographyStyles.body }>“A man who would letterspace lower case would steal sheep,” Frederic Goudy liked to say. The reason for not letterspacing lower case is that it hampers legibility. But there are some lowercase alphabets to which this principle…</p>
        <DemoAreaSecHeading primaryText="Labels" secondaryText="14PX/18PX OPEN SANS SEMIBOLD" />
        <p style={ typographyStyles.label }>Site Description</p>
        <DemoAreaSecHeading primaryText="Captions" secondaryText="11PX/16PX OPEN SANS SEMIBOLD CAPITALS" />
        <p style={ typographyStyles.caption }>View per Page</p>
      </DemoArea>
    );
  }

} );

// ==== Module Export ====
module.exports = {
  styles: typographyStyles,
  reactClass: typographyClass
};
