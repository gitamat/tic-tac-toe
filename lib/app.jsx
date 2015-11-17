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
  componentWillMount: function(){
    var _this = this;
    this.timer = setInterval(function(){
      var oldValue = _this.state.value;
      var newValue = oldValue === 'X' ? 'O': 'X';
      _this.setState({
          value: newValue
      });
    }, 300);
  },

componentWillUnmount: function(){

clearInterval(this.timer);

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
