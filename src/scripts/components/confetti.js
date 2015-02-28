// ================================================
// Confetti.js
// ----
// Creates "confetti" effect for confirm modal demo
// ================================================

// ---- External Dependencies ----
// var React = require( 'react' );
var React = require( '../lib/react-with-addons' );

// ---- Internal Variables ----
var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

NUM_CONFETTI = 600;

COLORS = [[240, 184, 73], [0, 170, 220], [74, 184, 82]];

PI_2 = 2 * Math.PI;

range = function(a, b) {
  return (b - a) * Math.random() + a;
};

xpos = 0.5;

// ---- Styles ----
var confettiStyles = {
  canvas: {
    position: 'absolute',
    left: '0',
    width: '100%',
    height: '100%',
    opacity: '0.45'
  }
};

// ---- React Class ----
var confettiClass = React.createClass( {

  componentDidMount: function() {
    canvas = this.getDOMNode();
    context = canvas.getContext("2d");

    drawCircle = function(x, y, r, style) {
      context.beginPath();
      context.arc(x, y, r, 0, PI_2, false);
      context.fillStyle = style;
      return context.fill();
    };

    var w = canvas.width;
    var h = canvas.height;

    Confetti = (function() {
      function Confetti() {
        this.style = COLORS[~~range(0, 3)];
        this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
        this.r = ~~range(2, 4);
        this.r2 = 2 * this.r;
        this.replace();
      }

      Confetti.prototype.replace = function() {
        this.opacity = 0;
        this.dop = 0.03 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-20, h - this.r2);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(0, 2) + 8 * xpos - 5;
        return this.vy = 0.45 * this.r + range(-1, 1);
      };

      Confetti.prototype.draw = function() {
        var _ref;
        this.x += this.vx;
        this.y += this.vy;
        this.opacity += this.dop;
        if (this.opacity > 1) {
          this.opacity = 1;
          this.dop *= -1;
        }
        if (this.opacity < 0 || this.y > this.ymax) {
          this.replace();
        }
        if (!((0 < (_ref = this.x) && _ref < this.xmax))) {
          this.x = (this.x + this.xmax) % this.xmax;
        }
        return drawCircle(~~this.x, ~~this.y, this.r, "" + this.rgb + "," + this.opacity + ")");
      };

      return Confetti;

    })();

    confetti = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 1; 1 <= NUM_CONFETTI ? _i <= NUM_CONFETTI : _i >= NUM_CONFETTI; i = 1 <= NUM_CONFETTI ? ++_i : --_i) {
        _results.push(new Confetti);
      }
      return _results;
    })();

    var stepAnimation = function() {
      var c, _i, _len, _results;
      requestAnimationFrame( stepAnimation );
      context.clearRect(0, 0, w, h);
      _results = [];
      for (_i = 0, _len = confetti.length; _i < _len; _i++) {
        c = confetti[_i];
        _results.push(c.draw());
      }
      return _results;
    };

    stepAnimation();
  },

  render: function() {
    return (
      <canvas style={ confettiStyles.canvas }></canvas>
    );
  }

} );

// ==== Module Export ====
module.exports = {
  styles: confettiStyles,
  reactClass: confettiClass
};
