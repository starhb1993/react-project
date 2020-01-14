
import "./index.scss"
import React, { Component } from "react";
import { history } from "&"


class UserHeader extends Component {

    handleClick = () => {
        history.push("/main/home")
    }

    handleLogout = () => {
        history.push("/login")
        let userInfo = localStorage.userInfo;
        if (userInfo) {
            userInfo = "";
        }
        sessionStorage.token = ""
    }


    render() {

        return (
            <header className="userHeader">
                <div className="userHeader__back" onClick={this.handleClick}>
                    首页
        </div>
                <div className="userHeader__list">
                    <span className="userHeader__item userHeader__item--selected">
                        订单
          </span>
                    <span className="userHeader__item">抵用券</span>
                </div>
                <div className="userHeader__right" onClick={this.handleLogout}>
                    注销
        </div>
            </header>
        );
    }
}

export default UserHeader;
