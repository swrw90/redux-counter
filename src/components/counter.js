import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.counter}</h3>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}

export default Counter;