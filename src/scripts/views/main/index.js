import "./index.scss"
import React, { Component } from "react"
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import LazyLoad from "&/lazyload";

import { Afoot } from "~/components/Afoot"


//嵌套路由
export default class Main extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="box">
                <Switch>
                    <Route path="/main/home" component={LazyLoad(() => import("../home"))} />
                    <Route path="/main/order" component={LazyLoad(() => import("../order"))} />
                    <Route path="/main/mine" component={LazyLoad(() => import("../mine"))} />
                    <Route render={() => (<Redirect to="/main/home" />)} />
                </Switch>
                <Afoot {...this.props} />
            </div>
        )
    }

}