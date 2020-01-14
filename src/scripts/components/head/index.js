import "./index.scss";
import React, { Component } from "react"
import {
    NavBar,
    Icon
} from "antd-mobile"

import { history } from "&"

export default class Head extends Component {

    handleGoBack(show) {             //这里没有写箭头函数,在下面可以用bind来改变this指向
        if (show) {
            history.goBack();
        }
    }

    render() {
        const {
            title,
            show,
            search
        } = this.props;
        return (
            <NavBar
                mode="light"
                icon={show && <Icon type="left" />}
                style={{ color: '#333' }}
                onLeftClick={() => this.handleGoBack(show)}
                rightContent={[
                    !search && <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                ]}
            >{title}</NavBar>
        )
    }
}