import React from 'react';

class Dj extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
        myHandleClick = () => {
            this.setState(prevState => {
                return {counter: prevState.counter + 1}
            })
        }
        render () {
            const styles = {
                display: "grid",
                fontSize: "30px",
                width: "40%",
                gridTemplateColumns: "1fr 1fr",
                margin: "auto",
                textAlign: "center",
                height: "100px",
                width: "200px",
                margin: "20px",
                border: "1px solid grey",
                backgroundColor: "goldenrodyellow"
            }
            return (
                <div>
                    <div>I did a thing</div>
                    <div>{this.state.counter } times</div>
                    <button onClick={this.myHandleClick}>Change color</button>
                    <span onClick={this.myHandleClick}>Change color</span>
                </div>
            )
        }
}

export default Dj;