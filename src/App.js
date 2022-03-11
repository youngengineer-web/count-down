import React from "react";
import Timer from "./Timer";
import Text from "./Text";
import './style.css'
// import InNum from "./InNum"


class App extends React.Component {
    render() {
        return (
            <div className="main" id="main">
                {/* <InNum/> */}
                <Text/>
                <Timer/>
            </div>
        )
    }
}

export default App;