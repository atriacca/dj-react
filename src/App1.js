import React from 'react';
import Square from "./Square";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ["white", "white", "white", "white"],
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      this.prevState.colors[0] === "white" ? 
      return this.setState.colors = ["black", "black", "black", "black"] : 
      return this.setState.colors = ["white", "white", "white", "white"]
    })
  }
  
  // handleClick = () => {
  //   this.setState(prevState => {
  //     return this.prevState.colors[0] === "white" ? 
  //     this.setState.colors = ["black", "black", "black", "black"] : 
  //     this.setState.colors = ["white", "white", "white", "white"]
  //   })
  // }

  // handleClick = () => {
  //   this.setState(prevState => {
  //     return this.prevState.colors[0] === ["white"] ? 
  //     this.setState.colors = {["black", "black", "black", "black"]} : 
  //     this.setState.colors = {["white", "white", "white", "white"]}
  //   })
  // }

  // handleClick = () => {
  //   this.setState(prevState => {
  //     if (this.prevState.colors[0] === "white") {
  //       return this.setState.colors = ["black", "black", "black", "black"];
  //     } else {
  //       return this.setState.colors = ["white", "white", "white", "white"]
  //     }
  //   })
  // }

  //   handleClick = () => {
  //   if (this.state.colors[0] === "white") {
  //     return this.setState.colors = ["black", "black", "black", "black"];
  //   } else {
  //     return this.setState.colors = ["white", "white", "white", "white"]
  //   }
  // }
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