import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

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