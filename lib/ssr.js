
var React = require('react');

var Composite = {
  propTypes: {
    tagName: React.PropTypes.string,
    className: React.PropTypes.string,
    factor: React.PropTypes.number,
  },

  getDefaultProps: function () {
    return {
      tagName: 'div',
      className: 'rcs_container', 
      factor: 0.9,
    }
  }, 

  _onwheel: function () {
  },

  getAttrs: function () {
    return {
      'className': this.props.className, 
      ref: 'container',
    };
  }, 

  render: function () {
    // grip style.
    var grip = {
      height: this.state.grip,
      top: this.state.gripTop,
      left: 0,
      right: 0,
      position: 'absolute',
    };

    /** If has no scrollbar */
    if (!this.state.hasScrollbar) {
      return React.DOM.span(
        {},

        React.DOM.div(
          this.getAttrs(),

          React.DOM.div(
            {
              key: 'content', className: 'rcs_content', onWheel: this._onwheel
            },

            this.props.children
          )
        )
      );
    }

    // else show the scrollbar

    return React.DOM.span(
      {},

      React.DOM.div(
        this.getAttrs(),

        React.DOM.div(
          {
            key: 'content', className: 'rcs_content', onWheel: this._onwheel
          },

          this.props.children
        )
      ),
      
      React.DOM.div(
        {
          ref: 'scrollbar', key: 'scrollbar', className: "rcs_scrollbar"
        },
        React.DOM.div(
          {ref: 'gripAnchor', className: "rcs_grip_anchor", style: grip},
          React.DOM.div(
            {className: "rcs_grip", style: {position: 'absolute', top: 0, bottom: 0}}
          )
        )
      )
    );
  }
}

module.exports = React.createClass(Composite);
exports.Composite = Composite;
