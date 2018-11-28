var React = require('react');
var ReactDOM = require('react-dom');
const HelloWorld = React.createClass({
  render: function() {
    return React.createElement("div", {className: "hello"}, "Hello World!")
  }
})

ReactDOM.render(<HelloWorld/>, document.getElementById('container'))