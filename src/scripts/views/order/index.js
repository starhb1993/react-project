import "./index.scss"
import React, { Component } from "react"
import UserHeader from "~/components/UserHeader"
import Usermain from "~/components/Usermain"
import Shoporder from "~/mobx/Shoporder"
import { observer } from "mobx-react"

console.log(Shoporder)


@observer
class Order extends Component {
    componentDidMount() {
        if (!!sessionStorage.token) {
            Shoporder.getorderList("/react/getOrderList")
        }
    }

    

    render() {
        const {
            orderList
        } = Shoporder
        console.log(orderList)
        return (
            <div>
                <UserHeader />
                <Usermain orderList={orderList}   />
            </div>
        )
    }

}

export default Order