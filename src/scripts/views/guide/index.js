import "./index.scss"
import React, { Component } from "react"
import { Carousel } from 'antd-mobile';


export default class Guide extends Component {

    constructor() {
        super();
        this.state = {
            imgs: [
                require("@/assets/images/1.jpg"),
                require("@/assets/images/2.jpg"),
                require("@/assets/images/3.jpg"),
                require("@/assets/images/4.jpg"),
                require("@/assets/images/5.jpg"),
                require("@/assets/images/6.jpg")
            ]
        }
    }

    componentDidMount() {
        if (localStorage.visitCount) {
            localStorage.visitCount++;
            if (localStorage.visitCount > 3) {
                this.props.history.push("/main/home");
            }
        } else {
            localStorage.visitCount = 1;
        }
    }

    handleGotoMain = (index) => {
        if (index === this.state.imgs.length - 1) {
            this.props.history.push("/main/home");
        }
    }

    render() {
        return (
            <div className="g-box">
                <Carousel
                    id="guide"
                    autoplay={false}
                    infinite={false}
                    dots={false}
                >
                    {
                        this.state.imgs.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <img
                                        src={item}
                                        alt=""
                                        className="g-img"
                                    />
                                    {idx === this.state.imgs.length - 1 && <button onClick={() => this.handleGotoMain(idx)} className="g-btn">立即开启</button>}
                                </div>
                            )
                        })
                    }

                </Carousel>
            </div>
        )
    }

}