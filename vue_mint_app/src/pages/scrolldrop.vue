<template>
    <div class="tabbar">
        <div class="wrapper" ref="wrapper">
            <div class="bscroll-container">
                <!-- 刷新提示信息 -->
                <div class="top-tip">
                    <span class="refresh-hook">{{pulldownMsg}}</span>
                </div>
                <!-- 内容列表 -->
                <ul class="content">
                    <li v-for="item in data">{{item}}</li>
                </ul>
                <!-- 底部提示信息 -->
                <div class="bottom-tip">
                    <span class="loading-hook">{{pullupMsg}}</span>
                </div>
            </div>
        </div>

        <!-- alert提示刷新成功 -->
        <div class="alert-hook" :style="{display: alertHook}">刷新成功</div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
let count = 1;
export default {
        data(){
            return {
                data: [0,1,2,3,4,5,6],
                pulldownMsg: '下拉刷新',
                pullupMsg: '加载更多',
                alertHook: 'none'
            }
        },
        methods: {
            getData() {
                return new Promise(resolve => {  //模拟数据请求
                    setTimeout(() => {
                        const arr = [];
                        for (let i = 0; i < 20; i++) {
                            arr.push(count++)
                        }
                        resolve(arr)
                    }, 1000)
                })
            },
            refreshalert(){   //刷新成功提示
                this.alertHook = 'block';
                setTimeout(()=>{
                    this.alertHook = 'none'
                },1000)
            }
        },
        created(){
            const that = this;
            this.$nextTick(() => {
                    this.scroll = new BScroll(this.$refs.wrapper,{       //初始化better-scroll
                        probeType:1,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
                        click: true   //是否派发click事件
                    })
                    // 滑动过程中事件
                    this.scroll.on('scroll',(pos)=>{
                        if(pos.y > 30){
                            this.pulldownMsg = '释放立即刷新'
                        }
                    });
                    //滑动结束松开事件
                    this.scroll.on('touchEnd',(pos) =>{  //上拉刷新
                        if(pos.y > 30){
                            setTimeout(()=>{
                                that.getData().then((res)=>{
                                    //刷新数据
                                    that.data = res;
                                    //恢复刷新提示文本值
                                    that.pulldownMsg = '下拉刷新'
                                    //刷新成功后提示
                                    that.refreshalert();
                                    //刷新列表后，重新计算滚动区域高度
                                    that.scroll.refresh();
                                })
                            },2000)
                        } 
                        else if(pos.y<(this.scroll.maxScrollY - 30)){   //下拉加载
                            this.pullupMsg = '加载中。。。';
                            setTimeout(()=>{
                                that.getData().then((res)=>{
                                    //恢复文本值
                                    that.pullupMsg = '加载更多';
                                    that.data = this.data.concat(res);
                                    that.scroll.refresh();
                                })
                            },2000)
                            
                        }
                    })      
            })
        }
    }

</script>
<style  rel="stylesheet/scss">
.wrapper{
        width: 100%;
        height: 100vh;
        background: #ccc;
        overflow: hidden;
        position: relative;
    }

    li{
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        text-align: center;
    }

    /* 下拉、上拉提示信息 */
    .top-tip{
        position: absolute;  
        top: -40px;  
        left: 0;
        z-index: 1;  
        width: 100%;  
        height:40px;  
        line-height:40px;  
        text-align:center;
        color: #555;
    } 
      
    .bottom-tip{
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #777;
        background: #f2f2f2;
        position: absolute;
        bottom: -35px;
        left: 0;
    }


    /* 全局提示信息 */
    .alert-hook{
        display: none;
        position: fixed;
        top: 62px;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        background: rgba(7, 17, 27, 0.5);
    }


</style>