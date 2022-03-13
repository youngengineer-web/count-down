import React from "react";
import ReactDOM from 'react-dom';

class BtnControl extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.btnStart}>Start</button>
                <button onClick={this.props.btnStop}>Stop</button>
                <button onClick={this.props.btnReset}>Reset</button>
            </div>
        )
    }
}

export default BtnControl;