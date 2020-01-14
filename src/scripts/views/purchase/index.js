import "./index.scss"
import React, { Component } from 'react';
import Head from "~/components/head"
import { List, Stepper } from 'antd-mobile';
import { axios } from "&"

import { history } from "&";

import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

const alert = Modal.alert;

class Purchase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            val: 1,
            currentPrice: "",
            productdetail: null,
            count: 1
        };
    }


    componentDidMount() {
        const id = this.props.match.params.id
        axios.get("/react/getProductdetail", {
            params: {
                id
            }
        }).then(res => {
            // console.log(res)
            this.setState({
                currentPrice: res.data.result.currentPrice * 1,
                productdetail: res.data.result
            })
        })
    }

    onChange = (val) => {
        // console.log(val);
        this.setState({
            count: val
        });
    }

    // handleClick = () => {
    //     //提交订单
    //     axios.post("/react/addToOrderList", {
    //         count: this.state.count,
    //         productdetail: this.state.productdetail,
    //         totalprice: (this.state.currentPrice * 1) * (this.state.count * 1),
    //         id: this.props.match.params.id,
    //         productdetail: this.state.productdetail
    //     }).then(res => {
    //         history.push("/main/order")
    //     })
    // }



    render() {
        const {
            currentPrice,
            count
        } = this.state
        const userMobile = sessionStorage.mobile
        // console.log(userMobile)
        return (
            <div>
                <Head title="提交订单" search={true} show={true}></Head>
                <List.Item
                    style={{ marginTop: 30 }}
                    wrap
                    extra={
                        <Stepper
                            style={{ width: '100%', minWidth: '100px' }}
                            showNumber
                            min={1}
                            value={this.state.count}
                            onChange={this.onChange}
                        />}
                >
                    数量
                    </List.Item>
                <List.Item>小计<p className="p-r" >¥{(currentPrice * count).toFixed(1)}</p></List.Item>
                <List.Item style={{ marginTop: 10 }}>抵用券/优惠码<p className="p-r">暂无可用></p></List.Item>
                <List.Item style={{ marginTop: 16 }}>手机号码<p className="p-r">{userMobile}</p></List.Item>
                <ul className="purchaseForm__remark">
                    <li className="purchaseForm__remarkItem">
                        <i className="purchaseForm__sign" />
                        <span className="purchaseForm__desc">支持随时退</span>
                    </li>
                    <li>
                        <i className="purchaseForm__sign" />
                        <span className="purchaseForm__desc">支持过期退</span>
                    </li>
                </ul>
                <a className="purchaseForm__submit"
                    onClick={() =>
                        alert('下单成功', '您即将前往订单页查看相关订单', [
                            { text: '取消', onPress: () => console.log('cancel') },
                            { text: '确定', onPress: () => {
                                
                                axios.post("/react/addToOrderList", {
                                    count: this.state.count,
                                    productdetail: this.state.productdetail,
                                    totalprice: (this.state.currentPrice * 1) * (this.state.count * 1),
                                    id: this.props.match.params.id,
                                    productdetail: this.state.productdetail
                                }).then(res => {
                                    history.push("/main/order")
                                })

                            } },
                        ])
                    }

                >
                    提交订单
                </a>
            </div>
        );
    }
}

export default Purchase;