import React from "react";

class example extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "blue",
      height: "100px",
      width: "200px"
    }
    this.changeColor = this.changeColor.bind(this);
    this.changeWidth = this.changeWidth.bind(this);
  }

  // Much of this is from https://coursework.vschool.io/inline-styling-with-react/

  changeColor(backgroundColor) {
    this.setState({
      backgroundColor
    });
  }
  changeWidth(width) {
    this.setState({
      width
    });
  }
  render() {
    return (
      <div style={this.state}
      onMouseEnter={() => this.changeColor("red")}
      onMouseOut={() => this.changeColor("blue")}
      onClick={() => this.changeWidth("400px")}
      onDoubleClick={() => this.changeWidth("200px")}
      />
    )
  }
}

export default example;