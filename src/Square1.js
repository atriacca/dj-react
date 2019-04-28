import React from 'react';

class Square extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         color: "blue",
    //     }
    // }
        render () {
            const styles = {
                margin: "20px",
                height: "100px",
                width: "100px",
                border: "1px solid red",
                backgroundColor: this.props.color
            }
            return (
                <div>
                    <div style={styles}> 
                    </div>          
          </div>
            )
        }
}

export default Square;