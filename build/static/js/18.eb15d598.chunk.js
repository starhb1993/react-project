(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[18],{336:function(e,t,n){},352:function(e,t,n){},417:function(e,t,n){"use strict";n.r(t);var a=n(12),o=n(14),c=n(15),i=n(13),r=n(16),s=(n(336),n(0)),l=n.n(s),u=n(8),h=n(9),d=(n(337),n(342)),m=n.n(d),p=(n(352),n(2)),b=n.n(p),f=n(62),j=[{txt:"\u9996\u9875",path:"/main/home",name:"home",icon:"icon-shouye"},{txt:"\u8ba2\u5355",path:"/main/order",name:"order",icon:"icon-icon-"},{txt:"\u6211\u7684",path:"/main/mine",name:"mine",icon:"icon-wode"}],y=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={selectedTab:"home"},n}return Object(r.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.hash;console.log(e);var t=e.split("#/main/")[1];this.setState({selectedTab:t})}},{key:"render",value:function(){var e=this;return console.log(this),l.a.createElement("div",{className:"footer"},l.a.createElement(m.a,{unselectedTintColor:"#949494",tintColor:"#ed5f34",barTintColor:"white"},j.map((function(t,n){return l.a.createElement(m.a.Item,{title:t.txt,key:n,icon:l.a.createElement("i",{style:{width:"22px",height:"22px",display:"inline-block"},className:"iconfont "+t.icon}),selectedIcon:l.a.createElement("div",{style:{width:"22px",height:"22px",display:"inline-block"},className:"iconfont "+t.icon}),selected:e.state.selectedTab==t.name,badge:n==j.length-2&&2,onPress:function(){e.setState({selectedTab:t.name}),f.c.push(t.path)},"data-seed":"logId"})}))))}}]),t}(s.Component);y.contextTypes={history:b.a.object},n.d(t,"default",(function(){return v}));var v=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{className:"box"},l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/main/home",component:Object(h.a)((function(){return Promise.all([n.e(10),n.e(11)]).then(n.bind(null,413))}))}),l.a.createElement(u.b,{path:"/main/order",component:Object(h.a)((function(){return Promise.all([n.e(13),n.e(17)]).then(n.bind(null,415))}))}),l.a.createElement(u.b,{path:"/main/mine",component:Object(h.a)((function(){return n.e(19).then(n.bind(null,416))}))}),l.a.createElement(u.b,{render:function(){return l.a.createElement(u.a,{to:"/main/home"})}})),l.a.createElement(y,this.props))}}]),t}(s.Component)},62:function(e,t,n){"use strict";n(113);var a=n(5),o=n(15),c=n(13),i=n(118),r=n(16),s=n(12),l=n(14),u=function(){function e(t,n){Object(s.a)(this,e),this.names=t,this.age=n}return Object(l.a)(e,[{key:"say",value:function(){}},{key:"todo",value:function(){}}]),e}();u.hobby=["eat","sleep"],(function(e){function t(e,n,a){var i;return Object(s.a)(this,t),(i=Object(o.a)(this,Object(c.a)(t).call(this,e,n))).score=a,i}return Object(r.a)(t,e),Object(l.a)(t,[{key:"goto",value:function(){}},{key:"say",value:function(){return Object(i.a)(Object(c.a)(t.prototype),"say",this).call(this)}}]),t}(u)).hobby=["read","music"];n(114);var h=n(115),d=n.n(h),m=n(72),p=n.n(m),b="http://47.105.60.69:1000/",f="";function j(e){d.a.hide(),d.a.fail(e,1)}function y(e){d.a.hide(),d.a.success(e,1)}p.a.defaults.baseURL=b,p.a.defaults.headers.common.token=f,p.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",p.a.interceptors.request.use((function(e){var t,n;return t=t||"\u8bf7\u6c42\u4e2d...",n=n||1,d.a.hide(),d.a.loading(t,n,(function(){console.log("Load complete !!!")})),f=sessionStorage.token?sessionStorage.token:"",e.headers.token=f,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25-\u7f51\u7edc\u5f02\u5e38",d.a.hide(),d.a.offline(t,1),Promise.reject(e)})),p.a.interceptors.response.use((function(e){return console.log(e),"3000"==e.data.code&&v.push("/login"),e.data.type?y(e.data.msg):0==e.data.type?j(e.data.msg):y(e.data.msg),e}),(function(e){return j("\u54cd\u5e94\u5931\u8d25-\u670d\u52a1\u5668\u5f02\u5e38"),Promise.reject(e)})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return p.a})),n.d(t,"b",(function(){return b}));var v=new a.b}}]);
//# sourceMappingURL=18.eb15d598.chunk.js.map