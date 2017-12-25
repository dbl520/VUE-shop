<template>
    <div class="goods">
        <header class="goods-header">
            <div class="goods-header-wrap">
                <div class="header-left">
                    <i class="iconfont" @click="back">&#xe637;</i>
                </div>
                <div class="header-middle">
                    <div class="goods-tab">
                        <div class="goods-tab-item" :class="{'goods-tab-item-active':active === 1}"
                             @click="selectTab(1)">
                            <span>商品</span>
                        </div>
                        <div class="goods-tab-item" :class="{'goods-tab-item-active':active === 2}"
                             @click="selectTab(2)">
                            <span>详情</span>
                        </div>
                        <div class="goods-tab-item" :class="{'goods-tab-item-active':active === 3}"
                             @click="selectTab(3)">
                            <span>评价</span>
                        </div>
                    </div>
                </div>
                <div class="header-right">
                    <i class="iconfont" @click="dropVisible = !dropVisible">&#xe627;</i>
                    <div class="navigatoer-drop" v-if="dropVisible">
                        <div class="drop-item">
                            <i class="iconfont">&#xe604;</i>
                            <span>消息</span>
                        </div>
                        <div class="drop-item">
                            <i class="iconfont">&#xe677;</i>
                            <span>首页</span>
                        </div>
                        <div class="drop-item">
                            <i class="iconfont">&#xe626;</i>
                            <span>搜索</span>
                        </div>
                        <div class="drop-item">
                            <i class="iconfont">&#xe64f;</i>
                            <span>我的关注</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="goods-slider">
            <!--商品页-->
            <div class="goods-slider-item" v-if="active === 1">
                <swiper :aspect-ratio="1.8/2" :list="swiperList" v-model="swiperIndex"></swiper>
                <!--
                    秒杀楼层
                    在大型页面中，即使楼层不像button这种通用组件这么高复用性
                    但为了利于该页面维护
                    还是将页面拆分开来
                    显得没有那么臃肿
                -->
                <good-sec-kill-floor></good-sec-kill-floor>
            </div>
            <!--详情页-->
            <div class="goods-slider-item" v-if="active === 2"></div>
            <!--评论页-->
            <div class="goods-slider-item" v-if="active === 3"></div>
        </section>
        <footer class="shopping-concern">
            <div class="shopping-concern-box">
                <div class="box-icon">
                    <div class="icon-item">
                        <i class="iconfont">&#xe666;</i>
                        <span>供应商</span>
                    </div>
                    <div class="icon-item">
                        <i class="iconfont">&#xe64f;</i>
                        <span>关注</span>
                    </div>
                    <div class="icon-item">
                        <i class="iconfont">&#xe600;</i>
                        <span>购物车</span>
                    </div>
                </div>
                <div class="box-add-shopping">
                    <span>加入购物车</span>
                </div>
                <div class="box-buy">
                    <span>立即购买</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import {Swiper} from "vux";
    import goodSecKillFloor from '../_separate/goodSecKillFloor'

    export default {
        data() {
            return {
                active: 1,
                swiperList: [
                    {
                        url: "javascript:",
                        img:
                            "https://m.360buyimg.com/n12/s824x824_jfs/t9958/8/1638437389/20043/372722d2/59e42830N1afe7736.jpg!q70.jpg.webp"
                    },
                    {
                        url: "javascript:",
                        img:
                            "https://m.360buyimg.com/n12/s824x824_jfs/t9787/309/1633930906/65379/8fb80cc0/59e42831N83d658b3.jpg!q70.jpg.webp"
                    },
                    {
                        url: "javascript:",
                        img:
                            "https://m.360buyimg.com/n12/jfs/t10639/290/1648891820/31320/2f39ac90/59e42830Ndf5e6577.jpg!q70.jpg"
                    }
                ],
                swiperIndex: 1,
                dropVisible: false
            }
        },
        components: {
            Swiper,
            goodSecKillFloor
        },
        methods: {
            selectTab(val) {
                this.active = val;
            }
        }
    }
</script>
<style lang="less" scoped>
    .goods {
        position: fixed;
        display: flex;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        flex-direction: column;
        .goods-header {
            position: fixed;
            top: 0px;
            right: 0px;
            left: 0px;
            z-index: 10;
            .goods-header-wrap {
                display: flex;
                align-items: center;
                height: 54px;
                background: #fff;
                box-shadow: 0px 1px 0px #eee;
                .header-left {
                    flex-basis: 20%;
                    i {
                        display: inline-block;
                        height: 40px;
                        width: 40px;
                        padding-left: 10px;
                        line-height: 40px;
                        font-size: 20px;
                    }
                }
                .header-middle {
                    flex: 1;
                    .goods-tab {
                        display: flex;
                        width: 80%;
                        margin: 0px auto;
                        .goods-tab-item {
                            position: relative;
                            flex: 1;
                            text-align: center;
                            span {
                                height: 54px;
                                line-height: 54px;
                                font-size: 16px;
                            }
                        }
                        .goods-tab-item-active {
                            span {
                                font-size: 18px;
                            }
                            &::after {
                                position: absolute;
                                top: 100%;
                                left: 0%;
                                display: block;
                                content: '';
                                height: 2px;
                                width: 100%;
                                transform: translate(0%, -50%);
                                background: #de181b;
                            }
                        }
                    }
                }
                .header-right {
                    position: relative;
                    flex-basis: 20%;
                    text-align: right;
                    i {
                        display: inline-block;
                        height: 40px;
                        width: 40px;
                        padding-right: 10px;
                        line-height: 40px;
                        font-size: 20px;
                    }
                    .navigatoer-drop {
                        position: absolute;
                        top: 47px;
                        right: 5px;
                        width: 140px;
                        box-sizing: border-box;
                        padding: 5px;
                        background: RGBA(0, 0, 0, 0.7);
                        color: white;
                        min-height: 80px;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                        border-bottom-right-radius: 5px;
                        &::before {
                            position: absolute;
                            top: -14px;
                            right: 0px;
                            display: block;
                            content: '';
                            width: 0px;
                            height: 0px;
                            border-bottom: 14px solid RGBA(0, 0, 0, 0.8);
                            border-right: 14px solid transparent;
                            border-left: 14px solid transparent;
                        }
                        .drop-item {
                            display: flex;
                            padding: 8px 0px;
                            font-size: 16px;
                            i {
                                display: block;
                                width: 50px;
                                height: 25px;
                                text-align: center;
                                line-height: 25px;
                                flex-grow: 0;
                                padding: 0px;
                            }
                            span {
                                flex: 1;
                                text-align: left;
                            }
                            &:not(:last-child) {
                                box-shadow: 0px 5px 1px -5px white;
                            }
                        }
                    }
                }
            }
        }
        .goods-slider {
            position: relative;
            flex: 1;
            .goods-slider-item {
                position: absolute;
                top: 54px;
                bottom: 0px;
                width: 100%;
                overflow-x: hidden;
                overflow-y: auto;
            }
        }
        .shopping-concern {
            position: fixed;
            bottom: 0px;
            left: 0px;
            right: 0px;
            .shopping-concern-box {
                display: flex;
                width: 100%;
                height: 54px;
                background: #fff;
                box-shadow: 0px -1px 0px #eee;
                .box-icon {
                    flex-basis: 50%;
                    display: flex;
                    .icon-item {
                        flex: 1;
                        text-align: center;
                        padding: 4px 0px;
                        i {
                            display: block;
                            font-size: 20px;
                            color: #232326;
                        }
                        span {
                            display: block;
                            font-size: 12px;
                            color: #232326;
                        }
                    }
                }
                .box-add-shopping {
                    flex: 1;
                    background: #fec91e;
                    text-align: center;
                    span {
                        line-height: 54px;
                        font-size: 16px;
                        color: #fff;
                    }
                }
                .box-buy {
                    flex: 1;
                    background: #de181b;
                    text-align: center;
                    span {
                        line-height: 54px;
                        font-size: 16px;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>