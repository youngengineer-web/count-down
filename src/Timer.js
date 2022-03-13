import React from "react";
// import ReactDOM from 'react-dom';
import './style.css'
import BtnControl from "./btnControl";


export var userTime = parseInt(prompt("Enter Your Number"));
var interval;
var rstUserTime = userTime;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: userTime
        }
    }

    setTime = () => {
        this.setState({
            time: --userTime
        })
    }

    componentDidMount() {
        interval = setInterval(this.setTime, 1000);
    }

    componentDidUpdate() {
        if (this.state.time == 0) {
            clearInterval(interval);
            alert("Time Out!");
        }
    }

    btnStart = () => {
        interval = setInterval(this.setTime, 1000);
    }

    btnStop = () => {
        clearInterval(interval);
    }

    btnReset = () =>{
        userTime = rstUserTime;
    }

    render() {
        return (
            <div className="btn">
                <div className="timer">
                    <span>{this.state.time}</span> left
                </div>
                <BtnControl btnStart={this.btnStart} btnStop={this.btnStop} btnReset={this.btnReset} />
            </div>
        )
    }
}

export default Timer;