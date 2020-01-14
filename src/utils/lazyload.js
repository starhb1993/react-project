

// 路由懒加载 
import React from "react";
import Loadable from "react-loadable"


// 通用的 loading组件 
const loadingComponent = () => {
    return (
        <div>loading</div>
    )
}


//   loading组件  通用的 如果传入 loading  有动画 
export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader,     // 需要懒加载的组件 
        loading
    })
}