import "./index.scss"
import React, { Component } from 'react';
import { Link } from "react-router-dom"

class BuyButton extends Component {
    render() {
        const {
            match
        } = this.props
        const id = match.params.id
        console.log(id)
        return (
            <Link className="buyButton" to={"/purchase/" + id}>
                立即购买
            </Link>
        );
    }
}

export default BuyButton;