'use strict';

var divStyle = {
  height:'100px',
  width:'100px',
};

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={divStyle}>{this.props.value}</button>
    );
  }
});

React.render(<Box value='X'/>, document.body);
