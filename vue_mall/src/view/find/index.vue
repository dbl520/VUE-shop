<template>
    <div class="find">
        <m-slidenav :navList="list" @selectTab="handlerSelect"></m-slidenav>
        <div class="find-floor" :key="key" v-for="(item,key) in articles">
            <div class="floor-top">
                <div class="floor-top-left">
                    <p class="article-title">{{item.title}}</p>
                    <p class="article-context">{{item.context}}</p>
                </div>
                <div class="floor-top-right">
                    <img :src="item.img"/>
                </div>
            </div>
            <div class="floor-bottom">
                <div class="floor-bottom-left">
                    <img :src="item.author.avatar"/>
                    <span>{{item.author.name}}</span>
                </div>
                <div class="floor-bottom-right">
                    <div class="publish-time">
                        <i class="iconfont">&#xe603;</i>
                        <span>{{item.publish}}</span>
                    </div>
                    <div class="view-num">
                        <i class="iconfont">&#xe6cd;</i>
                        <span>{{item.viewNum}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        id: 0,
                        value: '精选'
                    },
                    {
                        id: 1,
                        value: '生活'
                    },
                    {
                        id: 2,
                        value: '风尚'
                    },
                    {
                        id: 3,
                        value: '亲子'
                    },
                    {
                        id: 4,
                        value: '数码'
                    },
                    {
                        id: 5,
                        value: '美食'
                    },
                    {
                        id: 6,
                        value: '图书'
                    }
                ],
                articles:[
                    {
                        title:'苹果最惨的手机，售价降到两千档，却仍无人问津！',
                        context:'iphone4发布之后的大卖，即使现在iphone已经马上要出8了，但是仍有不少人还在用iphone4，这才使得苹果推出小屏，以满足用户对小屏手机的喜爱，而且这款小屏手机在性能上并不输给当代旗舰机，苹果原本以为这款小屏旗舰机会赢得满堂喝彩，但是发布之后一直不温不火，直到慢慢淡出了用户的视野。',
                        img:'http://m.360buyimg.com/mobilecms/s200x200_jfs/t7684/327/2063322255/452038/64ea237d/59a82027N65e3bd3c.png!q65.webp',
                        author:{
                            name:'奔跑的绵羊',
                            avatar:'https://m.360buyimg.com/mobilecms/s100x100_jfs/t3013/98/584972685/485529/dbdecf5a/57a867a0Ne8e8aac9.PNG!q65.webp'
                        },
                        publish:'10月31日',
                        viewNum:'12346'
                    }
                ]
            }
        },
        methods: {
            handlerSelect(e) {

            }
        }
    }
</script>

<style lang="less" scoped>
    .find {
        .find-floor {
            padding: 10px;
            background: #fff;
            box-shadow: 0px 1px 0px #eee;
            .floor-top {
                display: flex;
                .floor-top-left {
                    box-sizing: border-box;
                    flex-basis: 60%;
                    flex-shrink: 0;
                    padding-right: 10px;
                    .article-title {
                        font-size: 20px;
                        line-height: 27px;
                        color: #2e2e2e;
                        font-weight: 500;
                        margin-bottom: 10px;
                        height: 54px;
                        overflow: hidden;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    .article-context {
                        font-size: 16px;
                        line-height: 23px;
                        height: 46px;
                        color: #646464;
                        overflow: hidden;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                }
                .floor-top-right {
                    flex: 1;
                    img {
                        display: block;
                        width: 100%;
                        height: 110px;
                    }
                }
            }
            .floor-bottom {
                display: flex;
                height: 20px;
                padding-top: 15px;
                .floor-bottom-left {
                    display: flex;
                    flex-basis: 60%;
                    align-items: center;
                    img {
                        flex-basis: 13px;
                        height: 13px;
                    }
                    span {
                        flex: 1;
                        padding-left: 10px;
                        font-size: 12px;
                        color:gray;
                    }
                }
                .floor-bottom-right {
                    display: flex;
                    flex: 1;
                    font-size: 12px;
                    color:gray;
                    .publish-time {
                        display: flex;
                        align-items: center;
                        flex: 1;
                        i {
                            flex-grow: 0;
                        }
                        span {
                            flex-grow: 0;
                        }
                    }
                    .view-num {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        flex: 1;
                        i {
                            flex-grow: 0;
                        }
                        span {
                            flex-grow: 0;
                        }
                    }
                }
            }
        }
    }
</style>
