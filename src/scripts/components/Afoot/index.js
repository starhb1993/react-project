import "./index.scss"
import React, { Component } from "react";


import {
    TabBar
} from "antd-mobile"

import PropTypes from "prop-types"
import { history } from "&";

const foots = [
    { txt: "首页", path: "/main/home", name: "home", icon: "icon-shouye" },
    { txt: "订单", path: "/main/order", name: "order", icon: "icon-icon-" },
    { txt: "我的", path: "/main/mine", name: "mine", icon: "icon-wode" }
]

export class Afoot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    componentDidMount() {
        //如何做刷新高亮
        var hash = window.location.hash;     //this.props.location    或者    context.location
        console.log(hash)
        var tab = hash.split("#/main/")[1];
        this.setState({
            selectedTab: tab
        })
    }
    render() {
        console.log(this);
        return (
            <div className="footer">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#ed5f34"
                    barTintColor="white"

                >
                    {
                        foots.map((foot, i) => {
                            return (
                                <TabBar.Item
                                    title={foot.txt}
                                    key={i}
                                    icon={<i style={{
                                        width: '22px',
                                        height: '22px',
                                        display: 'inline-block'
                                    }}
                                        className={"iconfont " + foot.icon}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        display: 'inline-block'
                                    }}
                                        className={"iconfont " + foot.icon}
                                    />
                                    }
                                    selected={this.state.selectedTab == foot.name}
                                    badge={i == foots.length - 2 && 2}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: foot.name,
                                        });
                                        // this.props.history.push(foot.path);
                                        // this.context.history.push(foot.path);
                                        history.push(foot.path);
                                    }}
                                    data-seed="logId"
                                >

                                </TabBar.Item>
                            )
                        })
                    }
                </TabBar>
            </div>
        )
    }




}


Afoot.contextTypes = {
    history: PropTypes.object
}




