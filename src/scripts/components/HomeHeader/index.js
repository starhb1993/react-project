import "./index.scss"
import React, { Component } from 'react';
import {NavLink} from "react-router-dom"

class HomeHeader extends Component {
    render() {
        return (
            <div className="homeHeader">
                <header className="homeHeader__wrapper">
                    <a className="homeHeader__city">北京</a>
                    <NavLink className="homeHeader__search" to="/search">输入商户名、地点</NavLink>
                    <NavLink className="homeHeader__self" to="/main/order">
                        <div className="homeHeader__portrait" />
                    </NavLink>
                </header>
            </div>
        );
    }
}

export default HomeHeader;

