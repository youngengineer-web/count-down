import React from "react";
// import { ReactDOM } from "react";
import './style.css'
import { userTime } from "./Timer";
// export var txt = "Your countdown is counting...";

class Text extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         txt2:"Your countdown is counting..."
    //     }
    // }

    componentDidUpdate(){
        if (userTime == 5) {
            this.props.editTitle();
        }
    }

    render() {
        return (
            <div className="text">
                {this.props.title}
            </div>
        )
    }
}

export default Text;