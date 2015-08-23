var React = require('react');

var style = require('./style.css');

var Content = require('../lib/');


var App = React.createClass({
  render: function () {
    return (
      <div id="container">
        <div id="sidebar">
          <Content>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>-------------------</p>
          </Content>
        </div>
        <div id="preview">
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>---------------</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            <p>This is preview</p>
            
        </div>
      </div>
    );
  }
})

React.render(
  <App />,
  document.body
);
