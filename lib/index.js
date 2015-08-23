
var React = require('react');
var assign = require('object-assign');

var loop = require('./vendor/animationFramePolyfill');
var ssr = require('./ssr');

var container;
var scrollbar;
var gripAnchor;
var animated;
var _x = 0;
var _y = 0;

var Composite = assign({}, ssr.Composite, {

  getInitialState: function () {
    return {
      width: 0,
      height: 0,
      scrollWidth: 0,
      scrollHeight: 0,
      grip: 0,
      gripTop: 0,
      hasScrollbar: true,
    }
  },

  componentWillMount: function () {
    // this._resize = this._resize.bind(this);
  },

  componentDidMount: function () {
    container = this.refs.container.getDOMNode();
    scrollbar = this.refs.scrollbar.getDOMNode();
    gripAnchor = this.refs.gripAnchor.getDOMNode();

    animated = false;

    this.setState({
      grip: this.getGripSize(scrollbar.offsetHeight, container.scrollHeight),
      hasScrollbar: container.scrollHeight > container.offsetHeight
    }, function () {
      animated = true;
    })

    if (window.addEventListener) {
      window.addEventListener('resize', this._resize);
    } else if (window.attachEvent) {
      window.attachEvent('onresize', this._resize);
    }
  },

  componentWillUnmount: function () {
    if (window.addEventListener) {
      window.removeEventListener('resize', this._resize);
    } else if (window.attachEvent) {
      window.detachEvent('onresize', this._resize);
    }
  },

  _resize: function () {
    this.setState({
      grip: this.getGripSize(scrollbar.offsetHeight, container.scrollHeight),
      hasScrollbar: container.scrollHeight > container.offsetHeight,
    })
  },

  _onwheel: function (e) {
    if (!container || !this.state.hasScrollbar) {
      return;
    }

    if (!animated) {
      return;
    }

    animated = false;

    _x = e.deltaX;
    _y = e.deltaY;

    loop.nextFrame(this._animate);
  },

  _animate: function () {
    // is this neccessary?
    if (container.scrollTop > (container.scrollHeight - container.height) ||
      container.scrollTop < 0 ) {
      animated = true;
      return;
    }

    container.scrollTop += _y;

    // here
    this.setState({
      gripTop: this.getGripTop()
    });

    animated = true;
  },

  /**
   * var x = (container.scrollHeight - container.height)
   * var y = scrollbar.height
   * container.scrollTop/x = gripTop/(y-gripHeight)
   * So, gripTop = container.scrollTop/x * (y-gripHeight)
   */
  getGripTop: function () {
    var gripHeight = this.getGripHeight();
    var x = (container.scrollHeight - container.offsetHeight);
    var y = scrollbar.offsetHeight;

    return container.scrollTop / x * (y - gripHeight);
  },

  /** 
   * Get the height of grip of scrollbar
   */
  getGripHeight: function () {
    return gripAnchor.offsetHeight;
  },

  /**
   * @param {number} a - Outer box
   * @param {number} b - Content height or width
   */
  getGripSize: function (a, b) {
    // return this.props.factor * (b / a);
    return 0.09 * a;
  },
});

module.exports = React.createClass(Composite);
