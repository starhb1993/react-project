import "./index.scss"
import React, { Component } from "react"
import {
    Button,
    WhiteSpace,
    List,
    WingBlank,
    InputItem
} from "antd-mobile";
import Head from "~/components/head"
import { axios } from "&";

export const mReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
export const cReg = /^\d{4}$/


let timer = null;
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            codeFlag: false,
            loginFlag: false,
            count: 60,
            txt: "发送验证码",
            toggle: true
        }
    }

    handleCheckMobile = (mobile) => {
        // console.log(mobile);
        var code = this.code.state.value;
        if (this.state.toggle) {
            this.setState({
                codeFlag: mReg.test(mobile),
                loginFlag: mReg.test(mobile) && cReg.test(code)
            })
        }

    }

    handleCheckCode = (code) => {
        // console.log(code);
        var mobile = this.mobile.state.value
        console.log(mobile)
        this.setState({
            loginFlag: mReg.test(mobile) && cReg.test(code)
        })
    }

    start = () => {
        if (this.state.count > 1) {
            this.setState({
                count: --this.state.count,
                txt: `剩余 ${this.state.count} S`,
                codeFlag: false,
                toggle: false
            })
        } else {
            clearInterval(timer);
            timer = null;
            this.setState({
                count: 60,
                txt: '发送验证码',
                codeFlag: true,
                toggle: true
            })
        }
    }

    computedTime = () => {
        this.start();
        timer = setInterval(this.start, 1000);
    }

    handleSendCode = () => {
        // 发送验证码 
        this.computedTime();
        axios.post("/react/aly/sendSms", {
            mobile: this.mobile.state.value
        }).then(res => {

        })
    }

    handleSumbit = () => {
        // 校验验证码 
        axios.post("/react/checkCode", {
            mobile: this.mobile.state.value,
            code: this.code.state.value
        }).then(res => {
            if (!!res.data.type) {
                sessionStorage.token = res.data.token;
                sessionStorage.mobile = this.mobile.state.value;
                this.props.history.push("/main/mine");
                clearInterval(timer);
                timer = null;
            } else {
                sessionStorage.token = "";
                sessionStorage.mobile = "";
            }
        })
    }

    render() {
        const {
            codeFlag,
            loginFlag,
            txt
        } = this.state;
        return (
            <div>
                <Head title="手机号快捷登录" show={false} search={true} ></Head>
                <List>
                    <InputItem
                        type="tel"
                        placeholder="请输入手机号"
                        clear
                        ref={el => this.mobile = el}
                        onChange={this.handleCheckMobile}
                    >86<div className="EasyLogin_Mobile_Arrow"></div>
                        <Button
                            type="default"
                            inline
                            className="l-btn"
                            size="small"
                            style={{ backgroundColor: "#f63" }}
                            disabled={!codeFlag}
                            onClick={this.handleSendCode}
                        >{txt}
                        </Button>
                    </InputItem>
                    <InputItem
                        type="number"
                        placeholder="请输入验证码"
                        ref={el => this.code = el}
                        onChange={this.handleCheckCode}
                    >验证码</InputItem>
                    <div className="form-info">未注册的手机号码验证后自动创建点评账户</div>
                    <Button
                        type="default"
                        disabled={!loginFlag}
                        onClick={this.handleSumbit}
                        style={{ backgroundColor: "#f63", borderColor: "#f63", marginTop: 6, marginBottom: 6, color: "#fff", borderRadius: 4, letterSpacing: 6, fontSize: 14, marginLeft: 16, marginRight: 16, height: 40, lineHeight: "40px" }}
                    >登录</Button>
                    <div className="extra login-user" style={{ textDecoration: 'none', fontSize: 14, textAlign: "right", marginRight: 6, height: 10 }}></div>
                </List>
            </div>
        )
    }

}