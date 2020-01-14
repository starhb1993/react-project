import "./index.scss"
import React, { Component } from "react"
import { axios } from "&"
import UploadImg from "~/components/UploadImg"

export default class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: !!sessionStorage.token,
            mobile: null
        }
    }


    componentDidMount() {
        axios.post("/react/getMobile")
            .then(res => {
                this.setState({
                    mobile: res.data.result
                })
            })
    }

    handleGotoLogin = () => {
        this.props.history.push("/login")
    }

    handleLogout = () => {
        this.props.history.push("/login")
        let userInfo = localStorage.userInfo;
        if (userInfo) {
            userInfo = "";
        }
        sessionStorage.token = ""
    }

    render() {
        const {
            isLogin,
            mobile
        } = this.state
        return (
            <div className="mine">
                <div className="top-section">
                    {
                        isLogin && <div>
                            <UploadImg></UploadImg>
                            <p className="Loginmobile">{mobile}</p>
                        </div>
                    }
                    {
                        !isLogin && <div>
                            <div className="top-img" ></div>
                            <button className="btn">登录</button>
                        </div>
                    }
                </div>
                <section className="information">
                    <p className="information-info" style={{ textIndent: "1em", color: "#333333" }}>
                        收藏
        <span style={{ float: 'right', marginRight: "0.2rem" }}>></span>
                    </p>
                    <p className="information-info" style={{ textIndent: "1em", color: "#333333" }}>
                        最近浏览
        <span style={{ float: 'right', marginRight: "0.2rem" }}>></span>
                    </p>
                    <p className="information-info" style={{ textIndent: "1em", color: "#333333" }}>
                        待点评
        <span style={{ float: 'right', marginRight: "0.2rem" }}>></span>
                    </p>
                    <p className="information-info" style={{ textIndent: "1em", color: "#333333" }}>
                        订单
        <span style={{ float: 'right', marginRight: "0.2rem" }}>></span>
                    </p>
                    <p className="information-info" style={{ textIndent: "1em", color: "#333333" }}>
                        卡券
        <span style={{ float: 'right', marginRight: "0.2rem" }}>></span>
                    </p>
                    <p className="information-info" style={{ textIndent: "1em", color: "#333333" }}>
                        积分
        <span style={{ float: 'right', marginRight: "0.2rem" }}>></span>
                    </p>
                    <p className="information-info" style={{ textIndent: "1em", color: "#333333" }}>
                        钱包
        <span style={{ float: 'right', marginRight: "0.2rem" }}>></span>
                    </p>
                </section>
                <p id="logout" onClick={this.handleLogout}>退出当前账号</p>
            </div>
        )
    }

}