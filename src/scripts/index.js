import React, { Component } from "react";

import {
    HashRouter as Hash,
    Route
} from "react-router-dom";

import MainLayout from "./views"
import store from "./store"
import { Provider } from "react-redux"

export class MainRouter extends Component {
    render() {
        return (
            <Provider store={store}>
                <Hash
                    basename=""
                >
                    <Route component={MainLayout}></Route>
                </Hash>
            </Provider>

        )
    }
}

