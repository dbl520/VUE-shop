<template>
    <div class="shopping">
        <m-loginbar :options="loginConfig"></m-loginbar>
        <div class="shopping-no-data" v-if="loginStatus">
            <div class="no-data-info">
                <i class="iconfont">&#xe631;</i>
                <p>购物车内还没商品哦，去逛逛吧~</p>
            </div>
            <div class="no-data-guide flex">
                <div class="guide-item item-ticket flex-item">
                    <span>优惠券</span>
                    <p>限量发放快去抢</p>
                </div>
                <div class="guide-item item-collection flex-item">
                    <span>我的收藏</span>
                    <p>你关心的都在这里</p>
                </div>
            </div>
        </div>
        <div class="shopping-data"></div>
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
                loginConfig: {
                    tip: '登录后可同步账户购物车中的商品',
                    handler: () => this.loginHandler()
                },
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
        methods: {
            loginHandler() {
                this.goto('/login');
            }
        }
    }
</script>

<style lang="less" scoped>
    .shopping-no-data {
        background: #fff;
        .no-data-info {
            padding: 10px 0px;
            text-align: center;
            box-shadow: 0px 1px 0px #eee;
            i {
                font-size: 40px;
                color: #de181b;
            }
            p {
                font-size: 14px;
            }
        }
        .no-data-guide {
            height: 70px;
            padding: 10px 0px;
            text-align: right;
            .guide-item {
                box-sizing: border-box;
                padding-right: 10px;
                span {
                    font-size: 16px;
                    color: #e93b3d;
                }
                p {
                    font-size: 14px;
                    color: gray;
                }
                &:not(last-child) {
                    box-shadow: 1px 0px 0px #eee;
                }
            }
            .item-ticket {
                background: url(../../static/images/shopping_ticket.png) no-repeat center;
            }
            .item-collection {
                background: url(../../static/images/shopping_collection.png) no-repeat center;
            }
        }
    }
</style>
