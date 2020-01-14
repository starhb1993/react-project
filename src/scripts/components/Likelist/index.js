import "./index.scss"
import React, { Component } from 'react';
import LikeItem from "../LikeItem";
import { connect } from "react-redux"
import { getLikelist } from "../../actions";


@connect(
    state => {
        return {
            Likelist: state.getIn(["data", "Likelist"])
        }
    }
)

class Likelist extends Component {

    componentDidMount() {
        const {
            dispatch,
            Likelist
        } = this.props

        if (!Likelist.length > 0) {
            dispatch(getLikelist({ url: "/react/getLikelist" }))
        }


    }

    render() {
        const {
            Likelist
        } = this.props
        console.log(this.props)
        return (
            <div className="likeList">
                <div className="likeList__header">猜你喜欢</div>
                <div className="likeList__list">
                    {
                        Likelist.map((item, index) => {
                            return <LikeItem key={index} Likelist={item} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Likelist;