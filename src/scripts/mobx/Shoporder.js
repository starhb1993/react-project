import { observable, action } from "mobx"
import { axios } from "&"



class Shoporder {
    @observable orderList = []; //订单数据

    @action getorderList = async (url) => {
        const res = await axios.get(url);
        this.orderList = res.data.result;
    }

    @action delSeletOrder = (url, mobile, id) => {
        console.log(mobile, id)
        axios.post(url, {
            mobile,
            id
        }).then(res => {
            this.orderList = this.orderList.filter(item=>!item.id);
        })
    }
}



export default new Shoporder()