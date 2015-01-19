// ================================================
// PostBlueprint.js
// ----
// Hover blueprint styles (makes grid on post card)
// ================================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../../lib/merge' );

// ---- Internal Dependencies ----
var PostBlueprintLine = require( './postBlueprintLine' );

// ---- Styles ----
var blueprintStyles = {
  base: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: '-1'
  }
};

// ---- React Class ----
var blueprintClass = React.createClass( {

  displayName: 'PostBlueprint',

  getInitialState: function() {
    return {
      horizonalLines: false,
      verticalLines: false
    };
  },

  // horizontalAnimationsIn: {},
  // horizontalAnimationsOut: {},
  // verticalAnimationsIn: {},
  // verticalAnimationsOut: {},

  componentDidMount: function() {
    this.animationHorizonatalsIn = new AnimationGroup( [] );
    this.animationVerticalsIn = new AnimationGroup( [] );

    this.animationHorizonatalsOut = new AnimationGroup( [] );
    this.animationVerticalsOut = new AnimationGroup( [] );

    this.getCurrentSize();
  },

  componentDidUpdate: function( prevProps, prevState ) {
    if ( this.state.horizonalLines !== prevState.horizonalLines || this.state.verticalLines !== prevState.verticalLines ) {
      this.attachAnimations();
    }
  },

  attachAnimations: function() {
    var horizonalHalf = parseInt( this.state.horizonalLines / 2 ),
      verticalHalf = parseInt( this.state.verticalLines / 2 ),
      h, v;

    // horizonal
    for ( h = 0; h < this.state.horizonalLines; h++ ) {
      var refKey = 'horizonal-' + h;
      var refDOMNode = this.refs[ refKey ].getDOMNode();

      var endTransformPos = ( horizonalHalf - h ) * -8;

      // in
      this.animationHorizonatalsIn.children[ h ] = new Animation(
        refDOMNode,
        [
          {
            transform: 'scaleX(0)',
            opacity: '0'
          },
          {
            transform: 'scaleX(1) translateY(' + endTransformPos + 'px)',
            opacity: '1'
          }
        ],
        {
          duration: 400 + ( Math.abs( horizonalHalf - h ) * 50 ),
          easing: 'cubic-bezier(.22,.67,.52,.92)',
          fill: 'both'
        }
      );

      // out
      this.animationHorizonatalsOut.children[ h ] = new Animation(
        refDOMNode,
        [
          {
            transform: 'scaleX(1) translateY(' + endTransformPos + 'px)',
            opacity: '1'
          },
          {
            transform: 'scaleX(0) translateY(' + endTransformPos + 'px)',
            opacity: '0'
          }
        ],
        {
          duration: 400 + ( Math.abs( h - horizonalHalf ) * 50 ),
          easing: 'cubic-bezier(.22,.67,.52,.92)',
          fill: 'both'
        }
      );
    }

    // vertical
    for ( v = 0; v < this.state.verticalLines; v++ ) {
      var refKey = 'vertical-' + v;
      var refDOMNode = this.refs[ refKey ].getDOMNode();

      var endTransformPos = ( verticalHalf - v ) * -8;

      // in
      this.animationVerticalsIn.children[ v ] = new Animation(
        refDOMNode,
        [
          {
            transform: 'scaleY(0)',
            opacity: '0'
          },
          {
            transform: 'scaleY(1) translateX(' + endTransformPos + 'px)',
            opacity: '1'
          }
        ],
        {
          duration: 400 + ( Math.abs( verticalHalf - v ) * 50 ),
          easing: 'cubic-bezier(.22,.67,.52,.92)',
          fill: 'both'
        }
      );

      // out
      this.animationVerticalsOut.children[ v ] = new Animation(
        refDOMNode,
        [
          {
            transform: 'scaleY(1) translateX(' + endTransformPos + 'px)',
            opacity: '1'
          },
          {
            transform: 'scaleY(0) translateX(' + endTransformPos + 'px)',
            opacity: '0'
          }
        ],
        {
          duration: 400 + ( Math.abs( v - verticalHalf ) * 50 ),
          easing: 'cubic-bezier(.22,.67,.52,.92)',
          fill: 'both'
        }
      );
    }

    // ---- emphasis ----

    // horizonal (top)
    var horizonalEmphasisTopDOM = this.refs[ 'emphasis-horizontal-top' ].getDOMNode();
    var horizonalEmphasisTopStopPos = ( horizonalHalf - 2 ) * -8;
    // horizonal (top) - in
    var horizonalEmphasisTopIn = new AnimationSequence( [
        new Animation(
          horizonalEmphasisTopDOM,
          [
            {
              transform: 'scaleX(0)',
              opacity: '0'
            },
            {
              transform: 'scaleX(1)',
              opacity: '0.3'
            }
          ],
          {
            duration: 200,
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        ),
        new Animation(
          horizonalEmphasisTopDOM,
          [
            {
              transform: 'scaleX(1)',
              opacity: '0.3'
            },
            {
              transform: 'scaleX(1) translateY(' + horizonalEmphasisTopStopPos + 'px)',
              opacity: '1'
            }
          ],
          {
            duration: 400 + ( Math.abs( horizonalHalf - 2 ) * 50 ),
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        )
      ] );
      // horizonal (top) - out
      var horizonalEmphasisTopOut = new AnimationSequence( [
        new Animation(
          horizonalEmphasisTopDOM,
          [
            {
              transform: 'scaleX(1) translateY(' + horizonalEmphasisTopStopPos + 'px)',
              opacity: '1'
            },
            {
              transform: 'scaleX(1) translateY(' + horizonalEmphasisTopStopPos + 'px)',
              opacity: '0.3'
            }
          ],
          {
            duration: 200,
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        ),
        new Animation(
          horizonalEmphasisTopDOM,
          [
            {
              transform: 'scaleX(1) translateY(' + horizonalEmphasisTopStopPos + 'px)',
              opacity: '0.3'
            },
            {
              transform: 'scaleX(0) translateY(' + ( horizonalHalf * -8 ) + 'px)',
              opacity: '0'
            }
          ],
          {
            duration: 400,
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        )
      ] );

      // horizonal (bottom)
      var horizonalEmphasisBottomDOM = this.refs[ 'emphasis-horizontal-bottom' ].getDOMNode();
      var horizonalEmphasisBottomStopPos = ( horizonalHalf - 2 ) * 8;
      // horizonal (bottom) - in
      var horizonalEmphasisBottomIn = new AnimationSequence( [
          new Animation(
            horizonalEmphasisBottomDOM,
            [
              {
                transform: 'scaleX(0)',
                opacity: '0'
              },
              {
                transform: 'scaleX(1)',
                opacity: '0.3'
              }
            ],
            {
              duration: 200,
              easing: 'cubic-bezier(.22,.67,.52,.92)',
              fill: 'both'
            }
          ),
          new Animation(
            horizonalEmphasisBottomDOM,
            [
              {
                transform: 'scaleX(1)',
                opacity: '0.3'
              },
              {
                transform: 'scaleX(1) translateY(' + horizonalEmphasisBottomStopPos + 'px)',
                opacity: '1'
              }
            ],
            {
              duration: 400 + ( Math.abs( horizonalHalf - 2 ) * 50 ),
              easing: 'cubic-bezier(.22,.67,.52,.92)',
              fill: 'both'
            }
          )
      ] );
      // horizonal (bottom) - out
      var horizonalEmphasisBottomOut = new AnimationSequence( [
        new Animation(
          horizonalEmphasisBottomDOM,
          [
            {
              transform: 'scaleX(1) translateY(' + horizonalEmphasisBottomStopPos + 'px)',
              opacity: '1'
            },
            {
              transform: 'scaleX(1) translateY(' + horizonalEmphasisBottomStopPos + 'px)',
              opacity: '0.3'
            }
          ],
          {
            duration: 200,
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        ),
        new Animation(
          horizonalEmphasisBottomDOM,
          [
            {
              transform: 'scaleX(1) translateY(' + horizonalEmphasisBottomStopPos + 'px)',
              opacity: '0.3'
            },
            {
              transform: 'scaleX(0) translateY(' + ( horizonalHalf * 8 ) + 'px)',
              opacity: '0'
            }
          ],
          {
            duration: 400,
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        )
      ] );

      // vertical (top)
      var verticalEmphasisTopDOM = this.refs[ 'emphasis-vertical-top' ].getDOMNode();
      var verticalEmphasisTopStopPos = ( verticalHalf - 1 ) * -8;
      // vertical (top) - in
      var verticalEmphasisTopIn = new AnimationSequence( [
          new Animation(
            verticalEmphasisTopDOM,
            [
              {
                transform: 'scaleY(0)',
                opacity: '0'
              },
              {
                transform: 'scaleY(1)',
                opacity: '0.3'
              }
              ],
            {
              duration: 200,
              easing: 'cubic-bezier(.22,.67,.52,.92)',
              fill: 'both'
            }
          ),
          new Animation(
            verticalEmphasisTopDOM,
            [
              {
                transform: 'scaleY(1)',
                opacity: '0.3'
              },
              {
                transform: 'scaleY(1) translateX(' + verticalEmphasisTopStopPos + 'px)',
                opacity: '1'
              }
            ],
            {
              duration: 400 + ( Math.abs( verticalHalf - 1 ) * 50 ),
              easing: 'cubic-bezier(.22,.67,.52,.92)',
              fill: 'both'
            }
          )
        ] );
        // vertical (top) - out
        var verticalEmphasisTopOut = new AnimationSequence( [
          new Animation(
            verticalEmphasisTopDOM,
            [
              {
                transform: 'scaleY(1) translateX(' + verticalEmphasisTopStopPos + 'px)',
                opacity: '1'
              },
              {
                transform: 'scaleY(1) translateX(' + verticalEmphasisTopStopPos + 'px)',
                opacity: '0.3'
              }
            ],
            {
              duration: 200,
              easing: 'cubic-bezier(.22,.67,.52,.92)',
              fill: 'both'
            }
          ),
          new Animation(
            verticalEmphasisTopDOM,
            [
              {
                transform: 'scaleY(1) translateX(' + verticalEmphasisTopStopPos + 'px)',
                opacity: '0.3'
              },
              {
                transform: 'scaleY(0) translateX(' + ( verticalHalf * -8 ) + 'px)',
                opacity: '0'
              }
            ],
            {
              duration: 400,
              easing: 'cubic-bezier(.22,.67,.52,.92)',
              fill: 'both'
            }
          )
        ] );

      // vertical (bottom)
      var verticalEmphasisBottomDOM = this.refs[ 'emphasis-vertical-bottom' ].getDOMNode();
      var verticalEmphasisBottomStopPos = ( verticalHalf - 1 ) * 8;
      // vertical (bottom) - in
      var verticalEmphasisBottomIn = new AnimationSequence( [
        new Animation(
          verticalEmphasisBottomDOM,
          [
            {
              transform: 'scaleY(0)',
              opacity: '0'
            },
            {
              transform: 'scaleY(1)',
              opacity: '0.3'
            }
          ],
          {
            duration: 200,
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        ),
        new Animation(
          verticalEmphasisBottomDOM,
          [
            {
              transform: 'scaleY(1)',
              opacity: '0.3'
            },
            {
              transform: 'scaleY(1) translateX(' + verticalEmphasisBottomStopPos + 'px)',
              opacity: '1'
            }
          ],
          {
            duration: 400 + ( Math.abs( verticalHalf - 1 ) * 50 ),
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        )
      ] );
      // vertical (bottom) - Out
      var verticalEmphasisBottomOut = new AnimationSequence( [
        new Animation(
          verticalEmphasisBottomDOM,
          [
            {
              transform: 'scaleY(1) translateX(' + verticalEmphasisBottomStopPos + 'px)',
              opacity: '1'
            },
            {
              transform: 'scaleY(1) translateX(' + verticalEmphasisBottomStopPos + 'px)',
              opacity: '0.3'
            }
            ],
          {
            duration: 200,
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        ),
        new Animation(
          verticalEmphasisBottomDOM,
          [
            {
              transform: 'scaleY(1) translateX(' + verticalEmphasisBottomStopPos + 'px)',
              opacity: '0.3'
            },
            {
              transform: 'scaleY(0) translateX(' + ( verticalHalf * 8 ) + 'px)',
              opacity: '0'
            }
          ],
          {
            duration: 400,
            easing: 'cubic-bezier(.22,.67,.52,.92)',
            fill: 'both'
          }
        )
      ] );

    var gridAnimationIn = new AnimationGroup( [ this.animationHorizonatalsIn, this.animationVerticalsIn ] );
    var gridAnimationOut = new AnimationGroup( [ this.animationHorizonatalsOut, this.animationVerticalsOut ] );

    this.animationIn = new AnimationGroup( [ gridAnimationIn, horizonalEmphasisTopIn, horizonalEmphasisBottomIn, verticalEmphasisTopIn, verticalEmphasisBottomIn ] );
    this.animationOut = new AnimationGroup( [ gridAnimationOut, horizonalEmphasisTopOut, horizonalEmphasisBottomOut, verticalEmphasisTopOut, verticalEmphasisBottomOut ] );
  },

  getCurrentSize: function() {
    var DOMNode = this.getDOMNode();

    var width = DOMNode.offsetWidth;
    var height = DOMNode.offsetHeight;

    this.setState( {
      horizonalLines: parseInt( height / 8 ),
      verticalLines: parseInt( width / 8 )
    } );
  },

  getLine: function( direction, lineIndex ) {
    var lineKey = direction + '-' + lineIndex;
    return ( <PostBlueprintLine direction={ direction } ref={ lineKey } key={ lineKey } /> );
  },

  getLines: function() {
    var horizonalLines = [],
      verticalLines = [],
      h, v;

    // Wait for initial render to get size and generate lines
    if ( ! this.state.horizonalLines || ! this.state.verticalLines ) {
      return null;
    }

    // horizonal
    for ( h = 0; h < this.state.horizonalLines; h++ ) {
      horizonalLines.push( this.getLine( 'horizonal', h ) );
    }

    // vertical
    for ( v = 0; v < this.state.verticalLines; v++ ) {
      verticalLines.push( this.getLine( 'vertical', v ) );
    }

    return (
      <div>
        { horizonalLines }
        { verticalLines }
      </div>
    );
  },

  render: function() {
    return (
      <div style={ blueprintStyles.base }>
        { this.getLines() }
        <PostBlueprintLine direction="horizonal" emphasis={ true } ref="emphasis-horizontal-top" />
        <PostBlueprintLine direction="horizonal" emphasis={ true } ref="emphasis-horizontal-bottom" />
        <PostBlueprintLine direction="vertical" emphasis={ true } ref="emphasis-vertical-top" />
        <PostBlueprintLine direction="vertical" emphasis={ true } ref="emphasis-vertical-bottom" />
      </div>
    );
  }

} );

// ==== Module Export ====
module.exports = blueprintClass;
