import React from "react";
import Timer from "./Timer";
import Text from "./Text";
import './style.css'
// import InNum from "./InNum"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "Your countdown is counting..."

        }
    }

    editTitle = () => {
        this.setState({
            title: "Your counting is over"
        })
    }

    // givNum = () => {
    //     alert("hello world");
    // }

    render() {
        return (
            <div className="main" id="main">
                {/* <InNum givNum={this.givNum} /> */}
                <Text title={this.state.title} editTitle={this.editTitle} />
                <Timer/>
            </div>
        )
    }
}

export default App;