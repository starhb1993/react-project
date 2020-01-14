import "./index.scss"
import React, { Component } from "react"
import {
    SearchBar
} from "antd-mobile"

const data = [
    {
        id: 1,
        keyword: "火锅",
        quantity: 8710
    },
    {
        id: 2,
        keyword: "火锅自助",
        quantity: 541
    },
    {
        id: 3,
        keyword: "火锅 三里屯",
        quantity: 65
    },
    {
        id: 4,
        keyword: "火锅 望京",
        quantity: 133
    },
    {
        id: 5,
        keyword: "火锅家常菜",
        quantity: 179
    }
];


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (value) => {
        // console.log(value)
        this.setState({
            value
        })
    }

    handleCancel = () => {
        this.props.history.push("/main/home")
    }



    render() {
        return (
            <div>
                <SearchBar value={this.state.value} onChange={this.handleChange} onCancel={this.handleCancel} placeholder="请输入关键字" showCancelButton={true}></SearchBar>
                {this.state.value.length > 0 ? this.renderSuggestList() : null}
            </div>
        )
    }


    renderSuggestList() {
        return (
            <ul className="searchBox__list">
                {
                    data.map((item, index) => {
                        return (
                            <li className="searchBox__item" key={index}>
                                <span className="searchBox__itemKeyworkd">{item.keyword}</span>
                                <span className="searchBox__itemQuantity">约{item.quantity}个结果</span>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }

}