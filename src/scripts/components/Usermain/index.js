
import "./index.scss"
import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
// import { axios } from "&"

import Shoporder from "~/mobx/Shoporder"
import { observer } from "mobx-react"

console.log(Shoporder)


const tabs = [
    { title: '全部订单' },
    { title: '待付款' },
    { title: '可使用' },
    { title: '退款/售后' },
];

@observer
class Usermain extends Component {

    // delSelectOrder = (mobile, _id) => {
    //     console.log(_id)
    //     console.log(mobile)
    //     axios.post("/react/delSelectOrder", {
    //         _id,
    //         mobile
    //     }).then(res => {

    //     })
    // }

    delSeletOrder = (mobile, id) => {
        // console.log(mobile,id)
        Shoporder.delSeletOrder("/react/delSelectOrder", mobile, id)
    }



    render() {
        let {
            orderList
        } = this.props
        // console.log(orderList)

        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} tabBarUnderlineStyle={{ borderColor: "#f63" }} tabBarInactiveTextColor="#333" tabBarActiveTextColor="#f63">
                    <div style={{ display: 'flex', flexDirection: "column", height: 'auto', marginBottom: 50 }}>

                        <div className="userMain__empty" style={{ display: orderList.length > 0 ? 'none' : 'block' }}>
                            <div className="userMain__emptyIcon" />
                            <div className="userMain__emptyText1">您还没有相关订单</div>
                            <div className="userMain__emptyText2">去逛逛看有哪些想买的</div>
                        </div>
                        {
                            orderList.length > 0 && orderList.map((i, index) => {
                                return (
                                    i.productdetail && <div className="orderItem" key={index} id={i.id} mobile={i.mobile} >
                                        <div className="orderItem__title">
                                            <span>{i.productdetail.detail.products[0].name + i.count + i.productdetail.detail.products[0].quantity.slice(1)}</span>
                                        </div>
                                        <div className="orderItem__main">
                                            <div className="orderItem__imgWrapper">
                                                <div className="orderItem__tag">待付款</div>
                                                <img alt="" className="orderItem__img" src="https://p1.meituan.net/180.132/deal/3490991e3dbeacb25f4b8cc1fb0587d7249290.jpg.webp@700w_700h_1e_1c_1l%7Cwatermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20" />
                                            </div>
                                            <div className="orderItem__content">
                                                <div className="orderItem__line">{i.count + i.productdetail.detail.products[0].quantity.slice(1)} | 总价 ¥{(i.totalprice * 1).toFixed(1)}</div>
                                                <div className="orderItem__line">有效期: {i.productdetail.validityPeriod}</div>
                                            </div>
                                        </div>
                                        <div className="orderItem__bottom">
                                            <div className="orderItem__type">团购</div>
                                            <div>
                                                <div className="orderItem__btn" onClick={() => this.delSeletOrder(i.mobile, i.id)} >删除</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", height: 'auto', marginBottom: 50 }}>
                        <div className="userMain__empty" style={{ display: orderList.length > 0 ? 'none' : 'block' }}>
                            <div className="userMain__emptyIcon" />
                            <div className="userMain__emptyText1">您还没有相关订单</div>
                            <div className="userMain__emptyText2">去逛逛看有哪些想买的</div>
                        </div>
                        {
                            orderList.length > 0 && orderList.map((i, index) => {
                                return (
                                    i.productdetail && <div className="orderItem" key={index} id={i.id} mobile={i.mobile} >
                                        <div className="orderItem__title">
                                            <span>{i.productdetail.detail.products[0].name + i.count + i.productdetail.detail.products[0].quantity.slice(1)}</span>
                                        </div>
                                        <div className="orderItem__main">
                                            <div className="orderItem__imgWrapper">
                                                <div className="orderItem__tag">待付款</div>
                                                <img alt="" className="orderItem__img" src="https://p1.meituan.net/180.132/deal/3490991e3dbeacb25f4b8cc1fb0587d7249290.jpg.webp@700w_700h_1e_1c_1l%7Cwatermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20" />
                                            </div>
                                            <div className="orderItem__content">
                                                <div className="orderItem__line">{i.count + i.productdetail.detail.products[0].quantity.slice(1)} | 总价 ¥{(i.totalprice * 1).toFixed(1)}</div>
                                                <div className="orderItem__line">有效期: {i.productdetail.validityPeriod}</div>
                                            </div>
                                        </div>
                                        <div className="orderItem__bottom">
                                            <div className="orderItem__type">团购</div>
                                            <div>
                                                <div className="orderItem__btn" onClick={() => this.delSeletOrder(i.mobile, i.id)} >删除</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", height: 'auto', marginBottom: 50 }}>
                        <div className="userMain__empty" style={{ display: orderList.length > 0 ? 'none' : 'block' }}>
                            <div className="userMain__emptyIcon" />
                            <div className="userMain__emptyText1">您还没有相关订单</div>
                            <div className="userMain__emptyText2">去逛逛看有哪些想买的</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", height: 'auto', marginBottom: 50 }}>
                        <div className="userMain__empty" style={{ display: orderList.length > 0 ? 'none' : 'block' }}>
                            <div className="userMain__emptyIcon" />
                            <div className="userMain__emptyText1">您还没有相关订单</div>
                            <div className="userMain__emptyText2">去逛逛看有哪些想买的</div>
                        </div>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }

}

export default Usermain;