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
/*
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
*/
  handleClick: function() {
    if(this.state.value === 'O'){
      this.setState({value: 'X'});
    }
    if(this.state.value === 'X'){
      this.setState({value: 'O'});
    }
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
      <button style={divStyle} onClick={this.handleClick}>{this.state.value}</button>
    );
  }
});

var Row = React.createClass({
  'render': function onRender () {
    return (
      <div><Box initialValue='X'/><Box initialValue='X'/><Box initialValue='X'/></div>
    );
  }
});

React.render(<Row/>, document.body);
