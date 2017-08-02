import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux"; //gives information from store
import { createStore } from "redux";
import reducers from "./reducers/";

import CounterContatiner from "./container/counter-container.js";

//create store
const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div>
                <CounterContatiner> </CounterContatiner>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));