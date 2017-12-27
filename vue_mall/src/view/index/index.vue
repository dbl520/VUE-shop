<template>
    <div class="index">
        <div class="index-swiper-wrap">
            <swiper :list="swiperList" auto dots-position="center" v-model="currentSwiper"></swiper>
        </div>
        <div class="index-guide-wrap">
            <div class="guide-item">
                <i class="iconfont" style="background:#FF8247">&#xe605;</i>
                <label>所有分类</label>
            </div>
            <div class="guide-item">
                <i class="iconfont" style="background:#8470FF">&#xe68c;</i>
                <label>周边店铺</label>
            </div>
            <div class="guide-item">
                <i class="iconfont" style="background:#00EE00">&#xe638;</i>
                <label>关于我们</label>
            </div>
            <div class="guide-item">
                <i class="iconfont" style="background:#DB7093">&#xe64f;</i>
                <label>我的关注</label>
            </div>
            <div class="guide-item">
                <i class="iconfont" style="background:#9B30FF">&#xe64e;</i>
                <label>我的订单</label>
            </div>
        </div>
        <m-floor title="限时折扣">
            <good-sec-kill-timer slot="title-slot" @updateKillTime="updateGoodKillList"/>
            <div class="sell-out">
                <div class="sell-out-item item-4" :key="key" v-for="(item,key) in 5">
                    <m-goodbox :options="limitedSell"></m-goodbox>
                </div>
            </div>
        </m-floor>
        <m-floor title="今日推荐">
            <div class="today-recomend">
                <div class="today-recomend-item item-2" :key="key" v-for="(item,key) in 5">
                    <m-goodbox :options="recommend" @click.native="goto('/goods/' + recommend.id)"></m-goodbox>
                </div>
            </div>
        </m-floor>
    </div>
</template>

<script>
    import {Swiper} from "vux";
    import goodSecKillTimer from '../_separate/goodSecKillTimer'
    export default {
        data() {
            return {
                swiperList: [
                    {
                        url: "javascript:",
                        img:
                            "https://img1.360buyimg.com/da/jfs/t9901/257/2458243225/89973/40d02c/59f817c0Nc355c4ac.jpg"
                    },
                    {
                        url: "javascript:",
                        img:
                            "https://m.360buyimg.com/mobilecms/s720x322_jfs/t7474/165/3674636213/162694/696de299/59f81f30N0079f7a7.jpg!q70.jpg"
                    },
                    {
                        url: "javascript:",
                        img:
                            "https://img1.360buyimg.com/da/jfs/t7414/344/3202787705/74649/c604ffd1/59f1b6b0Nfde72062.jpg"
                    }
                ],
                currentSwiper: 0,
                limitedSell: {
                    type: 'middle',
                    imgUrl: 'https://m.360buyimg.com/n12/jfs/t10345/153/8126020/35934/75859fcd/59c3592bN7f7093dd.jpg!q70.jpg',
                    detail: '希捷（Seagate）Backup Plus 睿品1TB （二十周年纪念限量金色版）USB3.0 2.5英寸 移动硬盘 (STDR1000309)',
                    sellOut: '326',
                    price: '399',
                    rate: '96%'
                },
                recommend: {
                    id:1,
                    type: 'large',
                    imgUrl: 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t9676/103/2594462863/216219/8f584e98/59fa8c7eNed7256aa.jpg!q70.jpg',
                    detail: '特步女鞋 新品运动鞋女秋季女士跑步鞋休闲慢跑鞋子官方旗舰店 兰红/新品皮面 37',
                    sellOut: '326',
                    price: '399',
                    rate: '92%'
                },
            };
        },
        components: {
            Swiper,
            goodSecKillTimer
        },
        methods: {
            handlerMove() {

            },
            //秒杀时间更新触发，返回下个秒杀时间点
            updateGoodKillList(e){

            }
        }
    };
</script>

<style lang="less" scoped>
    .index {
        .index-guide-wrap {
            display: flex;
            background: #fff;
            padding: 10px;
            .guide-item {
                flex: 1;
                text-align: center;
                i {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    border-radius: 40px;
                    font-size: 25px;
                    color: #fff;
                }
                label {
                    display: block;
                    padding: 3px 0px;
                    font-size: 12px;
                }
            }
        }
        .sell-out {
            display: flex;
            flex-wrap: nowrap;
            width: 100%;
            border-top: 5px solid #fbf9fe;
            overflow-x: auto;
            .sell-out-item {
                box-sizing: border-box;
                flex-basis: 100%;
                flex-shrink: 0;
                &:not(:last-child) {
                    border-right: 5px solid #fbf9fe;
                }
            }
            .item-4 {
                flex-basis: 25%;
            }
            .item-2 {
                flex-basis: 50%;
            }
        }
        .today-recomend {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            border-top: 5px solid #fbf9fe;
            .today-recomend-item {
                box-sizing: border-box;
                flex-basis: 100%;
                flex-shrink: 0;
                border-bottom: 5px solid #fbf9fe;
                &:not(:nth-child(2)) {
                    border-right: 5px solid #fbf9fe;
                }
            }
            .item-4 {
                flex-basis: 25%;
            }
            .item-2 {
                flex-basis: 50%;
            }
        }
    }
</style>
