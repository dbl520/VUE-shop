<template>
    <div class="center">
        <div class="center-account-bg">
            <div class="center-account-wrap">
                <div class="center-account">
                    <div class="account-avatar">
                        <img :src="userInfo.avatar ? userInfo.avatar : require('../../assets/logo.png')">
                    </div>
                    <div class="account-msg">
                        <h3>{{userInfo.nickName}}</h3>
                        <div class="msg-wrap">
                            <div class="msg-item">
                                <i class="iconfont">&#xe629;</i>
                                <span>砖石会员</span>
                            </div>
                        </div>
                    </div>
                    <div class="account-setting" @click="goto('/account')">
                        <i class="iconfont">&#xe7da;</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-packet">
            <div class="order-packet-item flex">
                <div class="item-left flex flex-item">
                    <div class="item-left-icon flex-item">
                        <i class="iconfont">&#xe683;</i>
                        <span>待收款</span>
                    </div>
                    <div class="item-left-icon flex-item">
                        <i class="iconfont">&#xe60c;</i>
                        <span>待收货</span>
                    </div>
                    <div class="item-left-icon flex-item">
                        <i class="iconfont">&#xe665;</i>
                        <span>待评价</span>
                    </div>
                    <div class="item-left-icon flex-item">
                        <i class="iconfont">&#xe666;</i>
                        <span>售后/客服</span>
                    </div>
                </div>
                <div class="item-right flex-item-2">
                    <i class="iconfont">&#xe671;</i>
                    <span>订单</span>
                </div>
            </div>
            <div class="order-packet-item flex">
                <div class="item-left flex flex-item">
                    <div class="item-left-icon flex-item">
                        <label>125</label>
                        <span>京豆</span>
                    </div>
                    <div class="item-left-icon flex-item">
                        <label>4</label>
                        <span>优惠券</span>
                    </div>
                    <div class="item-left-icon flex-item">
                        <label>453.00</label>
                        <span>借条</span>
                    </div>
                    <div class="item-left-icon flex-item">
                        <label>753.00</label>
                        <span>我的金库</span>
                    </div>
                </div>
                <div class="item-right flex-item-2">
                    <i class="iconfont">&#xe602;</i>
                    <span>钱包</span>
                </div>
            </div>
        </div>
        <div class="my-data flex">
            <div class="data-item flex-item">
                <label>0</label>
                <span>商品关注</span>
            </div>
            <div class="data-item flex-item">
                <label>3</label>
                <span>店铺关注</span>
            </div>
            <div class="data-item flex-item">
                <label>0</label>
                <span>内容关注</span>
            </div>
            <div class="data-item flex-item">
                <label>100</label>
                <span>浏览记录</span>
            </div>
        </div>
        <m-goodgroup title="为您推荐">
            <div class="flex">
                <div class="flex-item-5 flex-border-2" :key="key" v-for="(item,key) in 5">
                    <m-goodbox :options="recommend" @click.native="goto('/goods/' + recommend.id)"></m-goodbox>
                </div>
            </div>
        </m-goodgroup>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                recommend: {
                    id: 1,
                    type: 'large',
                    imgUrl: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t11719/257/481321980/260610/bc7201c5/59f15b8aN8fb3c4f5.jpg!q70.jpg',
                    detail: '戴尔DELL灵越燃7000 II R1725S 14.0英寸轻薄窄边框笔记本电脑(i7-8550U 8G 128GSSD+1T MX150 2G独显 IPS)银',
                    sellOut: '4589',
                    price: '4999',
                    rate: '92%'
                }
            }
        },
        computed: {
            userInfo: {
                get() {
                    return this.$store.state.user.userInfo
                },
                set(val) {
                    this.$store.dispatch('initUserInfo', val);
                }
            }
        },
        methods: {
            getUserInfo() {
                const self = this;
                self.$http.userInfo().then(res => {
                    if (res.success === true) {
                        self.userInfo = res.data;
                    }
                }, error => {

                });
            }
        },
        created() {
            this.getUserInfo();
        }
    }
</script>

<style lang="less" scoped>
    .center {
        display: flex;
        flex-direction: column;
        .center-account-bg {
            background: #fff;
            overflow-x: hidden;
            .center-account-wrap {
                flex-basis: 100px;
                margin: 0px -25%;
                padding: 0px 25% 15px 25%;
                border-radius: 0px 0px 50% 50%;
                background: linear-gradient(90deg, #eb3c3c, #ff7459);
                .center-account {
                    position: relative;
                    display: flex;
                    .account-avatar {
                        flex-basis: 100px;
                        height: 100px;
                        line-height: 100px;
                        img {
                            width: 70px;
                            height: 70px;
                            margin-left: 20px;
                            border-radius: 70px;
                            border: 3px solid #fff;
                            vertical-align: middle;
                            background: #eee;
                        }
                    }
                    .account-msg {
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        padding-left: 10px;
                        h3 {
                            flex: 1;
                            height: 50px;
                            line-height: 50px;
                            font-size: 20px;
                            font-weight: 500;
                        }
                        .msg-wrap {
                            flex: 1;
                            .msg-item {
                                float: left;
                                height: 50px;
                                i {
                                    float: left;
                                    height: 50px;
                                    line-height: 50px;
                                    font-size: 20px;
                                }
                                span {
                                    float: left;
                                    height: 50px;
                                    line-height: 50px;
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                    .account-setting {
                        position: absolute;
                        top: 50%;
                        right: 15px;
                        transform: translate(-50%, -50%);
                        i {
                            font-size: 20px;
                            color: #eee;
                        }
                    }
                }
            }
        }
        .order-packet {
            background: #fff;
            .order-packet-item {
                padding: 3px 0px 10px 0px;
                box-shadow: 0px 1px 0px #eee;
                .item-left {
                    position: relative;
                    box-sizing: border-box;
                    padding-right: 5px;
                    border-right: 1px solid #eee;
                    .item-left-icon {
                        text-align: center;
                        i {
                            font-size: 20px;
                        }
                        label {
                            font-size: 16px;
                            font-weight: 600;
                        }
                        span {
                            display: block;
                            font-size: 14px;
                        }
                    }
                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        top: 50%;
                        right: 0px;
                        transform: translate(100%, -50%);
                        width: 0px;
                        height: 0px;
                        border-top: 5px solid transparent;
                        border-left: 5px solid #eee;
                        border-bottom: 5px solid transparent;
                    }
                }
                .item-right {
                    text-align: center;
                    i {
                        font-size: 20px;
                    }
                    span {
                        display: block;
                        font-size: 16px;
                    }
                }
            }
        }
        .my-data {
            margin-top: 10px;
            background: #fff;
            .data-item {
                padding: 10px 0px;
                text-align: center;
                label {
                    font-size: 18px;
                    color: #de181b;
                }
                span {
                    display: block;
                    font-size: 16px;
                }
            }
        }
    }
</style>
