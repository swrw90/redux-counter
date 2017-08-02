import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.counter}</h3>
                <button onClick={this.props.handleUp}>+</button>
                <button onClick={this.props.handleDown}>-</button>
            </div>
        )
    }
}

export default Counter;