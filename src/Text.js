import React from "react";
// import { ReactDOM } from "react";
import './style.css'
import { userTime } from "./Timer";
// export var txt = "Your countdown is counting...";

class Text extends React.Component {
    constructor(){
        super()
        this.state = {
            txt2:"Your countdown is counting..."
        }
    }

    componentDidUpdate(){
        if (userTime == 0) {
            this.setState({
                txt2:"Your counting is over"
            })
        }
    }

    render() {
        return (
            <div className="text">
                {this.state.txt2}
            </div>
        )
    }
}

export default Text;