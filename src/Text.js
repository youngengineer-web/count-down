import React from "react";
// import { ReactDOM } from "react";
import './style.css'
import { userTime } from "./Timer";

class Text extends React.Component {

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