import React, { Component } from 'react';
import Square from "./Square";

class App extends Component {
//  const App = () => {
  constructor() {
    super();
    this.state = {
      colors: ["white", "white", "white", "white"],
    }
  }
  handleClick = () => {
    this.setState(prevState => {
        return {colors: ["blue", "blue", "blue", "blue"]}
    })
}
// beverage = (age >= 21) ? "Beer" : "Juice";
render() {
    // const colors = ["red", "white", "white", "white"];
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
          <Square color={this.state.colors[0]}/>
          <Square color={this.state.colors[1]}/>
          <Square color={this.state.colors[2]}/>
          <Square color={this.state.colors[3]}/>
        </div>
        <button onClick={this.handleClick}>Change color</button>
      </div>
    );
  }
}
export default App;