import Vue from "vue";
import Vuex from "vuex";
import {
    stat
} from "fs";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //state访问状态对象
        logindata: localStorage["logindata"] ? JSON.parse(localStorage["logindata"]) : [],
        count: 1,
        carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
        addorders: localStorage["addorders"] ?
            JSON.parse(localStorage["addorders"]) : []
    },
    //Mutations修改状态
    // 同步状态
    mutations: {
        //加入购物车
        addcarts: function(state, data) {
            console.log(data);
            state.carts.push(data);
            console.log(state.carts);
            localStorage.setItem("carts", JSON.stringify(state.carts));
        },
        //加入订单
        addorder: function(state, data) {
            console.log(data);
            state.addorders.push(data);
            console.log(state.addorders);
            localStorage.setItem("addorders", JSON.stringify(state.addorders));
        },
        // 计算加
        add(state, index) {
            state.carts[index].value++;
            console.log("加");
            console.log(state.carts[index].value);
            console.log(state.carts);
        },
        //计算减
        reduce(state, index) {
            if (state.carts[index].value == 1) {
                state.carts[index].value == 1;
                console.log("减");
            } else {
                state.carts[index].value--;
                console.log("减");
                console.log(state.carts[index].value);
            }
        },
        // 删除购物车中的某个数据
        shanchu(state, index) {
            state.carts.splice(index, 1);
            console.log(state.carts);
            localStorage.setItem("carts", JSON.stringify(state.carts));
        },
        // 清除购物车
        settlement(state, index) {
            // 第一种使用这种清除 localStorage.clear();
            // 另一种给空覆盖
            state.carts = [];
            localStorage.setItem("carts", JSON.stringify(state.carts));
            // localStorage注意是json对象转字符串，getitem时要字符串转对象
            //清除localstorage
        },
        // 设置登录的数据
        setData: function(state) {
            this.state.logindata.push("111")
            localStorage.setItem("logindata", JSON.stringify(state.logindata));
            console.log(this.state.logindata, 'state33333')
        },
        // 设置退出的数据
        // checkoutData: function(state) {
        //     state.logindata = [];
        //     localStorage.setItem("logindata", JSON.stringify(state.logindata));
        //     console.log(state, 'state2222')
        // }

    },
    //getters计算过滤操作


    // 购物车中常见的合计?数量改变时的合计
    getters: {

        // heji:state=>{
        //     var sum=0;
        //     state.carts.forEach((cart)=>{
        //         sum+=cart.price*cart.value
        //     })
        //     return sum
        // },
    },

    //actions异步修改状态
    actions: {

    }
});
export default store;