import React, { Component } from "react";

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import LazyLoad from "&/lazyload";

import PropTypes from "prop-types"



//所有的路由在这里配置
export default class MainLayout extends Component {
    getChildContext() {
        return {
            history: this.props.history,
            location: this.props.location
        }
    }
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact render={() => (<Redirect to="/guide" />)} />
                    <Route path="/guide" component={LazyLoad(() => import("./guide"))} />
                    <Route path="/login" component={LazyLoad(() => import("./login"))} />
                    <Route path="/search" component={LazyLoad(() => import("./search"))} />
                    <Route path="/main" component={LazyLoad(() => import("./main"))} />
                    <Route path="/detail/:id" component={LazyLoad(() => import("./productdetail"))} />
                    <Route path="/purchase/:id" component={LazyLoad(() => import("./purchase"))} />
                    <Route render={() => (<Redirect to="/guide" />)} />
                </Switch>
            </div>
        )
    }
}


MainLayout.childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object
}