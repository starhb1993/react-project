import React, { Component } from 'react';
import ProductOverView from "~/components/ProductOverView"
import ShopInfo from "~/components/ShopInfo"
import Detail from "~/components/Detail"
import Remark from "~/components/Remark"
import BuyButton from "~/components/BuyButton"
import Head from "~/components/head"
// import { axios } from "&"
import { connect } from "react-redux"
import { getProductdetail } from '../../actions';

@connect(
    state => {
        return {
            productdetail: state.getIn(["data", "productdetail"])
        }
    }
)



class ProductDetail extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        const {
            dispatch
        } = this.props

        dispatch(getProductdetail({
            url: "/react/getProductdetail", params: {
                id
            }
        }))
    }



    render() {
        const {
            match,
            productdetail
        } = this.props
        // console.log(match)
        // console.log(productdetail)
        return (
            <div>
                <Head title="团购详情" show={true} search={true} />
                <ProductOverView productdetail={productdetail} match={match} />
                <ShopInfo />
                <Detail />
                <Remark />
                <BuyButton match={match} />
            </div>
        );
    }
}

export default ProductDetail;