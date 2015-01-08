// ============================================
// Merge.js
// ----
// Simple merging of objects from last to first
// ingores falsy values
// ============================================

if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      "use strict";
      if (target === undefined || target === null)
        throw new TypeError("Cannot convert first argument to object");
        var to = Object(target);
        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];
          if (nextSource === undefined || nextSource === null) continue;
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
          }
        }
        return to;
    }
  });
}

module.exports = function() {
  var res = {},
    i = 0;

  for ( i; i < arguments.length; i++ ) {
    if ( arguments[ i ] ) {
      Object.assign( res, arguments[ i ] );
    }
  }

  return res;
};
