import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import Counter from "../components/counter.js";

class CounterContainer extends React.Component {
    render() {
        return (
            <div>
                <Counter counter={this.props.counter} handleUp={this.props.up} handleDown={this.props.down}></Counter>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return state }
const mapDispatchToProps = (dispatch) => { return bindActionCreators(actionCreators, dispatch) };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);