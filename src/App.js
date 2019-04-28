import React from 'react';
import Square from "./Square";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ["yellow", "yellow", "yellow", "yellow"]
    }
  }

  // handleClick = () => {
  //   this.setState(prevState => {
  //     this.prevState.colors === "white" ? 
  //     return this.setState.colors = "black" : 
  //     return this.setState.colors = "white"
  //   })
  // }
  
  // handleClick = () => {
  //   this.setState(prevState => {
  //     return {colors: prevState.colors === "white" ? "black" : "white"}
  //   })
  // }

  handleClick = () => {
    this.setState(prevState => {
      return {colors: prevState.colors === 
        ["yellow", "yellow", "yellow", "yellow"] ? 
        ["black", "black", "black", "black"] : 
        ["red", "yellow", "yellow", "yellow"]}
    })
  }

render() {
    const styles = {
      fontFamily: "sans-serif",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridRowHeight: "100px",
      textAlign: "center",
    }
    return (
      <div>
        <div style={styles}>
          <p>DJ React</p><br/>
          {/* <Square color={this.state.colors}/> */}
          <Square color={this.state.colors[0]}/>
          <Square color={this.state.colors[1]}/>
          <Square color={this.state.colors[2]}/>
          <Square color={this.state.colors[3]}/>
        </div>
        <button onClick={this.handleClick}>Click to change color</button>
      </div>
    );
  }
}
export default App;