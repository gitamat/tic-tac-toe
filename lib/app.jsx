'use strict';

var divStyle = {
  height:'100px',
  width:'100px',
};

var React = require('react');
var Box = React.createClass({
  getInitialState: function() {
    return {value:this.props.initialValue};
  },
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={divStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue='X'/>, document.body);
