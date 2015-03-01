# Ogygia

An experimental playground used for trying out ideas regarding building views with [React](http://facebook.github.io/react/). Current project is building out a UI library with some specific tests in mind:

1. **Component CSS**
  - Instead of creating regular `CSS` (read: any files that generate `CSS`) files, try using only inline styles defined within the components themselves.
2. **Web Animations**
  - Rather than controlling classes from `js` that include `CSS` based animations/transitions, try defining and controlling those animations with the [Web Animation API](http://w3c.github.io/web-animations/).
3. **Style Transition Group**
  - Test bed for [`ReactStyleTransitionGroup`](https://github.com/adambbecker/react-style-transition-group) which functions almost the same as the addon `ReactCSSTransitionGroup`, however instead of altering classes, it can apply a set of styles (which can be generated at render).

---

### Browser Support

This is still very experimental, so support is limited to **Chrome only** *for now*.
