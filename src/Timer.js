import React from "react";
// import ReactDOM from 'react-dom';
import './style.css'
// import { txt } from "./Text";

export var userTime = parseInt(prompt("Enter Your Number"));
var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: userTime
        }
    }

    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                time: --userTime
            })
        }, 1000);
    }

    componentDidUpdate() {
        if (this.state.time == 0) {
            clearInterval(interval);
            // txt = "Your counting is over";
            alert("Time Out!");
        }
    }

    render() {
        return (
            <div className="timer">
                <span>{this.state.time}</span> left
            </div>
        )
    }
}

export default Timer;