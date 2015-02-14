// ===================================================
// Modal.js
// ----
// Demo section for modals, includes animation example
// ===================================================

// ---- External Dependencies ----
var React = require( 'react' );
var Navigation = require('react-router').Navigation;
var merge = require( '../../lib/merge' );

// ---- Internal Dependencies ----
var DemoArea = require('../demoArea');
var DemoAreaSecHeading = require('../demoAreaSecHeading');
var DemoAreaFlex = require('../demoAreaFlex');
var DemoAreaLabel = require('../demoAreaLabel');
var Button = require( '../button' ).reactClass;

// ---- Styles ----
var modalStyles = require('../modal').styles;
var demoHeadingStyles = {
  marginTop: '14px'
};

// ---- React Class ----
module.exports = React.createClass( {

  displayName: 'ModalsDemo',

  mixins: [ Navigation ],

  handleDemoClick: function() {
    this.transitionTo('/modal');
  },

  render: function() {
    var cancelButtonStyles = merge(
        modalStyles.dialog.paneButton.base,
        this.props.mediaQuery !== 'small' && modalStyles.mediaQueries.paneButtonMedium,
        modalStyles.dialog.paneButton.firstChild
      ),
      acceptButtonStyles = merge(
        modalStyles.dialog.paneButton.base,
        this.props.mediaQuery !== 'small' && modalStyles.mediaQueries.paneButtonMedium,
        modalStyles.dialog.paneButton.lastChild
      );

    return (
      <DemoArea introTitle="Modals" mediaQuery={ this.props.mediaQuery }>
        <div style={ modalStyles.dialog.base }>
          <div style={ modalStyles.dialog.topPaneSection }>
            <h4 style={ modalStyles.dialog.paneHeading }>Header</h4>
            <p style={ modalStyles.dialog.paneBodyText }>Aliquam nec ultricies purus, eu cursus metus. Donec placerat laoreet vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi cursus ornare turpis, nec laoreet ipsum tempor id.</p>
          </div>
          <div style={ modalStyles.dialog.bottomPaneSection }>
            <Button style={ cancelButtonStyles } disableEvents={ true }>Cancel</Button>
            <Button primary={ true } style={ acceptButtonStyles } disableEvents={ true }>Submit</Button>
          </div>
        </div>
        <DemoAreaSecHeading style={ demoHeadingStyles } />
        <DemoAreaFlex>
          <DemoAreaLabel demo={ true } mediaQuery={ this.props.mediaQuery }>Demo</DemoAreaLabel>
          <Button primary={ true } onClick={ this.handleDemoClick }>Show</Button>
        </DemoAreaFlex>
      </DemoArea>
    );
  }

} );
