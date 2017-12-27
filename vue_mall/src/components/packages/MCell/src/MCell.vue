<template>
    <div class="mcell">
        <div class="mcell-left">
            <span class="title" v-if="title">{{title}}</span>
            <slot></slot>
        </div>
        <div class="mcell-right">
            <i class="iconfont">&#xe639;</i>
            <span>{{value}}</span>
        </div>
    </div>
</template>

<script>
    export default{
        name:'MCell',
        props:{
            title:{
                type:String
            },
            value:{
                type:String
            }
        }
    }
</script>

<style lang='less' scoped>
.mcell{
    display:flex;
    background:#fff;
    padding:0px 10px;
    margin-bottom:1px;
    box-shadow:0px 1px 0px #eee;
    .mcell-left{
        flex-basis:45%;
        .title{
            height:48px;
            line-height:48px;
            font-size:16px;
        }
    }
    .mcell-right{
        display:flex;
        flex:1;
        flex-direction:row-reverse;
        align-items:center;
        color:gray;
        span{
            flex-grow:0;
            font-size:16px;
        }
        i{
             flex-grow:0;
             font-size:16px;
        }
    }
}
</style>