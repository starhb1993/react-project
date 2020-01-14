import "./index.scss"
import React, { Component } from "react"
import Category from "~/components/Category"
import Headline from "~/components/Headline"
import Discount from "~/components/Discount"
import Likelist from "~/components/Likelist"
import HomeHeader from "~/components/HomeHeader"
import Activity from '~/components/Activity'


export default class Home extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Category />
                <Headline />
                <Activity />
                <Discount />
                <Likelist />
            </div>
        )
    }

}