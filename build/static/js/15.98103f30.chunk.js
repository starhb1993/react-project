(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[15],{305:function(e,t,n){},410:function(e,t,n){"use strict";n.r(t),n.d(t,"mReg",(function(){return v})),n.d(t,"cReg",(function(){return y})),n.d(t,"default",(function(){return j}));n(112);var a=n(147),o=n.n(a),c=(n(291),n(293)),r=n.n(c),i=(n(300),n(303)),l=n.n(i),s=n(12),u=n(14),d=n(15),h=n(13),f=n(16),g=(n(305),n(0)),m=n.n(g),b=n(93),p=n(62),v=/^1(3|4|5|6|7|8|9)\d{9}$/,y=/^\d{4}$/,k=null,j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleCheckMobile=function(e){var t=n.code.state.value;n.state.toggle&&n.setState({codeFlag:v.test(e),loginFlag:v.test(e)&&y.test(t)})},n.handleCheckCode=function(e){var t=n.mobile.state.value;console.log(t),n.setState({loginFlag:v.test(t)&&y.test(e)})},n.start=function(){n.state.count>1?n.setState({count:--n.state.count,txt:"\u5269\u4f59 ".concat(n.state.count," S"),codeFlag:!1,toggle:!1}):(clearInterval(k),k=null,n.setState({count:60,txt:"\u53d1\u9001\u9a8c\u8bc1\u7801",codeFlag:!0,toggle:!0}))},n.computedTime=function(){n.start(),k=setInterval(n.start,1e3)},n.handleSendCode=function(){n.computedTime(),p.a.post("/react/aly/sendSms",{mobile:n.mobile.state.value}).then((function(e){}))},n.handleSumbit=function(){p.a.post("/react/checkCode",{mobile:n.mobile.state.value,code:n.code.state.value}).then((function(e){e.data.type?(sessionStorage.token=e.data.token,sessionStorage.mobile=n.mobile.state.value,n.props.history.push("/main/mine"),clearInterval(k),k=null):(sessionStorage.token="",sessionStorage.mobile="")}))},n.state={codeFlag:!1,loginFlag:!1,count:60,txt:"\u53d1\u9001\u9a8c\u8bc1\u7801",toggle:!0},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.codeFlag,a=t.loginFlag,c=t.txt;return m.a.createElement("div",null,m.a.createElement(b.a,{title:"\u624b\u673a\u53f7\u5feb\u6377\u767b\u5f55",show:!1,search:!0}),m.a.createElement(o.a,null,m.a.createElement(r.a,{type:"tel",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",clear:!0,ref:function(t){return e.mobile=t},onChange:this.handleCheckMobile},"86",m.a.createElement("div",{className:"EasyLogin_Mobile_Arrow"}),m.a.createElement(l.a,{type:"default",inline:!0,className:"l-btn",size:"small",style:{backgroundColor:"#f63"},disabled:!n,onClick:this.handleSendCode},c)),m.a.createElement(r.a,{type:"number",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",ref:function(t){return e.code=t},onChange:this.handleCheckCode},"\u9a8c\u8bc1\u7801"),m.a.createElement("div",{className:"form-info"},"\u672a\u6ce8\u518c\u7684\u624b\u673a\u53f7\u7801\u9a8c\u8bc1\u540e\u81ea\u52a8\u521b\u5efa\u70b9\u8bc4\u8d26\u6237"),m.a.createElement(l.a,{type:"default",disabled:!a,onClick:this.handleSumbit,style:{backgroundColor:"#f63",borderColor:"#f63",marginTop:6,marginBottom:6,color:"#fff",borderRadius:4,letterSpacing:6,fontSize:14,marginLeft:16,marginRight:16,height:40,lineHeight:"40px"}},"\u767b\u5f55"),m.a.createElement("div",{className:"extra login-user",style:{textDecoration:"none",fontSize:14,textAlign:"right",marginRight:6,height:10}})))}}]),t}(g.Component)},62:function(e,t,n){"use strict";n(113);var a=n(5),o=n(15),c=n(13),r=n(118),i=n(16),l=n(12),s=n(14),u=function(){function e(t,n){Object(l.a)(this,e),this.names=t,this.age=n}return Object(s.a)(e,[{key:"say",value:function(){}},{key:"todo",value:function(){}}]),e}();u.hobby=["eat","sleep"],(function(e){function t(e,n,a){var r;return Object(l.a)(this,t),(r=Object(o.a)(this,Object(c.a)(t).call(this,e,n))).score=a,r}return Object(i.a)(t,e),Object(s.a)(t,[{key:"goto",value:function(){}},{key:"say",value:function(){return Object(r.a)(Object(c.a)(t.prototype),"say",this).call(this)}}]),t}(u)).hobby=["read","music"];n(114);var d=n(115),h=n.n(d),f=n(72),g=n.n(f),m="http://47.105.60.69:1000/",b="";function p(e){h.a.hide(),h.a.fail(e,1)}function v(e){h.a.hide(),h.a.success(e,1)}g.a.defaults.baseURL=m,g.a.defaults.headers.common.token=b,g.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",g.a.interceptors.request.use((function(e){var t,n;return t=t||"\u8bf7\u6c42\u4e2d...",n=n||1,h.a.hide(),h.a.loading(t,n,(function(){console.log("Load complete !!!")})),b=sessionStorage.token?sessionStorage.token:"",e.headers.token=b,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25-\u7f51\u7edc\u5f02\u5e38",h.a.hide(),h.a.offline(t,1),Promise.reject(e)})),g.a.interceptors.response.use((function(e){return console.log(e),"3000"==e.data.code&&y.push("/login"),e.data.type?v(e.data.msg):0==e.data.type?p(e.data.msg):v(e.data.msg),e}),(function(e){return p("\u54cd\u5e94\u5931\u8d25-\u670d\u52a1\u5668\u5f02\u5e38"),Promise.reject(e)})),n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return g.a})),n.d(t,"b",(function(){return m}));var y=new a.b},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(94);var a=n(96),o=n.n(a),c=(n(88),n(89)),r=n.n(c),i=n(12),l=n(14),s=n(15),u=n(13),d=n(16),h=(n(97),n(0)),f=n.n(h),g=n(62),m=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleGoBack",value:function(e){e&&g.c.goBack()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.show,c=t.search;return f.a.createElement(o.a,{mode:"light",icon:a&&f.a.createElement(r.a,{type:"left"}),style:{color:"#333"},onLeftClick:function(){return e.handleGoBack(a)},rightContent:[!c&&f.a.createElement(r.a,{key:"0",type:"search",style:{marginRight:"16px"}})]},n)}}]),t}(h.Component)},97:function(e,t,n){}}]);
//# sourceMappingURL=15.98103f30.chunk.js.map