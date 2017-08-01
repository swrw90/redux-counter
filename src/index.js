import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux"; //gives information from store
import { createStore } from "redux";
import reducers from "./reducers/";

//create store
const store = createStore(reducers);

import CounterContatiner from "./container/counter-container.js";

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