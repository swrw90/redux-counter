import React from "react";
import Counter from "../components/counter.js";

class CounterContainer extends React.Component {
    render() {
        return (
            <div>
                <Counter counter={101}></Counter>
            </div>
        )
    }
}

export default CounterContainer;